export default class Animated {
	constructor(frames = [], fps = 60, repeat = true) {
		this._frames = frames;
        this._maxIndex = frames.length - 1;
		this._fps = fps;
		this._repeat = !!repeat;
		this._updateInterval = 1000 / fps;
		this._lastFrameIndex = 0;
		this._lastUpdateTime = null;
        this._accumulatedFrameTime = 0;
        this._paused = false;
	}
    
    get paused() {
        return this._paused;
    }

    reset() {
        this._lastUpdateTime = null;
		this._lastFrameIndex = 0;
    }
    
    pause() {
        this._paused = true;
    }
    
    play() {
        this._paused = false;
    }

	render(time, context, x = 0, y = 0) {
		var index = this._lastFrameIndex;
        var animationEnd = false;

        if (this._lastUpdateTime === null) {
            this._lastUpdateTime = time;
        }
        
        if (!this._paused) {
            this._accumulatedFrameTime += time - this._lastUpdateTime;
        }

		// time passed is more than update interval, hence next frame must be rendered
		if (this._accumulatedFrameTime >= this._updateInterval) {
            if (index < this._maxIndex) {
                index++;
            } else if (this._repeat) {
                index = 0;
                animationEnd = true;
            } else {
                animationEnd = true;
            }
            
            this._accumulatedFrameTime -= this._updateInterval;
		}
        
        this._frames[index].render(context, x, y);
        
        this._lastFrameIndex = index;
        this._lastUpdateTime = time;
        
        return animationEnd;
	}
}