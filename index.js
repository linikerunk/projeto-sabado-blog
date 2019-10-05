// npm i --save express body-parser
// create-react-app client   [ cria meu front - end react]

const express = require('express') // aqui estou fazendo uma requisição do meu node module que tem o express
const bodyParser = require('body-parser') // aqui estou fazendo uma requisição do meu node module que tem o body-parser para pegar dados do tipo POST

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('funcionando...')
})

const rotas = require('./rotas') // quando começo com . ele  procura no meu diretorio atual
app.use('/api', rotas)

app.use(express.static(__dirname + '/client')) // meu back-end já sabe que existe algo no meu front-end


const port = 3001

app.listen(port, () => {
    console.log('Servidor está rodando em -> http://localhost:', port)
})