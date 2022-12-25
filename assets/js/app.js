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

	const projects = document.querySelector(".projects");
	projects.querySelectorAll(".project_label").forEach((project) => {
		project.addEventListener("click", () => {
			let project_id = project.getAttribute("data-id");
			let project_content = document.querySelector(`#${project_id}`);
			let exists = document.querySelector(".slide.active");
			if (exists) {
				exists.classList.remove("active");
			}
			project_content.classList.toggle("active");
		});
	});

	function writeTextSlogan() {
		const slogan = document.querySelector(".slogan .title h1");
		const phrases = [
			"Vivendo e respirando tecnologia",
			"Apaixonado por criar soluções",
			"Desenvolvedor Full Stack",
		];
		let currentPhraseIndex = 0;

		function writePhrase(phrase) {
			slogan.textContent = ""; // limpa o conteúdo do elemento
			for (let i = 0; i < phrase.length; i++) {
				setTimeout(() => {
					slogan.textContent += phrase[i];
				}, 75 * i);
			}
		}

		function writeNextPhrase() {
			if (currentPhraseIndex === phrases.length) {
				currentPhraseIndex = 0; // volta para a primeira frase do array
			}
			const currentPhrase = phrases[currentPhraseIndex];
			writePhrase(currentPhrase);
			currentPhraseIndex++;
		}

		setTimeout(writeNextPhrase, 0); // escreve a primeira frase imediatamente
		setInterval(writeNextPhrase, 5000); // escreve a próxima frase a cada 5 segundos
	}

	writeTextSlogan();
});

