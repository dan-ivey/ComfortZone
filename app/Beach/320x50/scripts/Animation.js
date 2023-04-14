var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var lu = document.getElementById('lu');
	var buttonExit = document.getElementById('button-exit');



	var t = TweenMax;
	var tl1 = new TimelineMax();

	
	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded

		t.set(banner, {opacity:1});
		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl1.to(lu, 1, {opacity:1, ease:Linear.easeNone})

	
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
