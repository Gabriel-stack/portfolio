document.addEventListener("DOMContentLoaded", () => {
	(function adjust() {
		const badges = document.querySelectorAll(".badges");

		window.addEventListener("resize", () => {
			widthScreen = window.innerWidth;
			badges.forEach((badge) => {
				badge.addEventListener("mouseover", () => {
					const info_badge = badge.querySelector(".info-badge");
					let left = info_badge.getBoundingClientRect().left;
					let width = info_badge.offsetWidth;

					if (left + width > widthScreen) {
						info_badge.style.left = -left + "px"; // console.log(left + width, widthScreen);
					}
				});
			});
		});
	})();

	const slides = document.querySelectorAll(".slide");
	const prevButton = document.querySelector("#prev-button");
	const nextButton = document.querySelector("#next-button");

	let currentSlide = document.querySelector(".slide.active");

	prevButton.addEventListener("click", () => {
		updateCurrentSlide('<');
	});
	nextButton.addEventListener("click", () => {
		updateCurrentSlide();
	});

	function updateCurrentSlide(direction = '>', current = null) {
		current = document.querySelector(".slide.active");
		current.classList.remove("active")
		if (direction === "<") {
			current = current.previousElementSibling || slides[slides.length - 1];
		} else {
			if(current == slides[slides.length - 1]){
				current = slides[0];
			}else{
				current = current.nextElementSibling;
			}
		}
		current.classList.add("active");
	}

	function carousel() {
		if (currentSlide.nextElementSibling) {
			updateCurrentSlide(currentSlide);
		} else {
			currentSlide.classList.remove("active");
			currentSlide = slides[0];
			currentSlide.classList.add("active");
		}
	}
	setInterval(carousel, 3000);
});