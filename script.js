// FONCTIONNALITE 1

let footer = document.getElementsByTagName("footer");
let time = 1;

footer[0].addEventListener("click", function() {
	console.log("clique numero " + time);
	time++;
});

// FONCTIONNALITE 2

let hamburger = document.getElementById("navbarHeader");
let hamburgerBtn = document.getElementsByClassName("navbar-toggler")[0];

hamburgerBtn.addEventListener("click", function() {
	if (hamburger.classList.contains("collapse")) {
		hamburger.classList.remove('collapse');
	}
	else {
		hamburger.classList.add('collapse');
	}
});

// FONCTIONNALITE 3

let card = document.getElementsByClassName("card")[0];
let editBtn = card.getElementsByClassName("btn-outline-secondary")[0];

editBtn.addEventListener("click", function() {
	let text = card.getElementsByClassName("card-text")[0];
	text.style.color = 'red';
});

// FONCTIONNALITE 4
let secondCard = document.getElementsByClassName("card")[1];
let secondEditBtn = secondCard.getElementsByClassName("btn-outline-secondary")[0];

secondEditBtn.addEventListener("click", function() {
	let secondText = secondCard.getElementsByClassName("card-text")[0];
	if (secondText.style.color === 'green') {
		secondText.style.color = '#212529';
	}
	else {
		secondText.style.color = 'green';
	}
});

// FONCTIONNALITE 5
let navbar = document.getElementsByTagName("header")[0];
let pageHead = document.head;
let stylesheet = document.getElementsByTagName("link")[0];

navbar.addEventListener("dblclick", function() {
	if (pageHead.children.length == 2) {
		pageHead.removeChild(stylesheet);
	}
	else if (pageHead.children.length == 1) {
		pageHead.appendChild(stylesheet);
	}
});


