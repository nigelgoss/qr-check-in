if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Start"] = (() => {
	
	const locations = {
		"RONE": "Reception One",
		"RTWO": "Reception Two",
		"CX-MAIN-OPD": "CX MAIN OPD",
	};
	
	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:auto auto auto 1fr auto; grid-gap:1.5rem; overflow:hidden;";
	
	const logo = document.createElement("img");
	main.appendChild(logo);
	logo.src = "app/resources/imperial.png";
	logo.style = "width:200px; place-self:end;";
	
	const language = document.createElement("div");
	main.appendChild(language);
	
	const lblLocation = document.createElement("h1");
	main.appendChild(lblLocation);
	lblLocation.style = "text-align:center;";
	lblLocation.textContent = locations[location.href.split("?")[1].replaceAll("-", " ")];
	
	const lblGreeting = document.createElement("div");
	main.appendChild(lblGreeting);
	lblGreeting.style = "text-align:center; overflow:auto;";
	lblGreeting.id = "lang-Start-Greeting";
	
	const buttonStart = document.createElement("button");
	main.appendChild(buttonStart);
	buttonStart.id = "lang-Start-ButtonStart";
	buttonStart.className = "primary";
	buttonStart.onclick = () => {
		$.nav.goTo("Surname", {"Location":location.href.split("?")[1].replaceAll("-", " ")});
	};
	
	const load = () => {
		
		if (language.textContent === "") {
			language.replaceWith($.language.pane());
		}
		
		return main;
	}
	
	return {
		load,
	};
	
})();