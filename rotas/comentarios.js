//destinado ao tratamento de comentarios
const express = require('express')
const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'Parabéns, gostei muito',
        autor: 'Thiago Razzini'
    })
})//quando for acessado o postagens.js ele responderá o que esta dentro do get
module.exports = router