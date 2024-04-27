class Encounter {
    constructor(stateManager, player, spawner){
        this.manager = stateManager;
        this.player = player;
        this.enemySpawn = spawner;
        this.img = loadImage('./assets/battleBackground.jpg');
    }

    init(){
    }

    draw(){
        image(this.img, 0, 0, windowWidth, windowHeight);
        fill(179, 196, 199);
        stroke(0, 0, 0);
        rect(0, 7 * windowHeight / 10, windowWidth, windowHeight);
        fill(179, 196, 200);
        rect((7 * windowWidth / 10), (7 * windowHeight / 10), (9 * windowWidth / 31), 55);
        rect((7 * windowWidth / 10), (7 * windowHeight / 10) + 55, (9 * windowWidth / 31), 55);
        rect((7 * windowWidth / 10), (7 * windowHeight / 10) + 110, (9 * windowWidth / 31), 55);
        rect((7 * windowWidth / 10), (7 * windowHeight / 10) + 165, (9 * windowWidth / 31), 55);
        fill(0, 0, 0);
        textSize(30);
        text('(F)ight', (7 * windowWidth / 10) + 15, (7 * windowHeight / 10) + 30);
        text('(S)pells', (7 * windowWidth / 10) + 15, (7 * windowHeight / 10) + 85);
        text('(I)tems', (7 * windowWidth / 10) + 15, (7 * windowHeight / 10) + 140);
        text('(R)un', (7 * windowWidth / 10) + 13, (7 * windowHeight / 10) + 195);
    }

    keyPressed(){
        if (keyCode === 82){
            //this is r
            this.run();
        } else if (keyCode === 73){
            //this is i
        } else if (keyCode === 83){
            //this is s
        } else if (keyCode === 70){
            //this is f
        }
    }

    run(){
        let chance = Math.random();
        if (chance < 0.65){
            this.manager.battleEnd();
        }
    }
}
