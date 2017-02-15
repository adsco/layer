export default class Layer {
	constructor(sprite = null) {
		// Sprite that will contains all animation frames, sprite is static frame
		this._sprite = sprite;
	}

	set sprite(sprite) {
		this._sprite = sprite;
	}

	get sprite() {
		return this._sprite;
	}
}
