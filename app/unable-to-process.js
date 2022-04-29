if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Unable To Process"] = (() => {

	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:1fr auto; grid-gap:1.5rem; overflow:hidden;";
	
	const div = document.createElement("h1");
	main.appendChild(div);
	div.style = "display:grid; align-items:center; background-color:rgb(218 41 28 / 30%);";
	
		const lblHeading = document.createElement("h1");
		div.appendChild(lblHeading);
		lblHeading.style = "text-align:center;";
		lblHeading.id = "lang-UnableToProcess-Instruction";
	
	const buttonExit = document.createElement("button");
	main.appendChild(buttonExit);
	buttonExit.id = "lang-UnableToProcess-ButtonExit";
	buttonExit.className = "primary";
	buttonExit.onclick = () => {
		$.nav.goTo("Start");
	};
	
	const load = () => {
		return main;
	}
	
	return {
		load,
	};
	
})();