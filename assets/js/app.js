import { UI } from "./ui.js";

const ui = new UI();

const seesawModule = (function () {

  const plank = document.getElementById('plank');
  const resetBtn = document.getElementById('resetBtn');

  let objects = [];
  const plankWidth = 400;
  let currentAngle = 0;

  const _eventListeners = function () {
    plank.addEventListener('click', _handleClick);
    resetBtn.addEventListener('click', _reset);
  };

  const _handleClick = function (event) {
    const rect = ui.getPlankRect(plank);
   
    const clickX = event.clientX - rect.left;

    const weight = Math.floor(Math.random() * 10) + 1; // Random sayı

    const obj = {  
      position: clickX,
      weight: weight,
      id: Date.now()
    };

    objects.push(obj);
    ui.addObjectToUI(plank, obj);
    _calculatePhysics();
  };

  const _calculatePhysics = function () {
    const pivot = plankWidth / 2;
    let leftTorque = 0;
    let rightTorque = 0;
    let leftWeight = 0;
    let rightWeight = 0;

    objects.forEach(obj => {
      const distance = Math.abs(obj.position - pivot); 
      const torque = obj.weight * distance; 

      if (obj.position < pivot) {
        leftTorque += torque;
        leftWeight += obj.weight;
      } else {
        rightTorque += torque;
        rightWeight += obj.weight;
      }
    });

    const torqueDifference = rightTorque - leftTorque; 
    currentAngle = Math.max(-30, Math.min(30, torqueDifference / 10)); 

    ui.rotatePlank(plank, currentAngle);
    ui.updateWeightLabels(leftWeight, rightWeight);
  };


  const _reset = function () {
    objects = [];
    ui.clearBoard(plank);
  };


  return {
    init: function () {
      console.log("Seesaw Simulation Initialized...");
      _eventListeners();
    },
  };
})();


document.addEventListener("DOMContentLoaded", function () {
  seesawModule.init();
});


