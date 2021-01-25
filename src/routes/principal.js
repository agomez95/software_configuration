const express = require('express');
const principal = express.Router();

principal.get('/', (req,res) => {
    res.send('Hola');
});

module.exports = principal;