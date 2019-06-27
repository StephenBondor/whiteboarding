function rotateImage(image) {
	let newImage = [];
	let newRow = [];
	for (let r = 0; r < image.length; r++) {
		for (let s = 0; s < image[0].length; s++) {
			newRow.push(image[s][image[0].length - 1 - r]);
		}
		newImage.push(newRow);
		newRow = [];
	}
	return newImage;
}

rotateImage([
	[1, 1, 5, 9, 9],
	[2, 2, 6, 0, 0],
	[3, 3, 7, 1, 1],
	[4, 4, 8, 2, 2],
	[5, 5, 9, 3, 3]
]);
