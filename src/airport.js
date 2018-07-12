function Airport(capacity) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.land = function(object) {
  if (this._isStormy()) {
    throw new Error('Too stormy to land');
  } else if (this._isFull()) {
    throw new Error('Airport is full')
  } else {
    this.planes.push(object);
  }
};

Airport.prototype.takeOff = function() {
  if (this._isStormy()) {
    throw new Error('Too stormy to take off');
  } else {
    this.planes.pop();
  }
};

Airport.prototype._isStormy = function() {
  (Math.random(1) < 0.5);
};

Airport.prototype._isFull = function() {
  return this.planes.length >= this.capacity;
};
