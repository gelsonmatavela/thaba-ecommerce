const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    codigo_de_departamento: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    nome: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    imagem: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
});

module.exports = mongoose.model('Category', categorySchema);