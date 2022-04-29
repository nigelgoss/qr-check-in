if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Check In"] = (() => {

	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:1fr auto; grid-gap:1.5rem; overflow:hidden;";
	
	const div = document.createElement("div");
	main.appendChild(div);
	div.style = "display:grid; align-items:center; background-color:rgb(120 190 32 / 30%);";
	
		const lblHeading = document.createElement("h1");
		div.appendChild(lblHeading);
		lblHeading.style = "text-align:center;";
		lblHeading.id = "lang-CheckIn-Instruction";
	
	const buttonExit = document.createElement("button");
	main.appendChild(buttonExit);
	buttonExit.id = "lang-CheckIn-ButtonExit";
	buttonExit.className = "primary";
	buttonExit.onclick = () => {
		$.nav.goTo("Start");
	};
	
	const load = ($input) => {
		console.log("HL7|CheckIn|" + $input.UNID);
		return main;
	}
	
	return {
		load,
	};
	
})();