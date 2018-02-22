//document.body.style.backgroundColor = "darkgreen";
const images = document.querySelectorAll("img");
const weatherImages = document.querySelectorAll("a.build-health-link img");
images.forEach(img => {
	if (img.getAttribute("src") === "/static/e1968005/images/32x32/red.png") {
		img.setAttribute("src", "/static/e1968005/images/32x32/blue.png");
	}
});

weatherImages.forEach(img => img.setAttribute("src", "/static/e1968005/images/32x32/health-80plus.png"));