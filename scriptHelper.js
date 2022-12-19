// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const launchStatus = document.getElementById("launchStatus");
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
 
  if (
    validateInput(pilot.value) === "Empty" ||
    validateInput(copilot.value) === "Empty" ||
    validateInput(fuelLevel.value) === "Empty" ||
    validateInput(cargoLevel.value) === "Empty"
  ) {
    alert("All fields required, Please fill in field.");
  } else if (
    validateInput(fuelLevel.value) === "Not a Number" ||
    validateInput(cargoLevel.value) === "Not a Number" ||
    validateInput(pilot.value) === "Is a Number" ||
    validateInput(copilot.value) === "Is a Number"
  ) {
    window.alert("Invalid Input: Please check type.");
  } else {
      
      if (fuelLevel.value >= 10000 && cargoLevel.value < 10000) {
          launchStatus.innerText = "Shuttle is ready to launch";
          launchStatus.style.color = "green";
          list.style.visibility = "visible";
        } else {
            launchStatus.innerText = "Shuttle NOT ready to launch";
            launchStatus.style.color = "red";
            list.style.visibility = "visible"
            pilotStatus.innerText = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerText = `Pilot ${copilot.value} is ready for launch`;
            
            if (fuelLevel.value < 10000) {
               fuelStatus.innerText = "Fuel level too low to launch"
            } else {
               fuelStatus.innerText = "Fuel level high enough to launch" 
            }
            if (cargoLevel.value >= 10000) {
               cargoStatus.innerText = "Cargo mass too heavy for launch"
            } else {
               cargoStatus.innerText = "Cargo mass low enough to launch" 
            }

        }
    }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
