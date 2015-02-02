describe("Frame", function() {

  var frame;
  var player;

  beforeEach(function() {
    frame = new Frame();
    player = jasmine.createSpyObj('player', ['bowl']);
  });

  describe("at the start of a new frame", function() {

    it("will have 10 pins", function() {
      expect(frame.resetPins()).toEqual([1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10]);
    });

    it("can receive a bowl", function() {
      frame.receiveBowl(player);

      expect(player.bowl).toHaveBeenCalled();
    });

  });

});