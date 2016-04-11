// currentManuIndex = 0;
// currentImageIndex = 0;

// function getCurrentImage() {
// 	var manuCount = data.length;
// 	if (currentManuIndex < 0) {
// 		currentManuIndex = 0;
// 	}
// 	var obj = data[Math.min(currentManuIndex, manuCount-1)];
// 	var imageCount = obj.images.length;
// 	if (currentImageIndex < 0) {
// 		currentImageIndex = 0;
// 	}
// 	var img = obj.images[Math.min(currentImageIndex, imageCount-1)];
// 	return img;
// }

// function nextImage() {
// 	currentImageIndex++
// 	return getCurrentImage();
// }

// function prevImage() {
// 	currentImageIndex--;
// 	return getCurrentImage();
// }

// function nextManu() {
// 	currentManuIndex++;
// 	currentImageIndex = 0;
// 	return getCurrentImage();
// }

// var data = [
// 	{ manu: 'Casella', images: [
// 		'http://fillmurray.com/20/20/c1',
// 		'http://fillmurray.com/20/20/c2',
// 		'http://fillmurray.com/20/20/c3',
// 		'http://fillmurray.com/20/20/c4',
// 		'http://fillmurray.com/20/20/c5'
// 	]},

// 	{ manu: 'Nilson', images: [
// 		'http://fillmurray.com/20/20/n1',
// 		'http://fillmurray.com/20/20/n2',
// 		'http://fillmurray.com/20/20/n3',
// 		'http://fillmurray.com/20/20/n4',
// 		'http://fillmurray.com/20/20/n5'
// 	]}
// ];