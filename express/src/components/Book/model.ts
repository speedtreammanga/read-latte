import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

export interface TocItem {
    title: string,
    uri: string,
    level: string,
    read: boolean
}

export interface IBookSimplestModel {
    uri: string;
    title: string;
    img: string;
    description: string;
    isbn: string;
    authors: string;
    release_date: string;
    stars: number;
    // toc: TocItem[];
    toc: string;
}

/**
 * @export
 * @interface IBookBaseModel
 * @extends {Document}
 */
export interface IBookBaseModel extends IBookSimplestModel {
    create_date: string;
    update_date: string;
    archived: boolean;
}

/**
 * @export
 * @interface IBooksModel
 * @extends {Document}
 */
export type IBookModel = IBookBaseModel & Document

const BookSchema: Schema = new Schema({
    uri: {
        type: String,
        unique: true
    },
    title: String,
    img: String,
    description: String,
    isbn: {
        type: String,
        unique: true
    },
    release_date: String,
    authors: String,
    stars: Number,
    toc: String,
    create_date: String,
    update_date: String,
    archived: Boolean
}, {
    collection: 'bookmodel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise<void> {
    const book: any = this; // tslint:disable-line
    book.update_date = new Date()
    try {
        next();
    } catch (error) {
        return next(error);
    }
});

export default connections.db.model<IBookModel>('IBookModel', BookSchema);