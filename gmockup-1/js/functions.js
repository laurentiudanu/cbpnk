var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  // carousel alternative -> https://glidejs.com/docs/

	document.body.classList.add("loaded-doc");
	

});