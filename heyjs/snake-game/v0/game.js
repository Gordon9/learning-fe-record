import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const update = () => {
  updateSnake();
  updateFood();
  checkDeath();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

const main = (currentTime) => {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/snake-game/v0/index.html";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  lastRenderTime = currentTime;

  update();
  draw();
};

const checkDeath = () => {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};

window.requestAnimationFrame(main);
