//Routes for post

const express = require('express');
const zoo = require('../zooControllers/zoo.js');

const play = express.Router();

//Parrot says phrase back
play.post('/parrot', (req, res)=>{
  //How do I get post information
  const phrase = req.body.phrase;
  // console.log("This code is running")
  zoo.parrot(phrase, (err, data)=>{
    if(!data) {
      res.status(404).send('Polly not found. Polly left the zoo to do Slack polls');
    } else {
      res.send(`${phrase}`);
    }
  })
})

module.exports = play;