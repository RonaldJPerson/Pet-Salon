
let salon = {
    name: "Puurfect Pet Salon",
    hours: {
        open: "9:00 AM",
        close: "5:00 PM"
    },
    phone: "(555) 123-4567",
    address: {
        street: "123 Grooming Street",
        city: "Pet City",
        state: "Virginia",
        zip: "23185"
    }
};


function displaySalonInfo() {
    let salonInfoDiv = document.getElementById("salonInfo");
    
    let salonName = document.createElement("p");
    salonName.className = "lead text-center text-muted mb-3";
    salonName.textContent = `Welcome to ${salon.name}`;        
    let salonHours = document.createElement("p");
    salonHours.className = "lead text-center text-muted mb-3";
    salonHours.innerHTML = `<strong>Hours:</strong> ${salon.hours.open} to ${salon.hours.close}`;
    salonInfoDiv.appendChild(salonHours);
    
    let salonPhone = document.createElement("p");
    salonPhone.className = "lead text-center text-muted mb-3";
    salonPhone.innerHTML = `<strong>Phone:</strong> ${salon.phone}`;
    salonInfoDiv.appendChild(salonPhone);
    
    let salonAddress = document.createElement("p");
    salonAddress.className = "lead text-center text-muted mb-0";
    salonAddress.innerHTML = `<strong>Address:</strong> ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}`;
    salonInfoDiv.appendChild(salonAddress);
}
