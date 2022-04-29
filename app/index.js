(() => {
	
	const style = document.createElement("style");
	document.head.appendChild(style);
	style.textContent = `
		* { box-sizing:border-box; }
		@font-face { font-family:Frutiger; src:url("app/resources/frutiger.woff2") format("woff2"); }
		html { font-family:Frutiger, Arial, sans-serif; font-size:16px; height:100%; }
		body { display:grid; background-color:#FFFFFF; height:100%; margin:0; overflow:auto; box-sizing:border-box; padding:0.5rem; }
		h1 { margin:0; font-size:1.5rem; }
		button { font-family:inherit; font-size:inherit; padding:0.5rem; font-size:1.3rem; border:5px solid #003087; background-color:#FFFFFF; color:#005E8B; border-radius:0.7rem; cursor:pointer; margin:1px; max-height:3rem; }
		button.primary { background-color:#005E8B; color:#FFFFFF; }
	`;
	
	document.body.appendChild(document.createElement("main"));
	
	window.$ = {};
	
	const loadList = [
		"nav.js",
		"language.js",
		"start.js",
		"surname.js",
		"day.js",
		"month.js",
		"search.js",
		"search-results.js",
		"unable-to-process.js",
		"check-in.js",
	];
	
	let counter = 0;
	loadList.forEach(($v) => {
		
		const script = document.createElement("script");
		document.head.appendChild(script);
		script.src = "app/" + $v;
		script.onload = () => {
			if (++counter < loadList.length) { return; }
			$.nav.goTo("Start");
		};
		
		
	});
	
})();
