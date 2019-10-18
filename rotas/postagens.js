//arquivo destinado ao tratamento das postagens
const express = require('express')
const router = express.Router();

router.get('/postagens', (req, res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez',
        autor: 'Thiago Razzini'
    })
})//quando for acessado o postagens.js ele responderá o que esta dentro do get
module.exports = router