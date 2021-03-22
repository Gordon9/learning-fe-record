import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 3;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export const update = () => {
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
};

export const expandSnake = (amount) => {
  newSegments += amount;
};

export const getSnakeHead = () => {
  return snakeBody[0];
};

export const snakeIntersection = () => {
  return onSnake(snakeBody[0], { ignoreHead: true });
};

const equalPositions = (pos1, pos2) => {
  console.log("pos2:", pos2);
  console.log("pos1:", pos1);
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

export const onSnake = (position, { ignoreHead = false } = {}) => {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  });
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
};
