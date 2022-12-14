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

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    window.alert("All fields required, Please fill in field.")
    preventDefault()
   } else if (pilot !== "string" || copilot !== "string"){
    window.alert("Invalid Input: Please enter proper name.")
    preventDefault()
   } else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
    window.alert("Invalid Input: Please input valid number.")
    preventdefault()
   } else if (validateInput(fuelLevel) === "Is a number" || validateInput(cargoLevel) === "Is a number") {
    
   } TODO// NEED THIS TO CHECK THAT PILOT NAME AND COPILOT NAME IS A STRING AND NOTHING ELSE IS ALLOWED IN THESE FORM FIELDS 
    

   if ()
   // if pilot/ copolit
   //if fuel Level compared max to min level
   // if cargo level compared to max vs min level
  
   list.innerHTML += `
 
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
