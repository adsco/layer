export default class StaticText {
	constructor() {
		this._symbols = {};
	}

	addSymbol(id, frame) {
		this._symbols[id] = frame;
	}

	render(text, context, x, y) {
        var offsetX = 0;
		var frame;
        
		for (var i = 0, len = text.length; i < len; i++) {
			frame = this._symbols[text[i]];

			frame.render(context, x + offsetX, y);

			offsetX += frame.width;
		}
	}
}