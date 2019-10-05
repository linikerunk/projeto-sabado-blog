const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: ' Era uma vez, uma publicação',
        autor: 'Liniker e Razzini',
    })
})


module.exports = router