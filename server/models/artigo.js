const mongoose = require('mongoose');


const artigosSchema = new mongoose.Schema({
    departamento: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    codigo_produto: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    categoria: {
        type: String,
        enum: ['Bolsa', 'Mochila', 'Mala de Laptop', 'Sacola de Viagem', 'Carteira', 'Capa de Celular', 'Mala Informativa'],
        required: [true, 'Este escopo deve ser preenchido!']
    },
    nome: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    marca: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    material: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    quantidade: {
        type: Number,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    descricao: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    preco: {
        type: Number,
        required: [true, 'Este escopo deve ser preenchido!']
    },
    tipo_de_fecho: {
        type: String
    },
    
    cor: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
   dimensao: {
       type: String
    },
   
   numero_de_bolsos: {
       type: String
    },
    imagem: {
        type: String,
        required: [true, 'Este escopo deve ser preenchido!']
    },
});

artigosSchema.index({ nome: 'text', descricao: 'text' });
// WidCard indexing
// artigosSchema.index({ "$**": 'text});

module.exports = mongoose.model('Artigos', artigosSchema);

