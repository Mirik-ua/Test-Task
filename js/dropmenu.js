function dropMenu() {
	var drop = document.querySelector(".dropDown");

	if (drop.style.display === "none") {
		drop.style.display = "block";
	}else{
		drop.style.display = "none";
	}
};
dropMenu();
