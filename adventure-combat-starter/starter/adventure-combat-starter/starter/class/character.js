class Character {

    constructor(name, description, currentRoom) {
        this.name = name;
        this.description = description;
        this.currentRoom = currentRoom;
        this.health = 100;
        this.strength = 10;
        this.items = [];
    };

    applyDamage(amount) {
        this.health -= amount;

        if (this.health <= 0) {
            this.die();
        };
    };

    die() {
        this.currentRoom.items = this.items.slice();

        this.currentRoom = null;
        this.items = [];
    };

};

module.exports = {
  Character,
};
