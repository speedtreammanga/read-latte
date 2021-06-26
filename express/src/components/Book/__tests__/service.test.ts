import BookService from '../service'
import { db } from '../../../config/connection/connection.mock'

describe("testing BookService", () => {
    beforeAll(async () => await db.connect())
    afterEach(async () => await db.clear())
    afterAll(async () => await db.close())

    // test("", () => {
    //     BookService.
    // })
})