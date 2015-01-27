describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("at the start of a new frame", function() {

    it("will have 10 pins", function() {
      expect(frame.resetPins()).toEqual(10);
    });

    it("can receive a bowl", function() {
      frame.resetPins();
      expect(frame.bowl).toEqual(1);
    });

  });

});