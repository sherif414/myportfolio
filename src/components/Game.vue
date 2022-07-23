<template>
  <div ref="game" id="game" class="bg-[#011627] rounded-lg"></div>
</template>

<script setup lang="ts">
  import Snake from "../game/Snake";
  import Food from "../game/Food";
  import { ref } from "vue";
  const GAME_SPEED = 5;
  const snakeExpansionRate = 5;
  const GRID = { GRID_ROWS: 37, GRID_COLS: 22 };
  let inputDirection: Point = { x: 0, y: 0 };
  let lastInputDirection: Point = { x: 0, y: 0 };
  let lastRenderTime = 0;
  const game = ref<HTMLElement>();
  const snake = new Snake(GRID);
  const food = new Food(GRID);

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        break;
    }
  });

  function updateInputDirection(): void {
    lastInputDirection = inputDirection;
  }

  //main function

  const paint = (currTime: number) => {
    if (snake.checkDeath()) {
      if (confirm("You lost. Press ok to restart.")) {
        location.reload();
      }
      return;
    }
    requestAnimationFrame(paint);
    const timeSinceLastRender = (currTime - lastRenderTime) / 1000;
    if (timeSinceLastRender < 1 / GAME_SPEED) return;
    lastRenderTime = currTime;

    updateInputDirection();
    if (game.value === undefined) return;
    if (snake.consumedFood(food.position)) {
      game.value.innerHTML = "";
      snake.update(snakeExpansionRate, lastInputDirection);
      snake.draw(game.value);
      food.draw(game.value, true, snake.body);
    } else {
      game.value.innerHTML = "";
      snake.update(0, lastInputDirection);
      snake.draw(game.value);
      food.draw(game.value, false, snake.body);
    }
  };

  //end of main

  requestAnimationFrame(paint);

  type Point = {
    x: number;
    y: number;
  };
</script>

<style>
  #game {
    display: grid;
    grid-template-rows: repeat(37, 1fr);
    grid-template-columns: repeat(22, 1fr);
  }
  .food {
    background-color: #fea55f;
    border-radius: 50%;
  }
  .snake {
    background-color: #43d9ad;
  }
</style>
