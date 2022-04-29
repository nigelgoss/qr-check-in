if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Search"] = (() => {

	let input;

	const main = document.createElement("main");
	main.style = "display:grid; grid-template-rows:auto 1fr auto; grid-gap:1.5rem; overflow:hidden;";
	
	const lblSearch = document.createElement("h1");
	main.appendChild(lblSearch);
	lblSearch.id = "lang-Search-Instruction";
	
	const divParameters = document.createElement("div");
	main.appendChild(divParameters);
	divParameters.style = "display:grid; grid-template-columns:auto auto; place-content:center; grid-gap:1rem; font-size:1.5rem;";
		
		let span = document.createElement("span");
		divParameters.appendChild(span);
		span.id = "lang-Search-Surname";
		
		const lblSurname = document.createElement("span");
		divParameters.appendChild(lblSurname);
		
		span = document.createElement("span");
		divParameters.appendChild(span);
		span.id = "lang-Search-Day";
		
		const lblDay = document.createElement("span");
		divParameters.appendChild(lblDay);
	
		span = document.createElement("span");
		divParameters.appendChild(span);
		span.id = "lang-Search-Month";
		
		const lblMonth = document.createElement("span");
		divParameters.appendChild(lblMonth);
	
	const divOptions = document.createElement("div");
	main.appendChild(divOptions);
	divOptions.style = "display:flex; justify-content:space-around;";
	
		const buttonNo = document.createElement("button");
		divOptions.appendChild(buttonNo);
		buttonNo.id = "lang-Search-ButtonNo";
		buttonNo.onclick = () => {
			$.nav.goTo("Start");
		};
		
		const buttonYes = document.createElement("button");
		divOptions.appendChild(buttonYes);
		buttonYes.id = "lang-Search-ButtonYes";
		buttonYes.className = "primary";
		buttonYes.onclick = () => {
			$.nav.goTo("Search Results", input);
		};
		
	const load = ($input) => {
		input = $input;
		lblSurname.textContent = input.Surname;
		lblDay.textContent = input.Day;
		lblMonth.textContent = input.Month;
		return main;
	}
	
	return {
		load,
	};
	
})();