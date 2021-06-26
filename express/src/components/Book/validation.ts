import * as Joi from 'joi';
import Validation from '../validation';
import { IBookBaseModel, IBookModel } from './model';

/**
 * @export
 * @class BookValidation
 * @extends Validation
 */
class BookValidation extends Validation {

    /**
     * Creates an instance of BookValidation.
     * @memberof BookValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IBookBaseModel} params
     * @returns {Joi.ValidationResult<IBookBaseModel>}
     * @memberof BookValidation
     */
    createBook(params: IBookBaseModel): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            uri: Joi.string()
                .trim()
                .regex(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/)
                .required(),
            title: Joi.string().trim().required(),
            img: Joi.string().trim().required(),
            authors: Joi.string().trim().required(),
            // toc: Joi.array().items(Joi.object().keys({
            //     title: Joi.string().trim().required(),
            //     uri: Joi.string().trim().required(),
            //     level: Joi.string().trim().required(),
            //     read: Joi.boolean().required()
            // }).required()).required(),
            toc: Joi.string().required(),
            description: Joi.string().trim().required(),
            isbn: Joi.string().trim().required(),
            deleted: Joi.boolean().required(),
            release_date: Joi.string().trim().required(),
            create_date: Joi.date().required(),
            update_date: Joi.date().required(),
            stars: Joi.number().min(0).max(5).required()
        }).required()
        return schema.validate(params)
    }

    getPaged(params: { skip?: number, limit?: number}): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            skip: Joi.number().min(0).required(),
            limit: Joi.number().min(1).required()
        })
        return schema.validate(params)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof BookValidation
     */
    getBook(body: { id: string }): Joi.ValidationResult {

        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        }).required();

        return schema.validate(body)
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof BookValidation
     */
    removeBook(body: { id: string }): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required()
        }).required();

        return schema.validate(body)
    }
}

export default new BookValidation();