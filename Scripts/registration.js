const petForm = document.querySelector("form");
const petTable = document.getElementById("registrationTable");

function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

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

let pet4 = new Pet("Max", 4, "German Shepherd", "Male", "Full Grooming");
let pet5 = new Pet("Luna", 3, "Siamese Cat", "Female", "Bath and Trim");
let pet6 = new Pet("Rocky", 6, "Bulldog", "Male", "Nail Trim");


let petsList = [pet1, pet2, pet3];


function registerPet(event) {
    event.preventDefault();
    console.log("Test");

const name = petForm.elements["petName"].value;
const age = petForm.elements["petAge"].value;
const breed = petForm.elements["petBreed"].value;
const gender = petForm.elements["petGender"].value;
const service = petForm.elements["petService"].value;
let newPet = new Pet(name, age, breed, gender, service);

console.log(newPet);

//create the row and add it to the table 
const displayRow = document.createElement("tr");
displayRow.innerHTML = `
    <td>${petsList.length}</td>
    <td>${newPet.name}</td>
    <td>${newPet.age}</td>
    <td>${newPet.breed}</td>
    <td>${newPet.gender}</td>
    <td>${newPet.service}</td>
    <td><button class="btn btn-danger" onclick="deletePet(${petsList.length - 1})">Delete</button></td>
`;
petTable.appendChild(displayRow);


displayPets();
}

function displayPets() {
    let petNamesDiv = document.getElementById("petNames");
    petNamesDiv.innerHTML = ""; 
    let olList = document.createElement("ol");
    
    for (let i = 0; i < petsList.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = petsList[i].name;
        olList.appendChild(listItem);
    }
    
    petNamesDiv.appendChild(olList);
}

displayPets();
