function Airport(capacity) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.land = function(object) {
  if (this.weather() === 'Stormy') {
    throw new Error('Too stormy to land');
  } else if (this.isFull()) {
    throw new Error('Airport is full')
  } else {
    this.planes.push(object);
  }
};

Airport.prototype.takeOff = function() {
  if (this.weather() === 'Stormy') {
    throw new Error('Too stormy to take off');
  } else {
    this.planes.pop();
  }
};

Airport.prototype.weather = function() {
  if (Math.random(1) < 0.5) {
    return 'notStormy';
  } else {
    return 'Stormy';
  }
};

Airport.prototype.isFull = function() {
  return this.planes.length >= this.capacity;
};
