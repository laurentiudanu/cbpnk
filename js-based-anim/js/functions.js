var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  
	document.body.classList.add("loaded-doc");
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

	const sideMsg = ["I am not worthy", "I am alive?", "You are going to die here", "You are worthless", "Where is thy God now?", "Shut up!", "I am emptiness", "You are worthless", "Ha ha ha!", "I am God!", "Kill yourself!", "Scream. I want to hear you scream", "I stink"]
	
	let start;
	var trigger1 = false;
	var rndVal = 0;
	var randM;
	var docWrapper = document.querySelector(".main");
	
	function mcTimer(message, timer) {
    g_timer = window.setTimeout(function() {
		  let voicesW = document.createElement('p');
			voicesW.textContent = sideMsg[message];
			voicesW.classList.add("voices");
			voicesW.setAttribute("data-text", sideMsg[message]);
			docWrapper.appendChild(voicesW); 
	    mcTimerReset(timer);
    }, timer);
  }

  function mcTimerReset(timer) {
    g_timer = window.setTimeout(function() {
			document.querySelector(".voices").remove();
    	clearTimeout(g_timer);
    }, timer);	
  }

  // trigger random message after a random period of time picked from a specific range
	document.querySelector(".trigger-1").addEventListener("click", (e) => {
		console.log("button #1 clicked...action next");
		var trigger1 = true;
		var rndVal = getRandomInt(2400, 4400);
		var randM = getRandomInt(0, sideMsg.length);
		mcTimer(randM, rndVal);
		e.preventDefault();
	});
	document.querySelector(".trigger-2").addEventListener("click", (e) => {
		var rndVal = getRandomInt(3400, 5400);
		var randM = getRandomInt(0, sideMsg.length);
		mcTimer(randM, rndVal);
		e.preventDefault();
	});

	

	

	// function step(timestamp) {
	// 	if (start === undefined) {
	// 		start = timestamp;
	// 	}
	// 	const elapsed = timestamp - start;
	// 	//elta.style.transform = 'translateX('+Math.min(0.1 * elapsed, 200)+'px)';
	// 	if (elapsed < 200) {
	
	// 	}
	// 	window.requestAnimationFrame(step);
	// }

	// window.requestAnimationFrame(step);
   // }

});