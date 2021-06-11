// Write your JavaScript code here!

window.addEventListener("load", function () {

   let form = document.getElementById("launchForm");
   let formSubmit = document.getElementById("formSubmit");
   let pilotName = document.getElementById("pilotName");
   let coPilotName = document.getElementById("coPilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         //console.log(json);
         let missionTarget = document.getElementById("missionTarget");

         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
      `;
      });
   });


   form.addEventListener("submit", function () {

      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("you must enter something in every field");
         event.preventDefault();
      } else if (!isNaN(pilotName.value)) {
         alert("Remember Pilot Name can not be a Number");
         event.preventDefault();
      } else if (!isNaN(coPilotName.value)) {
         alert("Co-Pilot Name can not be a number");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value)) {
         alert("Fuel Level must be a Number");
         event.preventDefault();
      } else if (isNaN(cargoMass.value)) {
         alert("Cargo Mass must be a Number");
         event.preventDefault();
      } else if (fuelLevel.value < 10000) {
         faultyItems.style = "visibility:visible";
         launchStatus.style = "color:red";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is ready for launch`;
         fuelStatus.innerHTML = "Fuel level is to low for launch";
         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         }
         event.preventDefault();
      } else if (cargoMass.value > 10000) {
         faultyItems.style = "visibility:visible";
         launchStatus.style = "color:red";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is ready for launch`;
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
         if (fuelLevel.value > 10000) {
            fuelStatus.innerHTML = "Fuel is ready for launch";
         }
         event.preventDefault();
      } else {
         faultyItems.style = "visibility:visible";
         launchStatus.style = "color:green";
         launchStatus.innerHTML = "Shuttle Is Ready For Launch";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${coPilotName.value} is ready for launch`;
         fuelStatus.innerHTML = "Fuel level is ready for launch";
         cargoStatus.innerHTML = "Cargo mass low enough for launch";

         event.preventDefault();
      }

   });
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
