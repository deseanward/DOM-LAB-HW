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

// Task 3.0/Task 5.0 - Data structure
// Menu data structure
var menuLinks = [
	{ text: 'about', href: '/about' },
	{
		text: 'catalog',
		href: '#',
		subLinks: [
			{ text: 'all', href: '/catalog/all' },
			{ text: 'top selling', href: '/catalog/top' },
			{ text: 'search', href: '/catalog/search' },
		],
	},
	{
		text: 'orders',
		href: '#',
		subLinks: [
			{ text: 'new', href: '/orders/new' },
			{ text: 'pending', href: '/orders/pending' },
			{ text: 'history', href: '/orders/history' },
		],
	},
	{
		text: 'account',
		href: '#',
		subLinks: [
			{ text: 'profile', href: '/account/profile' },
			{ text: 'sign out', href: '/account/signout' },
		],
	},
];

// Task 3.1 - Iterate over the menuLinks
menuLinks.forEach(link => {
	const newLink = document.createElement('a');
	newLink.setAttribute('href', link.href);
	newLink.textContent = link.text;
	topMenuEl.appendChild(newLink);
});

// Task 4.0 - Cache the submenu
let subMenuEl = document.querySelector('#sub-menu');

// Task 4.1 - Set the height
subMenuEl.style.height = '100%';

// Task 4.2 - Set the background color
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3 - Add 'flex-around' to the submenu
subMenuEl.classList.add('flex-around');

// Task 4.4 - Set the 'position' property
subMenuEl.style.position = 'absolute';

// Task 4.5 - Set the 'top' property
subMenuEl.style.top = '0';

// Task 5.1 - cache all <a> elements in top menu
const topMenuLinks = topMenuEl.querySelectorAll('a');

let showingSubMenu = false;

// Tasks 5.2 - 5.6
topMenuEl.addEventListener('click', handleTopMenu);

function handleTopMenu(e) {
	e.preventDefault();

	// Return if the clicked element is not an '<a>'
	if (e.target.localName !== 'a') return;

	// Checks to see if the target is 'active'
	if (e.target.classList.contains('active')) {
		e.target.classList.remove('active');
		showingSubMenu = false;
		subMenuEl.style.top = 0;

		return;
	}

	// Removes the 'active' class from all '<a>' elements in topMenuLinks
	topMenuLinks.forEach(link => link.classList.remove('active'));

	// Adds the 'active' class the the clicked element
	e.target.classList.add('active');
	showingSubMenu = true;

	function findLink(link) {
		if (e.target.textContent === link.text && link.subLinks) {
			showingSubMenu = true;
			return link.subLinks;
		} else {
			showingSubMenu = false;
			if (e.target.textContent === 'about') {
				const congrats = mainEl.querySelector('h1');
				congrats.textContent = 'Congrats!';
			}
			return;
		}
	}

	const subLinks = menuLinks.find(findLink);

	// Task 5.7 - Build the Sub-menu
	if (showingSubMenu === true) {
		buildSubMenu(subLinks);
		subMenuEl.style.top = '100%';
	} else subMenuEl.style.top = '0';
}

// Task 5.8 - The Sub-menu
function buildSubMenu(subLinks) {
	subMenuEl.innerHTML = null;

	subLinks.subLinks.forEach(link => {
		const newLink = document.createElement('a');
		newLink.setAttribute('href', link.href);
		newLink.textContent = link.text;
		subMenuEl.appendChild(newLink);
	});
}

// Task 6.0
subMenuEl.addEventListener('click', handleSubMenu);

function handleSubMenu(e) {
	e.preventDefault();

	// Return if the clicked element is not an '<a>'
	if (e.target.localName !== 'a') return;
	console.log(e.target);

	// Task 6.1 - Set showingSubMenu to false
	showingSubMenu = false;
	subMenuEl.style.top = '0';

	// Task 6.2 - Remove active classes
	topMenuLinks.forEach(link => link.classList.remove('active'));

	// Task 6.3 - Update the contents of mainEl
	let content = mainEl.querySelector('h1');
	content.textContent = e.target.textContent.toUpperCase();
	console.log(content);
}
