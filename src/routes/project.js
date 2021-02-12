const express = require('express');
const pool = require('../database');
const projects = express.Router();

/**
 * AGREGAR UN NUEVO PROYECTO
 */
projects.get('/new', (req,res)=>{
    res.render('projects/new');
});

projects.post('/new', async (req,res)=>{
    const { projectname, description } = req.body;
    const newProject = {
        projectname,
        description
    }
    await pool.query('INSERT INTO projects set?', [newProject]);
    res.send('received')
});

module.exports = projects;
