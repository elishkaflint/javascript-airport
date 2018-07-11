describe("airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport(10);
    plane = new Plane();
  });

  // As an air traffic controller
  // So I can get passengers to a destination
  // I want to instruct a plane to land at an airport
  describe ('.land', function() {
    it('instructs a plane to land', function() {
      spyOn(airport, 'weather').and.returnValue('notStormy');
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it('prevents a plane landing when its stormy', function() {
      spyOn(airport, 'weather').and.returnValue('Stormy');
      expect(function(){airport.land(plane)}).toThrow(new Error('Too stormy to land'));
    });
    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when the airport is full
    it('prevents a plane landing when the airport is full', function() {
      spyOn(airport, 'weather').and.returnValue('notStormy');
      var count;
      for (count = 0; count < 10; count++) {
        airport.land(plane);
      }
      airport.planes
      expect(function(){airport.land(plane)}).toThrow(new Error('Airport is full'));
    });
  });

  // As an air traffic controller
  // So I can get passengers on the way to their destination
  // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
  describe('.takeOff', function() {
    it('instructs a plane to take off', function() {
      spyOn(airport, 'weather').and.returnValue('notStormy');
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });
    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it('prevents a plane taking off when its stormy', function() {
      spyOn(airport, 'weather').and.returnValue('Stormy');
      expect(function(){airport.takeOff()}).toThrow(new Error('Too stormy to take off'));
    });
  });;


  // As the system designer
  // So that the software can be used for many different airports
  // I would like a default airport capacity that can be overridden as appropriate
  describe('.capacity', function() {
    it('can be overridden', function() {
      airport.capacity = 20
      expect(airport.capacity).toEqual(20)
    });
  });
});
