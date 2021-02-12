const express = require('express');
const pool = require('../database');
const user = express.Router();
const { database } = require('../database');

user.get('/new', (req,res)=>{
    res.render('users/new');
});

user.post('/new', async (req,res)=>{
    const { username, password, firstname, lastname, email } = req.body;
    const newUser = {
        username,
        password,
        firstname,
        lastname,
        email
    }
    await pool.query('INSERT INTO users set?', [newUser]);
    res.send('received');
});

module.exports = user;