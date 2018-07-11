describe("weather", function() {

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe ('.condition', function() {
    it('returns stormy if it is stormy', function() {
    spyOn(weather, 'isStormy').and.returnValue('Stormy');
    expect(weather.isStormy()).toEqual('Stormy');
    });
  });

});
