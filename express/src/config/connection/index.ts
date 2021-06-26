let db

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
    db = require('./connection')
} else {
    db = require('./connection.mock')
}

export default db