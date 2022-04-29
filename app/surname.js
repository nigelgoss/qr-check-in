if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Surname"] = (() => {
	
	let input;
	
	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:auto auto 1fr; grid-gap:1.5rem; overflow:hidden;";
	
	const lblSurname = document.createElement("h1");
	main.appendChild(lblSurname);
	lblSurname.id = "lang-Surname-Instruction";
	
	const div = document.createElement("div");
	main.appendChild(div);
	div.style = "display:grid; grid-template-columns:repeat(auto-fit, minmax(5rem, 1fr)); grid-gap:0.5rem; overflow-y:auto;";
	
	[
		"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
	].forEach(($v) => {
			
		const button = document.createElement("button");
		div.appendChild(button);
		button.className = "primary";
		button.textContent = $v;
		button.onclick = () => {
			$.nav.goTo("Day", Object.assign({"Surname":$v}, input));
		};
		
	});
	
	const load = ($input) => {
		input = $input;
		return main;
	}
	
	return {
		load,
	};
	
})();