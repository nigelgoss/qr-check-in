if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Day"] = (() => {
	
	let input;
	
	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:auto auto 1fr; grid-gap:1.5rem; overflow:hidden;";
	
	const lblDay = document.createElement("h1");
	main.appendChild(lblDay);
	lblDay.id = "lang-Day-Instruction";
	
	const div = document.createElement("div");
	main.appendChild(div);
	div.style = "display:grid; grid-template-columns:repeat(auto-fit, minmax(5rem, 1fr)); grid-gap:0.5rem; overflow-y:auto;";
	
	[
		"1","2","3","4","5","6","7","8","9","10",
		"11","12","13","14","15","16","17","18","19","20",
		"21","22","23","24","25","26","27","28","29", "30",
		"31",
	].forEach(($v) => {
			
		const button = document.createElement("button");
		div.appendChild(button);
		button.textContent = $v;
		button.className = "primary";
		button.onclick = () => {
			$.nav.goTo("Month", Object.assign({"Day":$v}, input));
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