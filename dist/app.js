(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animated = function () {
	function Animated() {
		var frames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var fps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
		var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		_classCallCheck(this, Animated);

		this._frames = frames;
		this._fps = fps;
		this._repeat = !!repeat;
		this._updateInterval = 1000 / fps;
		this._lastFrameIndex = 0;
		this._lastUpdateTime = 0;
	}

	_createClass(Animated, [{
		key: "start",
		value: function start() {
			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this._lastUpdateTime = -1;
			this._lastFrameIndex = 0;
			this._callback = callback;
		}
	}, {
		key: "render",
		value: function render(time, context) {
			var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
			var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

			var index = this._lastFrameIndex;

			// -1 means animation start has been invoked, hence 1-st render must render first frame
			if (this._lastUpdateTime === -1) {
				this._lastUpdateTime = 0;
			}

			// time passed is more than update interval, hence next frame must be rendered
			if (time - this._lastUpdateTime > this._updateInterval) {
				index++;
			}

			// when last frame has been rendered and animation is looped, we must reset index to 1-st frame
			if (index >= this._frames.length && this._repeat) {
				index = 0;
			}

			this._frames[index].render(context, x, y);

			this._lastFrameIndex = index;
			this._lastUpdateTime = time - this._lastUpdateTime > this._updateInterval ? time : this._lastUpdateTime;

			if (index >= this._frames.length && this._callback) {
				this._callback();
			}
		}
	}]);

	return Animated;
}();

exports.default = Animated;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Static = function () {
	function Static(frame) {
		_classCallCheck(this, Static);

		this._frame = frame;
	}

	_createClass(Static, [{
		key: "render",
		value: function render(context, x, y) {
			this._frame.render(context, x, y);
		}
	}]);

	return Static;
}();

exports.default = Static;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base frame class, contains sprite image with all required params to be able to draw image on a canvas
 *
 * @class Frame
 */
var Frame = function () {
	/**
  * Constructor
  *
  * @param {HTMLImageElement} sprite - frame sprite, that will be drawn
  * @param {Number} [width] - width of sprite to draw, default is image naturalWidth
  * @param {Number} [height] - height of sprite to draw, default is image naturalHeight
  * @param {Number} [offsetX] - sprite offset x
  * @param {Number} [offsetY] - sprite offset y
  */
	function Frame(sprite) {
		var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var offsetX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var offsetY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

		_classCallCheck(this, Frame);

		this._sprite = sprite;
		this._width = width === null ? sprite.naturalWidth : width;
		this._height = height === null ? sprite.naturalHeight : height;
		this._offsetX = offsetX === null ? 0 : offsetX;
		this._offsetY = offsetY === null ? 0 : offsetY;
	}

	/**
  * Frame render function
  *
  * @param {CanvasRenderingContext2D} context - canvas context
  * @param {Number} [x] - x position of frame to be drawn
  * @param {Number} [y] - y position of frame to be drawn
  */


	_createClass(Frame, [{
		key: "render",
		value: function render(context) {
			var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			context.drawImage(this._sprite, this._offsetX, this._offsetY, this._width, this._height, x, y, this._width, this._height);
		}
	}]);

	return Frame;
}();

exports.default = Frame;

},{}],4:[function(require,module,exports){
'use strict';

var _frame = require('./frame/frame');

var _frame2 = _interopRequireDefault(_frame);

var _static = require('./animation/static');

var _static2 = _interopRequireDefault(_static);

var _animated = require('./animation/animated');

var _animated2 = _interopRequireDefault(_animated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	var image = new Image();
	var canvas = document.getElementById('scene');
	var context = canvas.getContext('2d');

	image.addEventListener('load', function () {
		var frames = [];
		var _render;
		var animation;

		frames.push(new _frame2.default(image, 252, 288), new _frame2.default(image, 252, 288, 257), new _frame2.default(image, 252, 288, 512), new _frame2.default(image, 252, 288, 769));

		animation = new _animated2.default(frames, 5);

		animation.start();

		_render = function render() {
			context.clearRect(0, 0, 252, 288);

			animation.render(window.performance.now(), context);

			window.requestAnimationFrame(_render);
		};

		_render();

		console.dir(image);
	});

	image.src = 'http://www.photonstorm.com/wp-content/uploads/2011/09/Image-Player-Sprite-Sheet.png';
};

},{"./animation/animated":1,"./animation/static":2,"./frame/frame":3}]},{},[4]);
