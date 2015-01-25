describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("at the start of a new frame", function() {

    it("will have 10 pins", function() {
      expect(frame.pinNumber).toEqual(10);
    });

  });

});