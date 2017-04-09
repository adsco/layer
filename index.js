import Frame from './frame/frame';
import StaticAnimation from './animation/static';
import AnimatedAnimation from './animation/animated';
import StaticText from './animation/static-text';

window.onload = function() {
	var image = new Image();
	var textSprite = new Image();
	var canvas = document.getElementById('scene');
	var context = canvas.getContext('2d');

	image.addEventListener('load', function() {
		var text = new StaticText();
		var frames = [];
		var render;
		var animation;

		frames.push(
			new Frame(image, 252, 288),
			new Frame(image, 252, 288, 257),
			new Frame(image, 252, 288, 512),
			new Frame(image, 252, 288, 769)
		);

		animation = new AnimatedAnimation(frames, 8);

		animation.start(function() {
			console.log('end');
		});

		text.addSymbol(' ', new Frame(textSprite, 16, 16));
		text.addSymbol('a', new Frame(textSprite, 16, 16, 16, 32));
		text.addSymbol('b', new Frame(textSprite, 16, 16, 32, 32));
		text.addSymbol('c', new Frame(textSprite, 16, 16, 48, 32));
		text.addSymbol('d', new Frame(textSprite, 16, 16, 64, 32));
		text.addSymbol('e', new Frame(textSprite, 16, 16, 80, 32));
		text.addSymbol('f', new Frame(textSprite, 16, 16, 96, 32));
		text.addSymbol('g', new Frame(textSprite, 16, 16, 112, 32));
		text.addSymbol('h', new Frame(textSprite, 16, 16, 128, 32));
        text.addSymbol('i', new Frame(textSprite, 16, 16, 144, 32));

		render = function() {
			context.clearRect(0, 0, 252, 288);

			animation.render(window.performance.now(), context);
			text.render('aba cdefghi', context);

			window.requestAnimationFrame(render);
		};

		render();
	});

	image.src = 'http://www.photonstorm.com/wp-content/uploads/2011/09/Image-Player-Sprite-Sheet.png';
	textSprite.src = './../resources/font.png';
};
