'use strict';

function Collection() {
	this.collection = [];
}

Collection.prototype.add = function(item) {
  this.collection.push(item);
};

Collection.prototype.count = function() {
  return this.collection.length;
};