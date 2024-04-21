class Character {
    constructor(map) {
        this.map = map;
        this.team = [null, null, null];
        this.tileX = Math.floor(this.map.map.length / 2);
        this.tileY = Math.floor(this.map.map[0].length / 2);

        this.updatePosition();

        this.img = loadImage('./assests/player.png');
        this.pos;
    }

    updatePosition() {
        this.x = this.tileX * this.map.tileWidth + this.map.tileWidth / 2;
        this.y = this.tileY * this.map.tileHeight + this.map.tileHeight / 2;
    }

    move(dx, dy) {
        const newTileX = this.tileX + dx;
        const newTileY = this.tileY + dy;

        if (this.map.walkable(newTileX, newTileY)) {
            this.tileX = newTileX;
            this.tileY = newTileY;
            this.updatePosition();
            return true;
        } else {
            return false;
        }
    }

    draw() {
        image(this.img, this.x - (1 * (this.map.tileWidth / 2)), this.y - (2 * (this.map.tileHeight / 5)), this.map.tileWidth, this.map.tileHeight - 10);
    }

    savePos(){
        this.pos = [this.tileX, this.tileY];
    }

    setPos(){
        this.tileX = this.pos[0];
        this.tileY = this.pos[1];
        this.draw();
    }
}
