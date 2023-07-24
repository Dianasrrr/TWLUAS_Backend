const mongoose = require('mongoose');

// Mengganti 'nama-database' dengan nama yang sesuai
const databaseName = 'nama-database';

// Mengganti 'mongodb://localhost:27017/' dengan URL MongoDB yang sesuai
const mongoURL = `mongodb+srv://dian2100016007:dianpk@diantoro.dnrklpa.mongodb.com/responsi?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
