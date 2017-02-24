/**
 * Base frame class, contains sprite image with all required params to be able to draw image on a canvas
 *
 * @class Frame
 */
export default class Frame {
	/**
	 * Constructor
	 *
	 * @param {HTMLImageElement} sprite - frame sprite, that will be drawn
	 * @param {Number} [width] - width of sprite to draw, default is image naturalWidth
	 * @param {Number} [height] - height of sprite to draw, default is image naturalHeight
	 * @param {Number} [offsetX] - sprite offset x
	 * @param {Number} [offsetY] - sprite offset y
	 */
	constructor(sprite, width = null, height = null, offsetX = null, offsetY = null) {
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
	render(context, x = 0, y = 0) {
		context.drawImage(
			this._sprite,
			this._offsetX,
			this._offsetY,
			this._width,
			this._height,
			x,
			y,
			this._width,
			this._height
		);
	}
}
