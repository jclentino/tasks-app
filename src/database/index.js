const mongoose = require('mongoose')
const { config } = require('../../config')

const getConnectionDb = async ()=> {
    try {
        await mongoose.connect(config.database_url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 500000000
        });
        console.log('Mongo database connected successfully');
      } catch (e) {
        console.error('Connection to mongo database failed.. ', e);
      }
}

module.exports = { getConnectionDb }