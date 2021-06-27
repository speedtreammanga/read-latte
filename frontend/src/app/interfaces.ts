export interface TocItem {
    title: string
    uri: string
    level: string
    read: boolean
}

export interface IBookModel {
    _id: string
    uri: string
    title: string
    img: string
    description: string
    isbn: string
    authors: string
    release_date: string
    stars: number
    archived: boolean
    toc: string
    
}

export interface IBookModelArchive extends IBookModel {
    archived: boolean
}

export interface IBookModelPage extends IBookModel {
    toc: string
}