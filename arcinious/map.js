class Map {
    constructor(width, height) {
        this.map = [
            ['0', '0', '0', '0', '1', '0', '0', '0', '0'],
            ['0', '1', '0', '0', '1', '1', '1', '0', '0'],
            ['0', '1', '1', '1', '1', '0', '1', '1', '0'],
            ['0', '1', '0', '0', '1', '0', '0', '1', '0'],
            ['1', '1', '1', '1', '1', '1', '1', '1', '1'],
            ['0', '0', '0', '0', '1', '0', '0', '0', '0'],
            ['0', '0', '0', '0', '1', '0', '0', '0', '0'],
            ['0', '0', '0', '1', '1', '1', '1', '0', '0'],
            ['0', '0', '0', '0', '1', '0', '0', '0', '0']
        ];
        this.tileWidth = 0;
        this.tileHeight = 0;

        this.tileSize(width, height);
    }

    tileSize(width, height) {
        this.tileHeight = Math.floor(height / this.map.length);
        this.tileWidth = Math.floor(width / this.map[0].length);
    }

    walkable(tileX, tileY) {
        return this.map[tileY][tileX] == '1';
    }

    draw() {
        for (let y = 0; y < this.map.length; y++) {
            for (let x = 0; x < this.map[y].length; x++) {
                if (this.walkable(x, y)) {
                    fill(255);
                } else {
                    fill(0);
                }
                rect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    }
}
