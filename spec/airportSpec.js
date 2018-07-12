describe('airport', function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport(10);
    plane = jasmine.createSpy('plane');
  });

  describe(".planes", function() {
    describe("after a plane is landed", function() {
      it('returns an array of planes', function() {
        spyOn(airport, 'weather').and.returnValue('notStormy');
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
      });
    });
    describe("after a plane has taken off", function() {
      it('returns an empty array', function() {
        spyOn(airport, 'weather').and.returnValue('notStormy');
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });
    });
  });

  describe(".weather", function() {
    it('returns a weather condition', function() {
      spyOn(airport, 'weather').and.returnValue('Stormy');
      expect(airport.weather()).toEqual('Stormy');
    });
  });

  describe(".full", function() {
    it('returns true if the airport is full', function() {
      spyOn(airport, 'weather').and.returnValue('notStormy');
      var count;
      for (count = 0; count < 10; count++) {
        airport.land(plane);
      }
      expect(airport.isFull()).toEqual(true);
    });
  });

  describe(".capacity", function() {
    it('has a default capacity', function() {
      expect(airport.capacity).toEqual(10);
    });
  });

  describe(".land", function() {
    describe("when its stormy", function() {
      it('returns an error', function() {
        spyOn(airport, 'weather').and.returnValue('Stormy');
        expect( function(){ airport.land(); } ).toThrowError('Too stormy to land');
      });
    });
  });

  describe(".takeOff", function() {
    describe("when its stormy", function() {
      it('returns an error', function() {
        var weatherSpy = spyOn(airport,'weather');
        weatherSpy.and.returnValue('notStormy');
        airport.land(plane);
        weatherSpy.and.returnValue('Stormy');
        expect( function(){ airport.takeOff(); } ).toThrowError('Too stormy to take off');
      });
    });
  });

});
