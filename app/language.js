$.language = (() => {
	
	const dictionary = {
		
		"en-GB": {
			"_Flags": ["england"],
			"_Language": "English",
			"Jan":"Jan", "Feb":"Feb", "Mar":"Mar", "Apr":"Apr", "May":"May", "Jun":"Jun", "Jul":"Jul", "Aug":"Aug", "Sep":"Sep", "Oct":"Oct", "Nov":"Nov", "Dec":"Dec",
			"Start-Greeting": "This service allows you to check in for your appointment. To continue press the 'Start' button below.",
			"Start-ButtonStart": "Start",
			"Surname-Instruction": "Please select the first letter of your surname",
			"Day-Instruction": "Please select the day of the month you were born",
			"Month-Instruction": "Please select the month you were born",
			"Search-Instruction": "Please confirm the details displayed are correct",
			"Search-Surname": "Surname",
			"Search-Day": "Day",
			"Search-Month": "Month",
			"Search-ButtonYes": "Yes",
			"Search-ButtonNo": "No",
			"SearchResults-Instruction": "Are the details below correct?",
			"SearchResults-Appointment": "Appointment",
			"SearchResults-MobileNo": "Mobile no.",
			"SearchResults-Email": "Email",
			"SearchResults-ButtonYes": "Yes",
			"SearchResults-ButtonUpdate": "Update details",
			"SearchResults-ButtonNo": "No",
			"UnableToProcess-Instruction": "We have been unable to check you in for your appointment. Please see a member of staff at the reception desk for assistance.",
			"UnableToProcess-ButtonExit": "Exit",
			"CheckIn-Instruction": "You have been checked in. Please wait in the waiting room until you are called for your appointment.",
			"CheckIn-ButtonExit": "Exit",
		},
		
		"fr": {
			"_Flags": ["france"],
			"_Language": "Français",
			"Jan":"Janv", "Feb":"Févr", "Mar":"Mars", "Apr":"Avril", "May":"Mai", "Jun":"Juin", "Jul":"Juil", "Aug":"Août", "Sep":"Sept", "Oct":"Oct", "Nov":"Nov", "Dec":"Déc",
			"Start-Greeting": "Ce service vous permet de vous enregistrer pour votre rendez-vous. Pour continuer, appuyez sur le bouton 'Démarrer' ci-dessous.",
			"Start-ButtonStart": "Aller",
			"Surname-Instruction": "Please select the first letter of your surname",
			"Day-Instruction": "Please select the day of the month you were born",
			"Month-Instruction": "Please select the month you were born",
			"Search-Instruction": "Please confirm the details displayed are correct",
			"Search-Surname": "Surname",
			"Search-Day": "Day",
			"Search-Month": "Month",
			"Search-ButtonYes": "Yes",
			"Search-ButtonNo": "No",
			"SearchResults-Instruction": "Are the details below correct?",
			"SearchResults-Appointment": "Appointment",
			"SearchResults-MobileNo": "Mobile no.",
			"SearchResults-Email": "Email",
			"SearchResults-ButtonYes": "Yes - Check in",
			"SearchResults-ButtonUpdate": "Update details",
			"SearchResults-ButtonNo": "Not me",
			"UnableToProcess-Instruction": "We have been unable to check you in for your appointment. Please see a member of staff at the reception desk for assistance.",
			"UnableToProcess-ButtonExit": "Exit",
			"CheckIn-Instruction": "You have been checked in. Please wait in the waiting room until you are called for your appointment.",
			"CheckIn-ButtonExit": "Exit",
		},
		
		"de": {
			"_Flags": ["germany"],
			"_Language": "Deutsch",
			"Jan":"Jan", "Feb":"Feb", "Mar":"Mar", "Apr":"Apr", "May":"May", "Jun":"Jun", "Jul":"Jul", "Aug":"Aug", "Sep":"Sep", "Oct":"Oct", "Nov":"Nov", "Dec":"Dec",
			"Start-Greeting": "Mit diesem Service können Sie für Ihren Termin einchecken. Um fortzufahren, klicken Sie unten auf die Schaltfläche 'Start'.",
			"Start-ButtonStart": "Gehen",
			"Surname-Instruction": "Please select the first letter of your surname",
			"Day-Instruction": "Please select the day of the month you were born",
			"Month-Instruction": "Please select the month you were born",
			"Search-Instruction": "Please confirm the details displayed are correct",
			"Search-Surname": "Surname",
			"Search-Day": "Day",
			"Search-Month": "Month",
			"Search-ButtonYes": "Yes",
			"Search-ButtonNo": "No",
			"SearchResults-Instruction": "Are the details below correct?",
			"SearchResults-Appointment": "Appointment",
			"SearchResults-MobileNo": "Mobile no.",
			"SearchResults-Email": "Email",
			"SearchResults-ButtonYes": "Yes - Check in",
			"SearchResults-ButtonUpdate": "Update details",
			"SearchResults-ButtonNo": "Not me",
			"UnableToProcess-Instruction": "We have been unable to check you in for your appointment. Please see a member of staff at the reception desk for assistance.",
			"UnableToProcess-ButtonExit": "Exit",
			"CheckIn-Instruction": "You have been checked in. Please wait in the waiting room until you are called for your appointment.",
			"CheckIn-ButtonExit": "Exit",
		},
		
	};
	
	const update = () => {
		
		document.querySelectorAll("[id^='lang-'").forEach(($v) => {
			$v.textContent = dictionary[document.documentElement.lang][$v.id.replace("lang-", "")];
		});
		
	};
	
	const pane = () => {
		
		const pane = document.createElement("div");
		pane.style = "overflow-x:auto; white-space:nowrap; text-align:center;";
		
		Object.keys(dictionary).forEach(($v) => {
			
			const button = document.createElement("button");
			pane.appendChild(button);
			button.style = "max-height:none;";
			
			const span = document.createElement("span");
			button.appendChild(span);
			span.textContent = dictionary[$v]._Language;
			
			button.appendChild(document.createElement("br"));
			
			dictionary[$v]._Flags.forEach(($v2) => {
				const img = document.createElement("img");
				button.appendChild(img);
				img.src = "app/resources/" + $v2 + ".png";
				
			});
			
			button.onclick = () => {
				document.documentElement.lang = $v;
				update();
			};
			
		});
		
		return pane;
		
	};
	
	return {
		update,
		pane,
	};
	
})();
