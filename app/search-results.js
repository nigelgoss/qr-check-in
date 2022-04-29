if ($.pages === undefined) {
	$.pages = {};
}

$.pages["Search Results"] = (($input) => {

	let input;
	let response;

	const main = document.createElement("main");
	main.style = "display:flex; flex-direction:column; justify-content:space-around; height:100%;";
	
	const lblSearch = document.createElement("h1");
	main.appendChild(lblSearch);
	lblSearch.id = "lang-SearchResults-Instruction";
	
	const divResults = document.createElement("div");
	main.appendChild(divResults);
	divResults.style = "display:grid; grid-template-columns:auto auto; place-content:center; grid-gap:1rem; font-size:1.5rem;";
		
		let span = document.createElement("span");
		divResults.appendChild(span);
		span.id = "lang-SearchResults-Appointment";
		
		const lblAppointment = document.createElement("span");
		divResults.appendChild(lblAppointment);
		
		span = document.createElement("span");
		divResults.appendChild(span);
		span.id = "lang-SearchResults-MobileNo";
		
		const lblMobileNo = document.createElement("span");
		divResults.appendChild(lblMobileNo);
	
		span = document.createElement("span");
		divResults.appendChild(span);
		span.id = "lang-SearchResults-Email";
		
		const lblEmail = document.createElement("span");
		divResults.appendChild(lblEmail);
		

	const divOptions = document.createElement("div");
	main.appendChild(divOptions);
	divOptions.style = "display:flex; justify-content:space-around;";
	
		const buttonNo = document.createElement("button");
		divOptions.appendChild(buttonNo);
		buttonNo.id = "lang-SearchResults-ButtonNo";
		buttonNo.className = "red";
		buttonNo.onpointerdown = () => {
			$.nav.goTo("Unable To Process");
		};
		
		const buttonUpdate = document.createElement("button");
		divOptions.appendChild(buttonUpdate);
		buttonUpdate.id = "lang-SearchResults-ButtonUpdate";
		buttonUpdate.className = "amber";
		buttonUpdate.onpointerdown = () => {
			//$.nav.goTo("Check In", response);
		};

		const buttonYes = document.createElement("button");
		divOptions.appendChild(buttonYes);
		buttonYes.id = "lang-SearchResults-ButtonYes";
		buttonYes.className = "green";
		buttonYes.onpointerdown = () => {
			$.nav.goTo("Check In", {"UNID":response[0].UNID});
		};

	const load = ($input) => {

		input = $input;
		
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			
			if (xhr.readyState !== 4) { return; }
			
			if (xhr.status !== 200) {
				$.nav.goTo("Unable To Process");
				return;
			}
			
			response = JSON.parse(xhr.responseText);
			
			if (response.length !== 1) {
				$.nav.goTo("Unable To Process");
				return;
			}
			
			lblAppointment.textContent = response[0].ApptDT;
			lblMobileNo.textContent = response[0].MobileNo;
			lblEmail.textContent = response[0].Email;

		};
		xhr.open("POST", "api/fetchappt.php");
		xhr.send(JSON.stringify(input));
		
		return main;
		
	};
	
	return {
		load,
	};
	
})();