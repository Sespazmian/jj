window.onload = function() {
	var sr = ScrollReveal();
	// var selectionContainers = document.getElementsByClassName('selection-container');

	// for (var i=0; i < selectionContainers.length; i++) {
	// 	selectionContainers[i].addEventListener("touchstart", touchHandler, false);
	// 	selectionContainers[i].addEventListener("click", this.classList.toggle('flipped'), false);
	// }

	// document.addEventListener("scroll", function() {
	// 	for (var i=0; i < selectionContainers.length; i++) {
			
	// 	}



	// 	if (window.pageYOffset > 0 && window.pageYOffset < 100) {
	// 		console.log('OFFSET');
	// 		selectionContainers[0].classList.toggle('flipped');
	// 	}
	// });

	// sr.reveal('.selection-container', { container: '.selection-container', rotate: {x: 65} });

	sr.watch = function (target, onEnter, onExit) {

	    onExit = onExit || function () {}

	    if (typeof onEnter === 'function' && typeof onExit === 'function') {
	        var noEffect = {
	        	origin: 'bottom',
	            delay:    50,
	            distance: 0,
	            duration: 0,
	            scale:    1,
	            opacity:  null,
	            rotate:   { x: 0, y: 0, z: 0, },
	            viewFactor: 1,
	            viewOffset: { top: 150, right: 0, bottom: 150, left: 0 },


	            reset: true,
	            beforeReset: onExit,
	            beforeReveal: onEnter,
	        }
	        this.reveal(target, noEffect)
	    } else {
	        throw new Error('Watch received invalid arguments.')
	    }
	}

	sr.watch('.selection-container',
	    function onEnter (el) {
	        el.classList.toggle('flipped')
	    },
	    function onExit (el) {
	        el.classList.toggle('flipped')
	    }
	)

}

function touchHandler(e) {
	console.log(this.classList);
	this.classList.toggle('flipped');
}