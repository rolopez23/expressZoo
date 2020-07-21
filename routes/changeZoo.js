const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const changeZoo = express.Router();

//Parrot says phrase back
//Takes an animal in the zoo or not, and then updates the number accordingly

changeZoo.patch('/:animal/:number', (req, res)=>{
  const animal = req.params.animal;
  const number = req.params.number;

  zoo.updateAnimals(animal, number,  (err, data)=> {
    if(err) {
      res.status(400).send(`${err}`);
    } else {
      res.status(201).send('updated');
    }
  })


})

module.exports = changeZoo;