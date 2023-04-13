document.addEventListener('DOMContentLoaded', () => {
	const gallery = document.querySelector('.gallery');
	const list = document.querySelector('.gallery__list');
	const listElements = document.querySelectorAll('.list__element');
	const listElement = document.querySelector('.list__element');
	const prevButton = document.querySelector('.prev');
	const nextButton = document.querySelector('.next');
	const images = document.querySelectorAll('.image');
	let position = 0;
	const imageCount = 5;

	images.forEach((el) => {
		el.addEventListener('click', () => {
			const image = new Image();
			image.src = el.src;
			const fullSizeImage = window.open('about:blank', 'new image');
			fullSizeImage.document.write(`<img src = ${image.src} ` + `alt = full size image` + `>`)
		});
	})

    function resize() {
		listElements.forEach((el) => {
			el.style.width = `${Math.ceil(0.2*gallery.offsetWidth)}px`;
			el.style.height = `${0.18*gallery.offsetWidth}px`;
			el.style.padding = `${0.01*gallery.offsetWidth}px`;
		});
		list.style.width = gallery.offsetWidth*3 + 'px';
    }

	function nextSlide() {
		position -= listElement.offsetWidth * imageCount;
		position = Math.max(position, -listElement.offsetWidth * (listElements.length - imageCount));
		list.style.marginLeft = position + 'px';
	}

	function prevSlide() {
		position += listElement.offsetWidth * imageCount;
		position = Math.min(position, 0);
		list.style.marginLeft = position + 'px';
	}

	nextButton.addEventListener('click', nextSlide);
	prevButton.addEventListener('click', prevSlide);

	window.addEventListener('resize', resize);

	resize();
})