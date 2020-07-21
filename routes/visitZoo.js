const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const visit = express.Router();

//routes for get requests

visit.get('/helloZoo',(req, res)=> {
  res.send('Hello Zoo!')
})


visit.get('/zoo', (req, res)=> {
  zoo.allAnimals((err, data)=>{
    if (err) {
      res.status(204).send('The zoo is closed')
    } else {
      res.send(data)
    }
  })

})

//Returns the number of animals in a zoo, otherwise returns 'No animal in zoo'
visit.get('/animal/:animal', (req, res)=> {
  const animal = req.params.animal;
  zoo.getAnimal(animal, (err, data)=>{
    if(err) {
      res.status(404).send(`${err}`);
    } else {
      res.status(200).send(`There are ${data} ${animal}s in the zoo`)
    }
  })
  
})


module.exports = visit

