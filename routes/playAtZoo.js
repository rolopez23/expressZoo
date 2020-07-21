//Routes for post

const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const play = express.Router();

//Parrot says phrase back
play.post('/parrot/:phrase', (req, res)=>{
  zoo.parrot(req.params.phrase, (err, data)=>{
    if(err) {
      res.status(404).send('Polly not found. Polly left the zoo to do Slack polls');
    } else {
      res.send(req.params.phrase);
    }
  })

})

module.exports = play;