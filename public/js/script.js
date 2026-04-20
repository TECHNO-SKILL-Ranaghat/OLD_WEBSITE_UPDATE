const section = document.querySelector('.carousel-sectionn');
const items = document.querySelectorAll('.item');

if (section && items.length > 0) {
	let index = 0;

	setInterval(() => {
		index = (index + 1) % items.length;
		const color = items[index].dataset.color;

		if (color) {
			section.style.background = `radial-gradient(circle at center, ${color}, #000)`;
		}
	}, 2400);
}



if (window.innerWidth >= 992) {
	document.querySelectorAll('.nav-item.dropdown').forEach((dropdown) => {
		const menu = dropdown.querySelector('.dropdown-menu');
		let timeout;

		if (!menu) return;

		dropdown.addEventListener('mouseenter', () => {
			clearTimeout(timeout);
			menu.classList.add('show');
		});

		dropdown.addEventListener('mouseleave', () => {
			timeout = setTimeout(() => {
				menu.classList.remove('show');
			}, 150); // small delay
		});
	});
}


document.addEventListener("click", function (e) {
	if (window.innerWidth >= 992) return; // only mobile

	const dropdowns = document.querySelectorAll('.nav-item.dropdown');

	dropdowns.forEach((dropdown) => {
		const menu = dropdown.querySelector('.dropdown-menu');
		const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');

		// If clicked inside dropdown → do nothing
		if (dropdown.contains(e.target)) return;

		// Otherwise close it
		if (menu) {
			menu.classList.remove('show');
		}
	});
});



if (window.innerWidth < 992) {
	document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();

			let menu = this.nextElementSibling;

			if (menu.classList.contains("show")) {
				menu.classList.remove("show");
			} else {
				// close others first
				document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
				menu.classList.add("show");
			}
		});
	});
}


const logos = document.querySelector('.logos');

if (logos) {
	logos.innerHTML += logos.innerHTML;
}