// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper.js");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let pickedPlanet = pickPlanet(listedPlanets)
      addDestinationInfo(document, pickedPlanet.name,pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });

  let testForm = document.querySelector("form");
  let list = document.getElementById("faultyItems");
  let pilot = document.querySelector("input[name=pilotName]");
  let copilot = document.querySelector("input[name=copilotName]");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoLevel = document.querySelector("input[name=cargoMass]");

  testForm.addEventListener("submit", function (event) {
    console.log("This is being clicked like a whore")
    //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
});
});
