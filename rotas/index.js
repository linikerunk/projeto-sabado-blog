//quando for direcionado para o /rotas ele encontrará este arquivo
const express = require('express')
const router = require('express').Router()//Router está dentro do pacote express

router.use('/', require('./postagens'))// Quando for requisitado o index.js e ele encontrar o / ele vai mais afundo da pasta e encontra o arquivo das postagens
router.use('/', require('./comentarios'))

module.exports = router// aqui ele esta exportando o router