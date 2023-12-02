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

function displayTable(){
    let row="";
    const TABLE =document.getElementById("petTable");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        row+=`
            <tr id="${pet.id}">
                <td>${pet.nameP}</td>
                <td>${pet.ageP}</td>
                <td>${pet.genderP}</td>
                <td>${pet.petsizeP}</td>
                <td>${pet.pettypeP}</td>
                <td> <button class="delete" onclick="deletePet(${pet.id});">Delete</button> </td>
                                
            </tr>
                
        `;
    }
    TABLE.innerHTML=row;
}
