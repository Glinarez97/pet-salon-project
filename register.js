//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"palm street",
        zip:"22111",
        state:"Baja california",
        country:"Mexico"
    }
}



//object constructor (special function)

function Pet(name,age,gender,service,breed){
    this.nameP=name;
    this.agep=age;
    this.genderP=gender;
    this.serviceP=service;
    this.breedP=breed;
}

function register(){

    //get the values from the input
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputPetsize = document.getElementById("txtPetsize").value;
    let inputPettype = document.getElementById("txtPettype").value

    //use the constructor
    let newPet = new Pet(inputName,inputAge,inputGender,inputPetsize,inputPettype);
    //display the new pet on the console
    console.log(newPet);
}

function init(){
    //this is the main function

    //creating objects using constructor

    let scooby = new Pet("Scooby",60,"Male","Grooming","Dane");

    let John = new Pet("John",3,"Male","nails","English Bulldog");

    let Pepa = new Pet("Pepa",4,"Female","French Bulldog");

    console.log(scooby);
}

window.onload=init;