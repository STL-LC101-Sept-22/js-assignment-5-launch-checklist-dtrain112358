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
      addDestinationInfo(document, pickedPlanet.name,pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });

  const testForm = document.querySelector("form");
  const list = document.getElementById("faultyItems");
  const pilot = document.querySelector("input[name=pilotName]");
  const copilot = document.querySelector("input[name=copilotName]");
  const fuelLevel = document.querySelector("input[name=fuelLevel]");
  const cargoLevel = document.querySelector("input[name=cargoMass]");

  testForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});
});
