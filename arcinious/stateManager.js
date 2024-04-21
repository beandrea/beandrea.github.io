class StateManager {
    constructor(player) {
        this.states = ['Walking', 'Encounter'];
        this.currState = this.states[0];
        this.player = player
    }

    encounterCalc() {
        let chance = Math.random();
        if (chance > 0.7) {
            this.player.savePos();
            this.currState = this.states[1];
        }
    }

    battleEnd() {
        this.currState = this.states[0];
    }
}
