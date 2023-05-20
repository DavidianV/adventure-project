const { Food } = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        // Picks up an item from the current room into the player's inventory
        this.items.push(this.currentRoom.getItemByName(itemName));
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room
        this.currentRoom.items.push(this.getItemByName(itemName));
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
    }

    getItemByName(name) {
        // Retrieves an item from a player's inventory by item name
        const item = this.items.find(obj => obj.name === name);
        this.items.splice(this.items.indexOf(item), 1);
        return item;
    }
}

module.exports = {
  Player,
};