(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _layer = require('./layer/layer');

var _layer2 = _interopRequireDefault(_layer);

var _staticLayer = require('./layer/static-layer');

var _staticLayer2 = _interopRequireDefault(_staticLayer);

var _animationLayer = require('./layer/animation-layer');

var _animationLayer2 = _interopRequireDefault(_animationLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./layer/animation-layer":2,"./layer/layer":3,"./layer/static-layer":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationLayer = function (_Layer) {
	_inherits(AnimationLayer, _Layer);

	function AnimationLayer() {
		_classCallCheck(this, AnimationLayer);

		return _possibleConstructorReturn(this, (AnimationLayer.__proto__ || Object.getPrototypeOf(AnimationLayer)).apply(this, arguments));
	}

	return AnimationLayer;
}(Layer);

exports.default = AnimationLayer;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = function () {
	function Layer() {
		var sprite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Layer);

		// Sprite that will contains all animation frames, sprite is static frame
		this._sprite = sprite;
	}

	_createClass(Layer, [{
		key: "sprite",
		set: function set(sprite) {
			this._sprite = sprite;
		},
		get: function get() {
			return this._sprite;
		}
	}]);

	return Layer;
}();

exports.default = Layer;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticLayer = function (_Layer) {
	_inherits(StaticLayer, _Layer);

	function StaticLayer() {
		_classCallCheck(this, StaticLayer);

		return _possibleConstructorReturn(this, (StaticLayer.__proto__ || Object.getPrototypeOf(StaticLayer)).apply(this, arguments));
	}

	return StaticLayer;
}(Layer);

exports.default = StaticLayer;

},{}]},{},[1]);
