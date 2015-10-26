(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Player1 = function Player1(options) {
	options = options || [];

	this.hitAttack = function (sack) {
		var hit = sack || 100;
		return this.health = this.health - hit;
	};

	Player1.prototype.health = 2000;
};

exports["default"] = Player1;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Player2 = function Player2(options) {
	options = options || [];

	this.hitAttack = function (sack) {
		var hit = sack || 100;
		return this.health = this.health - hit;
	};

	Player2.prototype.health = 2000;
};

exports["default"] = Player2;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Bears = require('./Bears');

var _Bears2 = _interopRequireDefault(_Bears);

var _Greenbay = require('./Greenbay');

var _Greenbay2 = _interopRequireDefault(_Greenbay);

(function () {
  'use strict';
  beforeEach(function () {
    window.b = new _Bears2['default']();
    window.g = new _Greenbay2['default']();
  });

  describe('About Players', function () {

    describe('Creating Player 1', function () {
      it('should create an instance of Player 1', function () {
        expect(b instanceof _Bears2['default']).to.equal(true);
      });
    });

    describe('Creating Player 2', function () {
      it('should create an instance of Player 2', function () {
        expect(g instanceof _Greenbay2['default']).to.equal(true);
      });
    });

    describe('Player 1 Health', function () {
      it('Player 1 should have full health at start', function () {
        expect(b.health).to.equal(2000);
      });
    });
    describe('Player 2 Health', function () {
      it('Player 2 should have full health at start', function () {
        expect(g.health).to.equal(2000);
      });
    });
    describe('Player 1 Health Damaged', function () {
      it('Player1 Health Bar should lower when Hit', function () {
        b.hitAttack();
        expect(b.health).to.be.below(2000);
      });
    });
    describe('Player 2 Health Damaged', function () {
      it('Player2 Health Bar should lower when Hit', function () {
        g.hitAttack();
        expect(g.health).to.be.below(2000);
      });
    });
  });
})();

},{"./Bears":1,"./Greenbay":2}]},{},[3])


//# sourceMappingURL=tests.js.map
