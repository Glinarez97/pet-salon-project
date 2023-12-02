//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"palm street",
        zip:"22111",
        state:"Baja california",
        country:"Mexico"
    },
    pets:[]
}


let counter = 0;
//object constructor (special function)
function Pet(name,age,gender,petsize,pettype){
    this.nameP=name;
    this.ageP=age;
    this.genderP=gender;
    this.petsizeP=petsize;
    this.pettypeP=pettype;
    this.id=counter++;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputPetsize = document.getElementById("txtPetsize");
let inputPettype = document.getElementById("txtPettype");

function isValid(aPet){
    //assuming that the pet is valid
    let validation =true;

    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputPetsize.classList.remove("error");
    inputPettype.classList.remove("error");

    if(aPet.nameP==""){
        validation=false;
        inputName.classList.add("error");

    }
    if(aPet.ageP==""){
        validation=false;
        inputAge.classList.add("error");

    }
    if(aPet.genderP==""){
        validation=false;
        inputGender.classList.add("error");

    }
    if(aPet.petsizeP==""){
        validation=false;
        inputPetsize.classList.add("error");

    }
    if(aPet.pettypeP==""){
        validation=false;
        inputPettype.classList.add("error");

    }

    return validation;
}

function register(){

    //get the values from the input
    //use the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputPetsize.value,inputPettype.value);

    if(isValid(newPet)==true){
        //push the new pet into the array
        petSalon.pets.push(newPet);       
        //display the new pet on the console
        displayTable();
        clearForm();
    }
}

function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputPetsize.value="";
    inputPettype.value="";
}

function deletePet(petId){
    console.log("deleting pet " + petId);
    //delete from the HTML
    document.getElementById(petId).remove();
    //remove form the array
    petSalon.pets.splice(petSalon.pets.indexOf(petId),1);
}

function init(){
    //this is the main function
    //creating objects using constructor
    let scooby = new Pet("Scooby",60,"Male","Grooming","Dane");
    let John = new Pet("John",3,"Male","nails","English Bulldog");
    let Pepa = new Pet("Pepa",4,"Female","French Bulldog");
    petSalon.pets.push(scooby,John,Pepa); //pushing the elements on the array
    displayTable();
}

window.onload=init;