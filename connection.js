const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calidad').then(() => console.log('Succesfull')).catch(err => console.error('failed',err));

let employes = new mongoose.Schema({
    employeId: Number,
    name: String,
    lastName: String
});

let People = mongoose.model('employes',employes);

let testing = new People({
    employeId: 7,
    name: "Alejandra",
    lastName: "Albarran"
});

async function addEmploye(testing){
    
    const result = await testing.save();
    console.log("INSIDE OF ADD");
    console.log(result);
}

async function removeEmploye(thisOne){
    let one = thisOne.params.employeId;
    console.log("QUE ESTA PASANDO AQUIIII");
    console.log(one);
    let next = await People.findOne({employeId: thisOne.employeId});
    console.log("INSIDE OF REMOVE");
    console.log(next);

}

async function findEmploye(thisOne){
    let found = await People.find(thisOne.employeId);
    console.log("INSIDE OF FIND");
    console.log(found);
}

removeEmploye(testing);