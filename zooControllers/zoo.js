const fs = require('fs');
const path = require('path');

const zoofile = path.join(__dirname, 'zoo.json');
// console.log(zoofile)

const allAnimals = (callback)=> {  
  fs.readFile(zoofile, (err,data) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, JSON.parse(data))
    }
  })
}

//Goal: Find the particular animal that was chosen
//Read file
//Look through all the animals for the animal chosen
//Pass the animal chosen to the callback (Account for errors)
const getAnimal = (animal, callback)=> {  
  //Read file
  allAnimals((err, animals)=>{
    //Look through all the animals for the animal chosen
    //if we get an error
    if(err) {
      callback(err, null)
    } else {
      let count = animals[animal] ? animals[animal] : 0;
      callback(null, count);
    }
  })
}

//We need to know what animal to update
//Input: Animal, number, callback
//Open the zoo file
//Read the contents
//Fs.writeFile to put the number inside of the zoo
//Pass the information to the callback

//lions, parrots
//updateAnimals: tiger: 5 

const updateAnimals = (animal, number, callback) => {
  allAnimals((err, animals)=>{
    if(err) {
      callback(err, null)
    } else {
      //add new animal to the zoo
      animals[animal] = parseInt(number,10);
      fs.writeFile(zoofile, JSON.stringify(animals), callback)
    }
  })
}

const parrot = (phrase, callback) => {
  //See if I have a parrot
  allAnimals((err,data)=>{
    if(err) {
        //If not parrot throw an error to the callback
      console.log('Error Block')
      console.error(err);
    } else {
      //Count the parrots
      const parrots = data.parrot;
      if(parrots) {
        console.log(parrots)
        callback(null, parrots)
      } else {
        callback(null, 0)
      }
    }
  })



  //Otherwise I will invoke the callback on data


}

module.exports.allAnimals = allAnimals;
module.exports.parrot = parrot;
module.exports.getAnimal = getAnimal;
module.exports.updateAnimals = updateAnimals;

// (err, content)=>{
//   if(err) {
//     callback(err, null)
//   } else {
//     callback(null, content)
//   }