const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const changeZoo = express.Router();

//Parrot says phrase back
changeZoo.patch('/:animal/:number', (req, res)=>{


})

module.exports = changeZoo;