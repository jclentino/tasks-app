require('dotenv').config()

const config = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL, 
    secret_key: process.env.SECRET_KEY,
}

module.exports = {
    config
}