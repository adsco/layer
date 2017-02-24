export default class Animated {
	constructor(frames = [], fps = 60, repeat = true) {
		this._frames = frames;
		this._fps = fps;
		this._repeat = !!repeat;
		this._updateInterval = 1000 / fps;
		this._lastFrameIndex = 0;
		this._lastUpdateTime = 0;
	}

	start(callback = null) {
		this._lastUpdateTime = -1;
		this._lastFrameIndex = 0;
		this._callback = callback;
	}

	render(time, context, x = 0, y = 0) {
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
}