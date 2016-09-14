'use strict';

var express = require('express');
var kbArticleController = require('./kb-article.controller.js');

var router = express.Router();

router.post('/create', kbArticleController.create);
router.post('/list', kbArticleController.findall);
router.get('/article/:id', kbArticleController.getOne);
router.put('/update', kbArticleController.update);
router.delete('/delete/:id', kbArticleController.delete);

module.exports = router;