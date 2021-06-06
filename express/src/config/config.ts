const config = {
    database: {
        MONGO_DB_URI: process.env.MONGO_URI,
        MONGO_DB_MAIN: process.env.MONGO_DB_MAIN,
    },
    session: {
        secret: process.env.NODE_SESSION_SECRET
    },
    node: {
        port: process.env.PORT,
        secret: process.env.NODE_SECRET
    }
}

export default config