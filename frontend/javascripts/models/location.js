class Location {
  static all = [];

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.state = data.state;
    this.city = data.city;
    this.country = data.country;
    this.trees = data.trees;
    this.save();
  }

  save() {
    Location.all.push(this);
  }
}