let burger = document.querySelector('.burger-btn');
let burgerIcon = document.querySelector('.burger-icon')
let navList = document.querySelector('.nav-list');
let body = document.querySelector('body');
let navLink = document.querySelectorAll('.nav-item > .nav-link');

burger.addEventListener('click', function () {
	burgerIcon.classList.toggle('active');
	navList.classList.toggle('active');
	body.classList.toggle('active');
});

for (let link of navLink)
	link.addEventListener('click', function () {
		burgerIcon.classList.toggle('active');
		navList.classList.toggle('active');
		body.classList.toggle('active');
	});

console.log(navLink);