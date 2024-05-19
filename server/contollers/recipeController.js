require('../models/database');
const Category = require('../models/Category');
const Artigos = require('../models/artigo');

/**
 * pagina get /
 * Home page
 */


exports.homepage = async (req, res) => {

    try {
        const limitNumber = 4;
        const limitNumbers = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Artigos.find({}).sort({ _id: - 1 }).limit(limitNumbers);
        const bolsa = await Artigos.find({ 'departamento': 'Bolsa' }).limit(limitNumbers);
        const mala = await Artigos.find({ 'departamento': 'Mala Informativa'  }).limit(limitNumbers);
        const sacola = await Artigos.find({ 'departamento': 'Sacola de Viagem'}).limit(limitNumbers);
        const carteira = await Artigos.find({ 'departamento': 'Carteira'}).limit(limitNumbers);
        const mochila = await Artigos.find({ 'departamento': 'Mochila' }).limit(limitNumbers);
        const celular = await Artigos.find({ 'departamento': 'Capa de Celular'}).limit(limitNumbers);

        const artigo = { latest, bolsa, mala, sacola, carteira, mochila, celular };

        res.render('index', { title: 'Thaba Serviços| Index', categories, artigo  });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}


/**
 * pagina get /categoriS/CATEGORIES
 * Categories
 */


exports.exploreCategories = async (req, res) => {

    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('categories', { title: 'Thaba Serviços| Categoria dos Produtos', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}

/**
 * pagina get /categories/:id
 * Categories by id
 */


exports.exploreCategorieById = async (req, res) => {

    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Artigos.find({'departamento': categoryId}).limit(limitNumber);

        res.render('categories', { title: 'Thaba Serviços | Categoria dos Produtos', categoryById });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}


/**
 * pagina get /Artigo/:id
 * Categories
 */
exports.exploreArtigos = async (req, res) => {

    try {
        let artigoId = req.params.id;

        const artigo = await Artigos.findById(artigoId);


        res.render('artigo', { title: 'Thaba Serviços| Artigo', artigo});
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}


// Artigos

/*
async function insertDummyArtigosData() {
    try {
        await Artigos.insertMany(
            [
                {
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-01.jpeg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                },
 
                    {    
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-05.jpg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                },
                {
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-05.jpg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                },
                {
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-01.jpeg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                },
                    {   
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-01.jpeg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                },
                {
                    "departamento": "Bolsa",
                    "codigo_produto": "luisvuiton20231002",
                    "nome": "Lambrea",
                    "imagem": "bolsa-05.jpg",
                    "marca": "Armani",
                    "material": "Veludo",
                    "descricao": "Pemita-se viajar com o coração descansado por conta dos produtos dentro da sua mala de viagem, estas malas protegem atém o teu mais íntimo",
                    "quantidade": 2135,
                    "preco": 21334,
                    "tipo_de_fecho": "Ziper",
                    "cor": "Musgo",
                    "numero_de_bolsos": "4",
                    "dimensao": "x: 27cm y: 190"
                }
            ]);
    } catch (error) {
        console.log('Erro:', error);
    }
}

insertDummyArtigosData();
*/
// Fim Artigos


/**
 *POST /search
 */
exports.searchArtigo = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        let artigo = await Artigos.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
       res.render('search', { title: 'Thaba Serviços| Investigar por artigo', artigo });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}
 // res.json(artigo);

 
/**
 * pagina get /explore-latest/
 * Explore latest
 */
exports.exploreLatest = async (req, res) => {

    try {
        const limitNumber = 20;
        const artigo = await Artigos.find({}).sort({_id: -1}).limit(limitNumber);
        res.render('explore-latest', { title: 'Thaba Serviços| Explore as novidades', artigo});
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}



/**
 * pagina get /explore-random/
 * Explore random
 */
exports.exploreRandom = async (req, res) => {

    try {
        let contar = await Artigos.find().countDocuments();
        let random = Math.floor(Math.random() * contar);
        let artigo = await Artigos.findOne().skip(random).exec();

        // res.json(artigo);

        res.render('explore-random', { title: 'Thaba Serviços| Explore aleatoriamente as novidades', artigo});
    } catch (error) {
        res.status(500).send({ message: error.message || 'Erro no servidor' });
    }
}



/**
 * pagina get /submit-artigo/
 * Explore random
 */
exports.submitArtigo = async (req, res) => {
    res.render('submit-artigo', { title: 'Thaba Serviços| Sumeta Artigo'});
}












