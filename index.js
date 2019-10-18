const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))//forma de receber as requisições do tipo POST


app.get('/', (req, res) => {
    res.send('funcionando')
})//quando acessar o localhost, a resposta da requisição sera o que esta dentro do parenteses res.send()

const rotas = require('./rotas')//o '.' é para indicar que o arquivo foi criado por mim e não pelo node_modules
app.use('/api', rotas)//quando acessar o /api ele vai ser direcionado para o rotas

app.use(express.static(__dirname + '/client'))//aqui estamos fazendo com que não trate mais como node, dirname resolve todo o caminho do diretório para o caminho atual


const port = 3001

app.listen(port, () => {
    console.log('O servidor esta rodando no link http://localhost:', port)
})//esculta para saber se o servidor esta executando