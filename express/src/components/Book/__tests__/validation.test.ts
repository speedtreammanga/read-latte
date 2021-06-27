import { IBookBaseModel } from '../model'
import BookValidation from '../validation'

describe("testing Books validation rules", () => {
    test("createBook should validate input", () => {
        const validBook: IBookBaseModel = {
            uri: "https://oreilly.com/book/preview/some-book-title",
            title: "Some Book Title",
            img: "https://imgur.com/4223x.jpg",
            description: "Some book description here...",
            isbn: "876675644390",
            authors: "Alexandre Doe & Samuel Finch",
            release_date: "November 2020",
            archived: false,
            stars: 3,
            toc: JSON.stringify([{
                level: "1",
                read: false,
                title: "Chapter 1. How not to read",
                uri: "https://oreilly.com/book/preview/some-book-title#chap1"
            }]),
            create_date: new Date().toISOString(),
            update_date: new Date().toISOString()
        }
        let res = BookValidation.createBook(validBook)
        expect(res.error).toBeUndefined()
        expect(res.value).toStrictEqual(validBook)
        
        delete validBook.authors
        res = BookValidation.createBook(validBook)
        expect(res.error).not.toBeUndefined()
        expect(res.error.message).toEqual('"authors" is required')
        expect(res.value).toStrictEqual(validBook)
    })

    test("getPaged should validate input", () => {
        const input0 = { skip: 2, limit: 10 }
        const input1 = { skip: -1, limit: 10 }
        const input2= { skip: 2 }
        const input3 = { limit: 10 }
        const input4 = { }

        expect(BookValidation.getPaged(input0).error).toBeUndefined()
        expect(BookValidation.getPaged(input1).error).not.toBeUndefined()
        expect(BookValidation.getPaged(input2).error).not.toBeUndefined()
        expect(BookValidation.getPaged(input3).error).not.toBeUndefined()
        expect(BookValidation.getPaged(input4).error).not.toBeUndefined()
    })

    test.skip("getBook should validate id", () => {
        expect(BookValidation.getBook({ id: "XlS65s546dJBXXiokjhsadgh8756Vhj" }).error).toBeUndefined()
        expect(BookValidation.getBook({ id: "^XlS65s546dJBXXiokjhsadgh8756Vhj" }).error).not.toBeUndefined()
    })

    test.skip("removeBook should validate id", () => {
        expect(BookValidation.getBook({ id: "XlS65s546dJBXXiokjhsadgh8756Vhj" }).error).toBeUndefined()
        expect(BookValidation.getBook({ id: "^XlS65s546dJBXXiokjhsadgh8756Vhj" }).error).not.toBeUndefined()
    })
})