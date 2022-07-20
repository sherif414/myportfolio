const GRID_SIZE_ROW = 37;
const GRID_SIZE_COL = 22;

function randomGridPosition(): Point {
  return {
    x: Math.floor(Math.random() * GRID_SIZE_COL) + 1,
    y: Math.floor(Math.random() * GRID_SIZE_ROW) + 1,
  };
}

function outsideGrid(position: Point): boolean {
  return position.x < 1 || position.x > GRID_SIZE_COL || position.y < 1 || position.y > GRID_SIZE_ROW;
}

export {
  randomGridPosition,
  outsideGrid
}
