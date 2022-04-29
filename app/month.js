if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Month"] = (() => {
	
	let input;
	
	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:auto auto 1fr; grid-gap:1.5rem; overflow:hidden;";
	
	const lblDay = document.createElement("h1");
	main.appendChild(lblDay);
	lblDay.id = "lang-Month-Instruction";
	
	const div = document.createElement("div");
	main.appendChild(div);
	div.style = "display:grid; grid-template-columns:repeat(auto-fit, minmax(5rem, 1fr)); grid-gap:0.5rem; overflow-y:auto;";
	
	[
		"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
	].forEach(($v) => {
			
		const button = document.createElement("button");
		div.appendChild(button);
		button.id = "lang-" + $v;
		button.className = "primary";
		button.onpointerdown = () => {
			$.nav.goTo("Search", Object.assign({"Month":$v}, input));
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