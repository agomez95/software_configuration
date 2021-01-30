const express = require('express');
const pool = require('../database');
const projects = express.Router();

projects.get('/new', (req,res) =>{
    res.render('projects/new');
});

module.exports = projects;
