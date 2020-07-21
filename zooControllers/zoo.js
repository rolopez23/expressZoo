const fs = require('fs');
const path = require('path');
const zoofile = path.join(__dirname, 'zoo.json');
// console.log(zoofile)

const allAnimals = (callback)=> {  
  fs.readFile(zoofile,(err,data)=>{
    if(err) {
      callback(err, null)
    } else {
      callback(null, JSON.parse(data))
    }
  })
}

const getAnimal = (animal, callback)=> {  

}

const updateAnimals = (callback) => {

}

const parrot = (phrase, callback) => {
  
}

module.exports.allAnimals = allAnimals