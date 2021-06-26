import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

export interface TocItem {
    title: string,
    uri: string,
    level: string,
    read: boolean
}

export interface IBookSimplesModel {
    uri: string;
    title: string;
    img: string;
    description: string;
    isbn: string;
    authors: string;
    release_date: string;
    deleted: boolean;
    stars: number;
    // toc: TocItem[];
    toc: string;
}

/**
 * @export
 * @interface IBookBaseModel
 * @extends {Document}
 */
export interface IBookBaseModel extends IBookSimplesModel {
    create_date: string;
    update_date: string;
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
    deleted: Boolean,
    authors: String,
    stars: Number,
    toc: String,
    create_date: String,
    update_date: String
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