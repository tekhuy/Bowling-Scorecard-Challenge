describe("Player", function() {

  var player;

  beforeEach(function() {
    player = new Player();
  });

  describe("by default", function() {

    it("starts with 0 points", function() {
      expect(player.points).toEqual(0);
    });

    it("can bowl", function() {
      expect(player.bowl).toBe(true);
    });

  });

}); 