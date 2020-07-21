const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const leaveZoo = express.Router();

//Parrot says phrase back
leaveZoo.delete('/zoo', (req, res)=>{


})

module.exports = leaveZoo;