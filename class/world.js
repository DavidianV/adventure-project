const { Room } = require('./room');
const { Item } = require('./item');
const { Food } = require('./food');

class World {
    constructor() {
        this.rooms = {};
    }

    loadWorld(worldData) {

        const roomList = worldData.rooms;
        const itemList = worldData.items;

        // Instantiate new room objects
        // Get name, id and description from room data
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomData = roomList[i];
            let newRoom = new Room(roomData.name, roomData.description);

            this.rooms[roomData.id] = newRoom;
        }

        // Connect rooms by ID
        // Note that all rooms must be created before they can be connected
        for (let i = 0 ; i < roomList.length ; i++) {

            let roomID = roomList[i].id;
            let roomConnections = roomList[i].exits;

            for (const direction in roomConnections) {
                let connectedRoomID = roomConnections[direction];
                let roomToConnect = this.rooms[connectedRoomID];
                this.rooms[roomID].connectRooms(direction, roomToConnect);
            }

        }

        // Instantiate items using data stored in the itemList variable
            // A non-food item should be instantiated as an instance of the `Item` class
            // A food item should be instantiated as an instance of the `Food` class
        let food, item;

        itemList.forEach(obj => {
            let name = obj.name
            let desc = obj.description

            if (obj.isFood) food = new Food(name, desc);
            else item = new Item(name, desc);

        })
        // console.log(food);
        //console.log(item);

        // Your code here
    }
}

module.exports = {
  World,
};