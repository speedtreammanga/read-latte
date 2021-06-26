import * as Joi from 'joi';
import BookModel, { IBookModel, IBookBaseModel } from './model';
import BookValidation from './validation';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IBookModelService}
 */
const BookService = {
    /**
     * @param {number} skip
     * @param {number} limit
     * @returns {Promise<IBookModel[]>}
     * @memberof BookService
     */
    async findAll(skip?: number, limit?: number): Promise<IBookModel[]> {
        try {
            const paged = { skip: skip || 0, limit: limit || 10 }
            const validate: Joi.ValidationResult = BookValidation.getPaged(paged)

            if (validate.error) {
                throw new Error(validate.error.message)
            }

            return await BookModel.find({}, '-toc')
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise<IBookModel>}
     * @memberof BookService
     */
    async findOne(id: string): Promise<IBookModel> {
        try {
            const validate: Joi.ValidationResult = BookValidation.getBook({ id });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await BookModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IBookModel} book
     * @returns {Promise<IBookModel>}
     * @memberof BookService
     */
    async insert(body: IBookBaseModel): Promise<IBookModel> {
        try {
            const validate: Joi.ValidationResult = BookValidation.createBook(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const book: IBookModel = await BookModel.create(body);
            return book;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise<IBookModel>}
     * @memberof BookService
     */
    async remove(id: string): Promise<IBookModel> {
        try {
            const validate: Joi.ValidationResult = BookValidation.removeBook({ id });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            // const book = await BookModel.findById({ id: Types.ObjectId(id) })
            // soft del
            // const book = await BookModel.findByIdAndUpdate(
            //     { _id: Types.ObjectId(id) },
            //     { deleted: true },
            //     { upsert: true },
            // )
            // hard del
            const book = await BookModel.findOneAndRemove({ _id: Types.ObjectId(id) })
            return book;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default BookService;