class Item {
  // Item Class: Item should have name and description attributes
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.food = false;
  }
}

module.exports = {
  Item,
};