function Weather() {
}

Weather.prototype.isStormy = function() {
  if (Math.random(1) < 0.1) {
    return 'notStormy';
  } else {
    return 'Stormy';
  }
}
