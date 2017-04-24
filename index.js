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

		text.addSymbol(' ', new Frame(textSprite, 16, 16));
        text.addSymbol('a', new Frame(textSprite, 16, 16, 16, 64));
		text.addSymbol('b', new Frame(textSprite, 16, 16, 32, 64));
		text.addSymbol('c', new Frame(textSprite, 16, 16, 48, 64));
		text.addSymbol('d', new Frame(textSprite, 16, 16, 64, 64));
		text.addSymbol('e', new Frame(textSprite, 16, 16, 80, 64));
		text.addSymbol('f', new Frame(textSprite, 16, 16, 96, 64));
		text.addSymbol('g', new Frame(textSprite, 16, 16, 112, 64));
		text.addSymbol('h', new Frame(textSprite, 16, 16, 128, 64));
        text.addSymbol('i', new Frame(textSprite, 16, 16, 144, 64));
        text.addSymbol('j', new Frame(textSprite, 16, 16, 160, 64));
        text.addSymbol('k', new Frame(textSprite, 16, 16, 176, 64));
        text.addSymbol('l', new Frame(textSprite, 16, 16, 192, 64));
        text.addSymbol('m', new Frame(textSprite, 16, 16, 208, 64));
        text.addSymbol('n', new Frame(textSprite, 16, 16, 224, 64));
        text.addSymbol('o', new Frame(textSprite, 16, 16, 240, 64));
        text.addSymbol('p', new Frame(textSprite, 16, 16, 0, 80));
        text.addSymbol('q', new Frame(textSprite, 16, 16, 16, 80));
        text.addSymbol('r', new Frame(textSprite, 16, 16, 32, 80));
        text.addSymbol('s', new Frame(textSprite, 16, 16, 48, 80));
        text.addSymbol('t', new Frame(textSprite, 16, 16, 64, 80));
        text.addSymbol('u', new Frame(textSprite, 16, 16, 80, 80));
        text.addSymbol('v', new Frame(textSprite, 16, 16, 96, 80));
        text.addSymbol('w', new Frame(textSprite, 16, 16, 112, 80));
        text.addSymbol('x', new Frame(textSprite, 16, 16, 128, 80));
        text.addSymbol('y', new Frame(textSprite, 16, 16, 144, 80));
        text.addSymbol('z', new Frame(textSprite, 16, 16, 160, 80));
		text.addSymbol('A', new Frame(textSprite, 16, 16, 16, 32));
		text.addSymbol('B', new Frame(textSprite, 16, 16, 32, 32));
		text.addSymbol('C', new Frame(textSprite, 16, 16, 48, 32));
		text.addSymbol('D', new Frame(textSprite, 16, 16, 64, 32));
		text.addSymbol('E', new Frame(textSprite, 16, 16, 80, 32));
		text.addSymbol('F', new Frame(textSprite, 16, 16, 96, 32));
		text.addSymbol('G', new Frame(textSprite, 16, 16, 112, 32));
		text.addSymbol('H', new Frame(textSprite, 16, 16, 128, 32));
        text.addSymbol('I', new Frame(textSprite, 16, 16, 144, 32));
        text.addSymbol('J', new Frame(textSprite, 16, 16, 160, 32));
        text.addSymbol('K', new Frame(textSprite, 16, 16, 176, 32));
        text.addSymbol('L', new Frame(textSprite, 16, 16, 192, 32));
        text.addSymbol('M', new Frame(textSprite, 16, 16, 208, 32));
        text.addSymbol('N', new Frame(textSprite, 16, 16, 224, 32));
        text.addSymbol('O', new Frame(textSprite, 16, 16, 240, 32));
        text.addSymbol('P', new Frame(textSprite, 16, 16, 0, 48));
        text.addSymbol('Q', new Frame(textSprite, 16, 16, 16, 48));
        text.addSymbol('R', new Frame(textSprite, 16, 16, 32, 48));
        text.addSymbol('S', new Frame(textSprite, 16, 16, 48, 48));
        text.addSymbol('T', new Frame(textSprite, 16, 16, 64, 48));
        text.addSymbol('U', new Frame(textSprite, 16, 16, 80, 48));
        text.addSymbol('V', new Frame(textSprite, 16, 16, 96, 48));
        text.addSymbol('W', new Frame(textSprite, 16, 16, 112, 48));
        text.addSymbol('X', new Frame(textSprite, 16, 16, 128, 48));
        text.addSymbol('Y', new Frame(textSprite, 16, 16, 144, 48));
        text.addSymbol('Z', new Frame(textSprite, 16, 16, 160, 48));

		render = function() {
			context.clearRect(0, 0, 252, 288);

			console.log(animation.render(window.performance.now(), context));
			text.render('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ', context);

			window.requestAnimationFrame(render);
		};
        
        document.addEventListener('keydown', function() {
            if (animation.paused) {
                animation.play();
            } else {
                animation.pause();
            }
        });

		render();
	});

	image.src = 'http://www.photonstorm.com/wp-content/uploads/2011/09/Image-Player-Sprite-Sheet.png';
	textSprite.src = './../resources/font.png';
};
