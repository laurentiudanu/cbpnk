var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  // carousel alternative -> https://glidejs.com/docs/

	document.body.classList.add("loaded-doc");
	const elta = document.getElementById("animate-me");
	let start;

	function step(timestamp) {
		if (start === undefined)
			start = timestamp;
		const elapsed = timestamp - start;

		elta.style.transform = 'translateX('+Math.min(0.1 * elapsed, 200)+'px)';
		if (elapsed < 2000)
			window.requestAnimationFrame(step);
	}

	window.requestAnimationFrame(step);

});