const burger = document.querySelector('.nav__burger'),
	body = document.querySelector('body'),
	menu = document.querySelector('.menu');


	burger.addEventListener('click', () => {
		burger.classList.toggle('nav__burger_active');
		body.classList.toggle('block');
		menu.classList.toggle('menu__active');
	});