const db = require('./db');

db.addDog({name:'biscuit', color:'orange'});
db.addDog({name:'jungle', color:'black'});
db.addDog({name:'smokey', color:'grey'});
db.addDog({name:'fancy feast', color:'white'});
db.addDog({name:'peep', color:'orange'});
db.addDog({name:'bread', color:'orange'});

const biscuit = db.findDogByName('biscuit');
const orange_dogs = db.findDogsByColor('orange');

console.log('biscuit: ', biscuit);
console.log('orange_dogs: ', orange_dogs);
