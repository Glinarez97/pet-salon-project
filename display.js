function displayCards(){
    let cards="";
    const DIV = document.getElementById("pets");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        cards+=`
            <div class="pets">
                <p>Name: ${pet.nameP}</p>
                <p>Age: ${pet.ageP}</p>
                <p>Gender: ${pet.genderP}</p>
                <p>Pet size: ${pet.petsizeP}</p>
                <p>Pet type: ${pet.pettypeP}</p>
            </div>
        `;

    }
    DIV.innerHTML=cards;
}