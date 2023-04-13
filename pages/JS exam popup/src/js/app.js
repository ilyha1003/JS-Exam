document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	console.log(body);
	const images = document.querySelectorAll('.image');
	const popUpWrapper = document.querySelector('.popup-wrapper');
	const popUpField = document.querySelector('.popup-field');
	const button = document.querySelector('.button');
	
	const closePopUp = () => {
		popUpWrapper.style.display = 'none';
		popUpField.innerHTML = '';
		body.style.overflow = '';
	}

	images.forEach((el) => {
		el.addEventListener('click', () => {
			popUpWrapper.style.display = 'flex';
			const image = new Image();
			image.src = el.src;
			const fullSizeImage = `<img class="popup-image" src= ${image.src} alt= "full size image">`
			popUpField.insertAdjacentHTML('afterbegin', fullSizeImage);
			body.style.overflow = 'hidden';
		})
	});

	button.addEventListener('click', closePopUp);

	popUpWrapper.addEventListener('click', (e) => {
		if(e.target === popUpWrapper) {
			closePopUp();
		}
	});
})