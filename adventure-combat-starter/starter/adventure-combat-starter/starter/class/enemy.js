const { Character } = require('./character');


class Enemy extends Character {
    constructor(name, description, currentRoom) {
        super(name, description, currentRoom);
        this.cooldown = 3000;
        this.player = null;
        this.attackTarget = null;
    };

    setPlayer(player) {
        this.player = player;
    };


    randomMove() {
    // Fill this in
        if (this.cooldown > 0) {
            this.rest();
        } else {
            const exitsDir = this.currentRoom.getExits();
            const exitNum = exitsDir.length;
            const randomNum = Math.floor(Math.random() * exitNum);
            const dir = exitsDir[randomNum];
            const room = this.currentRoom.getRoomInDirection(dir);
            this.currentRoom = room;
            this.cooldown = 3000;

        };
    };


    takeSandwich() {
    // Fill this in

    };

    // Print the alert only if player is standing in the same room
    alert(message) {
        if (this.player && this.player.currentRoom === this.currentRoom) {
            console.log(message);
        };
    };

    rest() {
    // Wait until cooldown expires, then act
        const resetCooldown = function() {
            this.cooldown = 0;
            this.act();
        };
        const reset = resetCooldown.bind(this);
        setTimeout(resetCooldown, this.cooldown);
    }

    attack() {
    // Fill this in
        if (this.cooldown > 0) {
            this.rest();
        } else {
            if (this.player) {
                this.player.health -= this.strength;
                this.cooldown = 3000;
            }
        }
    }

    applyDamage(amount) {
    // Fill this in
        this.attackTarget.health -= amount;

        if (this.attackTarget.health <= 0) {
            this.attackTarget.die();
        };
    };



    act() {
        if (this.health <= 0) {
    // Dead, do nothing;
        } else if (this.cooldown > 0) {
            this.rest();
        } else {
        this.scratchNose();
        this.rest();
    }

    // Fill this in
    }


    scratchNose() {
        this.cooldown += 1000;

        this.alert(`${this.name} scratches its nose`);
    };
};

module.exports = {
  Enemy,
};
