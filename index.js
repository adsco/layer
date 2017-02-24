import Frame from './frame/frame';
import StaticAnimation from './animation/static';
import AnimatedAnimation from './animation/animated';

window.onload = function() {
	var image = new Image();
	var canvas = document.getElementById('scene');
	var context = canvas.getContext('2d');

	image.addEventListener('load', function() {
		var frames = [];
		var render;
		var animation;

		frames.push(
			new Frame(image, 252, 288),
			new Frame(image, 252, 288, 257),
			new Frame(image, 252, 288, 512),
			new Frame(image, 252, 288, 769)
		);

		animation = new AnimatedAnimation(frames, 5);

		animation.start(function() {
			console.log('end');
		});

		render = function() {
			context.clearRect(0, 0, 252, 288);

			animation.render(window.performance.now(), context);

			window.requestAnimationFrame(render);
		};

		render();
	});

	image.src = 'http://www.photonstorm.com/wp-content/uploads/2011/09/Image-Player-Sprite-Sheet.png';
};
