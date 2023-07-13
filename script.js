// Task 1.0 - Select and cache the <main> element
const mainEl = document.querySelector('main');

// Task 1.1 - Set the background color
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2 - Set the mainEl content
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3 - Add a class
mainEl.classList.add('flex-ctr');

// Task 2.0 - Select and cache the nav element
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1 - Set the height
topMenuEl.style.height = '100%';

// Task 2.2 - Set the background color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3 - Add a class
topMenuEl.classList.add('flex-around');

// Task 3.0 - Data structure
// Menu data structure
var menuLinks = [
	{ text: 'about', href: '/about' },
	{ text: 'catalog', href: '/catalog' },
	{ text: 'orders', href: '/orders' },
	{ text: 'account', href: '/account' },
];

// Task 3.1 - Iterate over the menuLinks
menuLinks.forEach(link => {
	const newLink = document.createElement('a');
	newLink.setAttribute('href', link.href);
    newLink.textContent = link.text
	topMenuEl.appendChild(newLink);
});
