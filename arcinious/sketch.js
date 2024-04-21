let map, player, manager, encounter, spawner, elements;

function setup() {
  createCanvas(windowWidth, windowHeight);
  map = new Map(windowWidth, windowHeight);
  player = new Character(map);
  manager = new StateManager(player);
  spawner = new EnemySpawn();
  encounter = new Encounter(manager, player, spawner);
}

function draw() {
  background(220);
  if (manager.currState === 'Walking'){
    map.draw();
    player.draw();
  } else if (manager.currState === 'Encounter'){
    encounter.init();
    encounter.draw();
  }
}

function keyPressed() {
  let validMove = true;
  if (manager.currState === 'Walking'){
    if (keyCode === LEFT_ARROW || key === 'a') {
      validMove = player.move(-1, 0);
    } else if (keyCode === RIGHT_ARROW || key === 'd') {
      validMove = player.move(1, 0);
    } else if (keyCode === UP_ARROW || key === 'w') {
      validMove = player.move(0, -1);
    } else if (keyCode === DOWN_ARROW || key === 's') {
      validMove = player.move(0, 1);
    }
    if (validMove){
      manager.encounterCalc();
    }
  } else if (manager.currState === 'Encounter'){
    encounter.keyPressed();
  }
}
