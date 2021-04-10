//563492ad6f917000010000012ca8943b323b4380baeb5f95f4f8cda4
let searchForm = document.querySelector('#search-form');
let mainContentBox = document.querySelector('#main-content-box');

searchForm.addEventListener('submit', function (e) {
	e.preventDefault();

	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let response = JSON.parse(xhttp.responseText);
			let photos = response.photos.map((photo) => {
				return photo;
			});

			mainContentBox.innerHTML = '';
			photos.forEach((photo) => {
				console.log(photo);
				let photoDiv = document.createElement('div');
				photoDiv.classList.add('photo-div');
				photoDiv.innerHTML = `
        <img src=${photo.src.large2x}>
        `;
				mainContentBox.appendChild(photoDiv);
			});
		}
	};
	let textValue = document.querySelector('#search-bar').value;
	xhttp.open(
		'GET',
		`https://api.pexels.com/v1/search/?page=1&per_page=16&query=${textValue}`,
		true
	);
	xhttp.setRequestHeader(
		'Authorization',
		'563492ad6f917000010000012ca8943b323b4380baeb5f95f4f8cda4'
	);
	xhttp.send();
});
