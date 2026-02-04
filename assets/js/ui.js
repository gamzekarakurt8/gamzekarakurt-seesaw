// ui.js
export class UI {
  constructor() {
    this.leftWeightDisplay = document.getElementById('leftWeight');
    this.rightWeightDisplay = document.getElementById('rightWeight');
  }

  addObjectToUI(element, obj) {
    const size = 30 + obj.weight * 5;
    const hue = 120 - obj.weight * 10;
    const left = obj.position - size / 2;

    const html = `
    <div class="object"
         data-weight="${obj.weight}"
         data-id="${obj.id}"
         style="width:${size}px;height:${size}px;left:${left}px;background-color:hsl(${hue},70%,50%);">
    </div>
  `;

    element.insertAdjacentHTML('beforeend', html);
  }


  rotatePlank(element, angle) {
    element.style.transform = `rotate(${angle}deg)`;

    const allObjects = element.querySelectorAll('.object');
    allObjects.forEach(obj => {
      obj.style.transform = `rotate(${-angle}deg)`;
    });
  }

  updateWeightLabels(left, right) {
    this.leftWeightDisplay.textContent = left.toFixed(1);
    this.rightWeightDisplay.textContent = right.toFixed(1);
  }

  clearBoard(element) {
    element.innerHTML = '';
    element.style.transform = 'rotate(0deg)';
    this.leftWeightDisplay.textContent = '0';
    this.rightWeightDisplay.textContent = '0';
  }

  getPlankRect(element) {
    return element.getBoundingClientRect();
  }
}