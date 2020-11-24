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
	var trigger1;
	var rndVal = 0;
	var randM;
	var docWrapper = document.querySelector(".main");
	var interval = null;
	
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

  function actionListener() {
		if(trigger1 === "true") {
    	console.log("Success: Trigger 1 is true!");
    	genMsg();
    }
    else {
    	console.info("no trigger defined");
    }
	}
	 
	function resetListener() {
		if(interval) {
		  clearInterval(interval);
		}
	}

  function genMsg() {
  	if(trigger1 != "false") {
			trigger1 = "false";
  	}
  	var gmrand = getRandomInt(3400, 8000);
   setInterval(function() {
	   	var randMsg = getRandomInt(0, sideMsg.length);
			let voicesW = document.createElement('p');
			if(document.querySelector(".voices")){
				document.querySelector(".voices").remove();
			}
			voicesW.textContent = sideMsg[randMsg];
			voicesW.classList.add("voices");
			voicesW.setAttribute("data-text", sideMsg[randMsg]);
			docWrapper.appendChild(voicesW); 
		}, gmrand);
  }


	// function catchMe() {
	// 	if(trigger1 === "true") {
 //    	console.log("Success: Trigger 1 is true!");
 //    	genMsg();
 //    }
 //  	window.requestAnimationFrame(catchMe);
	// }


	interval = setInterval(actionListener, 1100);

	document.querySelector(".trigger-1").addEventListener("click", (e) => {
		console.log("button #1 clicked...action next");
		if(trigger1 != "true") {
			trigger1 = "true";	
		}
		else {
			trigger1 = "false";
		}
		
		// var rndVal = getRandomInt(2400, 4400);
		// var randM = getRandomInt(0, sideMsg.length);
		// mcTimer(randM, rndVal);
		e.preventDefault();
	});
	document.querySelector(".trigger-2").addEventListener("click", (e) => {
		rndVal = getRandomInt(3400, 5400);
		randM = getRandomInt(0, sideMsg.length);
		mcTimer(randM, rndVal);
		e.preventDefault();
	});

	// window.requestAnimationFrame(catchMe);
  
});