export default class Static {
	constructor(frame) {
		this._frame = frame;
	}

	render(context, x, y) {
		this._frame.render(context, x, y);
	}
}