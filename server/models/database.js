const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'falha ao conectar'));
db.once('open', function () {
    console.log('Servidor connectado');
});

// Modelos/Modelos
require('./Category');
require('./artigo');