import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomPoint();
const EXPANSION_RATE = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomPoint();
  }
}

export function draw(gameBoard: HTMLElement) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y.toString();
  foodElement.style.gridColumnStart = food.x.toString();
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomPoint() {
  let newPoint = randomGridPosition();
  while (onSnake(newPoint)) {
    newPoint = randomGridPosition();
  }
  return newPoint;
}
