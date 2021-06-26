import BookService from './service';
import { HttpError } from '../../config/error';
import BookModel, { IBookBaseModel, IBookModel } from './model';
import { NextFunction, Request, Response } from 'express';
import { uriToHtml, getBookSchemaFromHtml } from './helpers';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { skip, take } = req.params
        const books: IBookModel[] = await BookService.findAll(Number(skip) || 0, Number(take) || 0);

        res.status(200).json(books);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const book: IBookModel = await BookService.findOne(req.params.id);

        res.status(200).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { uri } = req.body

        if (!uri) res.status(400).json({ error: "To insert a book, you need to send a valid uri as part of your request." })
        
        const html = await uriToHtml(uri)
        const bookBody: IBookBaseModel = {
            ...getBookSchemaFromHtml(html),
            uri,
            create_date: new Date().toISOString(),
            update_date: new Date().toISOString()
        }
        
        const found = await BookModel.findOne({ isbn: bookBody.isbn })
        if (found) res.status(400).json({ error: `The book "${found.title}" already exists in the database` })
        
        const book: IBookModel = await BookService.insert(bookBody);

        res.status(201).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const book: IBookModel = await BookService.remove(req.params.id);

        res.status(200).json(book);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}