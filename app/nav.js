$.nav = (() => {
	
	const goTo = ($pageName, $data) => {
		document.querySelector("main").replaceWith($.pages[$pageName].load($data));
		$.language.update();
	}
	
	return {
		goTo,
	};
	
})();