var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var hl = document.getElementById('hl');
	var lu = document.getElementById('lu');
	var cta = document.getElementById('cta');
	var buttonExit = document.getElementById('button-exit');



	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax({paused:true});

	
	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded

		t.set(banner, {opacity:1});
			buttonExit.addEventListener('mouseover', function () {
				tl2.play(0);
				// tl2.repeat(-1);
			});
		
			buttonExit.addEventListener('mouseout', function () {
				tl2.repeat(0);
			});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl1.to(hl, 1, {opacity:1, ease:Linear.easeNone})
			.to(lu, 1, {opacity:1, ease:Linear.easeNone}, "-=0.5")
			.to(cta, 1, {opacity:1, ease:Linear.easeNone}, "-=0.5");

		tl2.to(cta, 0.25, {y:-3, ease: Sine.easeOut})
			.to(cta, 0.5, {y:3, ease: Sine.easeIn})
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
