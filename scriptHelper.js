// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else {
        return "Is a number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const launchStatus = document.getElementId("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    console.log(pilot, copilot, fuelLevel, cargoLevel)
  if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"){
    alert("All fields required, Please fill in field.");
  };
//    } else if (pilot !== "string" || copilot !== "string"){
//     window.alert("Invalid Input: Please enter a proper name.");
    
//    } else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
//     window.alert("Invalid Input: Please input valid number.");
    
//    } else if (validateInput(fuelLevel) === "Is a number" || validateInput(cargoLevel) === "Is a number") {
    
//    } TODO// NEED THIS TO CHECK THAT PILOT NAME AND COPILOT NAME IS A STRING AND NOTHING ELSE IS ALLOWED IN THESE FORM FIELDS 
    

   
   // if pilot/ copolit
   //if fuel Level compared max to min level
   // if cargo level compared to max vs min level
  
   //list.innerHTML += `
 
   //`
  


  
  

   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });
    return planetsReturned;
}

function pickPlanet(planets) { 
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
