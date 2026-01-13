
let pet1 = {
    name: "Whiskers",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "Persian Cat"
};

let pet2 = {
    name: "Buddy",
    age: 5,
    gender: "Male",
    service: "Bath",
    breed: "Golden Retriever"
};

let pet3 = {
    name: "Mittens",
    age: 2,
    gender: "Female",
    service: "Nail Trim",
    breed: "Tabby Cat"
};


let petsList = [pet1, pet2, pet3];


function displayPets() {
    let petNamesDiv = document.getElementById("petNames");
    let olList = document.createElement("ol");
    
    for (let i = 0; i < petsList.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = petsList[i].name;
        olList.appendChild(listItem);
    }
    
    petNamesDiv.appendChild(olList);
}


displayPets();
