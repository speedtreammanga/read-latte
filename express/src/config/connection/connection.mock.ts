import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = new MongoMemoryServer()

export const db = {
    connect: async () => {
        const uri = await mongod.getUri()
        const mongooseOps: mongoose.ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            poolSize: 10
        }
        await mongoose.connect(uri, mongooseOps)
    },
    
    close: async () => {
        await mongoose.connection.dropDatabase() 
        await mongoose.connection.close()
        await mongod.stop()
    },
    
    clear: async () => {
        const collections = mongoose.connection.collections
        Object.values(collections).forEach(collection => collection.deleteMany({}))
    }
}