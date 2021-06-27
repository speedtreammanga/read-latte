import nodeFetch from 'node-fetch'
import cheerio from 'cheerio'
import { IBookSimplestModel, TocItem } from './model'

export async function uriToHtml(url: string): Promise<string> {
    try {
        const result = await nodeFetch(url)
        return await result.text()
    } catch (e) {
        throw new Error(e)
    }
}

export function getBookSchemaFromHtml(content: string): IBookSimplestModel {
    try {
        const $ = cheerio.load(content)
        const $body = $('body')
        const arrRelease_date = $($body.find('.t-release-date')[0]).text().split(' ')
        const arrIsbn = $($body.find('.t-isbn')[0]).text().split(' ')
    
        const toc: TocItem[] = []

        $body.find('.detail-toc li')
            .each(function forEachTocLi(i, el) { 
                const $el = $(el)
                const $a = $($el.find('a')[0])
                toc.push({
                    title: $a.text(),
                    uri: $a.attr('href'),
                    level: $el.attr('class').split(' ')[0].split('-')[2],
                    read: false,
                })
            })

        return {
            toc: JSON.stringify(toc),
            title: $($body.find('.t-title')[0]).text(),
            authors: $($body.find('.t-authors')[0]).text(),
            isbn: arrIsbn[1],
            release_date: `${arrRelease_date[1]} ${arrRelease_date[2]}`,
            img: $($body.find('.t-cover-img')[0]).attr('src'),
            description: $($body.find('.t-description span p')[0]).text(),
            stars: 0,
            uri: ""
        }
    } catch (e) {
        throw new Error(e)
    }
}