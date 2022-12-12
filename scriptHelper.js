// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput = "") {
        return "Empty"
    } else if (isNaN(testInput) = true) {
        return "Not a Number"
    } else {
        return "Is a number"
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    validateInput(pilotName)
    validateInput(copilotName)
    validateInput(fuelLevel)
    validateInput(cargoLevel)

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    window.alert("All fields required, Please fill in field.")
   } else if (validateInput(pilot) === "Not a number" || validateInput(copilot) === "Not a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
    window.alert("All fields required, Please fill in field.")
   } else if (validateInput(fuelLevel) === "Is a number" || validateInput(cargoLevel) === "Is a number") {
    window.alert("All fields required, Please fill in field.")
   } 
  
   list.innerHTML += `
   <li> 1. The Pilot name is: ${pilot} </li> 
   <li> 1. The Co-Pilot's name is: ${copilot} </li> 
   <li> 1. The Fuel Level is:  ${fuelLevel} </li> 
   <li> 1. The Cargo Level is: ${cargoLevel} </li> 
   `
   


  
    TODO // check to make sure all fields are filled out = empty
    TODO // check validation of form fields = string or number or not a number
    TODO //update statues of form fields
    TODO // check if form field values meet required parameters to Launch?

   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
