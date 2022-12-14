// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets =;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
 const list = document.getElementById("faultyItems");
 const launchStatus = document.getElementId("launchStatus");
 const pilot = document.getElementId("pilotName");
 const copilot = document.querySelector("copilotName");
 const fuelLevel = document.querySelector("fuelLevel");
 const cargoLevel = document.querySelector("cargoMass");
 const pilotStatus = document.getElementById("pilotStatus");
 const copilotStatus = document.getElementById("copilotStatus");
 const fuelStatus = document.getElementById("fuelStatus");
 const cargoStatus = document.getElementById("cargoStatus");
 const button = document.getElementById("formSubmit");

 button.addEventListener("click", formSubmission());





});



   
});