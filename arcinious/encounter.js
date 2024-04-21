class Encounter {
    constructor(stateManager, player, spawner){
        this.manager = stateManager;
        this.player = player;
        this.enemySpawn = spawner;
        this.img = loadImage('./assests/battleBackground.png');
    }

    init(){
    }

    draw(){
        image(this.img, 0, 0, windowWidth, 7 * windowHeight / 10);
        fill(179, 196, 199);
        rect(0, 7 * Math.floor(windowHeight / 10), windowWidth, windowHeight);
        line(7 * windowWidth / 10, (7 * windowHeight / 10) - 5, 7 * windowWidth / 10, windowHeight);
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
