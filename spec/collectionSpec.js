'use strict';

describe("Collection", function() {
  var collection;

  beforeEach(function() {
    collection = new Collection();
  });

  it("It should be able to add a new item", function() {
    collection.add(1);
    expect(collection.count()).toEqual(1);
  });
});