const words = ["Graphisme", "Art", "Game Design", "Web"];

const typingSpeed = 80; // Typing speed (milliseconds per character)
const deletingSpeed = 60; // Deleting speed
const pauseBetweenWords = 1000; // Pause before starting to delete

// Starting index for the text
let currentWordIndex = 0; // Tracks the current word in the array
let currentCharIndex = 0; // Tracks the current character being typed
let isDeleting = false; // Whether the script is in "deleting" mode

// Function to type out the text
function typeText() {
	// Get the element where the text is being typed
	const typedTextElement = document.getElementById("typed-text");
  
	// Check if the element exists
	if (!typedTextElement) {
		console.error("Element with ID 'typed-text' not found!");
		return;
	}
  
    // Current word to type
	const currentWord = words[currentWordIndex];

	if (isDeleting) {
		// Remove one character at a time
		currentCharIndex--;
  } 	else {
		// Add one character at a time
		currentCharIndex++;
  }
	// Update the text content
	typedTextElement.textContent = currentWord.substring(0, currentCharIndex);

// Determine the delay for the next step
let delay = isDeleting ? deletingSpeed : typingSpeed;

  // If the word is fully typed and we're not deleting
  if (!isDeleting && currentCharIndex === currentWord.length) {
    delay = pauseBetweenWords; // Pause before deleting
    isDeleting = true; // Switch to deleting mode
  }

  // If the word is fully deleted
  if (isDeleting && currentCharIndex === 0) {
    isDeleting = false; // Switch to typing mode
    currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
  }

  // Call this function again after the delay
  setTimeout(typeText, delay);
}

function moveOffscreenleft(divId) {
// Select all sections with the id 'one'
	const sections = document.querySelectorAll(`#${divId}`);
    
    // Loop through each section and add the 'off-screen-left' class
    sections.forEach((section) => {
        section.classList.add('off-screen-left');
    });
	
    const imgs = document.querySelectorAll(`#${divId} img`);

    // Loop through each image and add the 'img-size' class
    imgs.forEach((img) => {
        img.classList.add('img-size');
    });
}
function moveOffscreenright(divId) {
    // Select all sections with the id 'two'
    const sections = document.querySelectorAll(`#${divId}`);

    // Loop through each section and add the 'off-screen-right' class
    sections.forEach((section) => {
        section.classList.add('off-screen-right');
    });

    // Select all images inside #two
    const imgs = document.querySelectorAll(`#${divId} img`);

    // Loop through each image and add the 'img-size' class
    imgs.forEach((img) => {
        img.classList.add('img-size');
    });
}

const descCut = ["Ce projet est un prototype de jeu narratif que j’ai créé en tant que projet personnel, centré sur la <b>nostalgie des amitiés lycéennes qui s’effacent avec le temps.</b>",
	`Je n’ai personnellement jamais aimé l’école; le système scolaire traditionnel ne me correspondait pas.<br><br>C’est pourquoi j’ai eu l’idée de développer un concept alternatif: une <b>plateforme de soutien</b>, pensée comme une sorte de <b>fablab en ligne</b>, inspirée de la pédagogie Montessori. Une approche plus libre, créative et adaptée aux besoins de chacun.<br><br><a class="textlink" href="../../School Web/index.html">Voir le prototype du site</a>`,
	`MyBook est un <b>projet scolaire</b> réalisé sur plusieurs journées de studio durant ma terminale. L’objectif était de concevoir un <b>prototype Adobe XD</b> en créant <b>l’UI et l’UX</b> d’une application pensée comme une sorte de <b>bibliothèque numérique</b> combinée à un <b>réseau social autour des livres.</b><br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">Voir le prototype de l'application</a>`];

const descFull = ["Ce projet est un prototype de jeu narratif que j’ai créé en tant que projet personnel, centré sur la <b>nostalgie des amitiés lycéennes qui s’effacent avec le temps.</b><br><br>Construit autour de ce thème émotionnel, le jeu introduit une mécanique originale dans laquelle <b>le joueur aide un étudiant à trier ses anciens fichiers numériques</b> lors d’un appel vidéo. En parcourant des documents, des photos et des messages, le joueur reconstitue peu à peu l’histoire d’un groupe d’amis d’enfance soudés—guidé par les réactions spontanées et évolutives du personnage. Cette mécanique permet un <b>dialogue naturel</b> et une <b>révélation intime et progressive du passé</b>, renforçant le sentiment de nostalgie.<br><br>J’ai développé un Game Design Document détaillé tout au long du projet, que j’ai enrichi de manière itérative au fil de l’évolution du concept.<br><br>Visuellement, le jeu oppose deux temporalités: des souvenirs aux teintes chaudes et à l’esthétique inspirée des lycées et diners américains, et un présent plus sobre, avec une palette de couleurs neutres, soulignant la distance émotionnelle entre ces deux époques.<br><br>Pour maintenir l’intérêt du joueur, j’ai intégré des fonctionnalités telles que <b>des fins multiples, des dossiers protégés par mot de passe, des choix de dialogue,</b> ainsi que la possibilité de <b>sauvegarder certains fichiers pour déclencher différentes réactions</b>—le tout conçu pour renforcer l’immersion et la rejouabilité.",
	`Je n’ai personnellement jamais aimé l’école; le système scolaire traditionnel ne me correspondait pas.<br><br>C’est pourquoi j’ai eu l’idée de développer un concept alternatif: une <b>plateforme de soutien</b>, pensée comme une sorte de <b>fablab en ligne</b>, inspirée de la pédagogie Montessori. Une approche plus libre, créative et adaptée aux besoins de chacun.<br><br>L’objectif de cette plateforme serait de proposer un espace où les apprenants peuvent <b>explorer, expérimenter, et progresser à leur rythme,</b> sans la pression des notes ni des programmes rigides.<br><br>On y trouverait des projets concrets, des ressources collaboratives, des ateliers interactifs - le tout guidé par la curiosité et l’envie d’apprendre. Les utilisateurs pourraient s’entraider, documenter leurs apprentissages, partager leurs créations, et recevoir des retours constructifs de la communauté.<br><br>Plutôt que de reproduire le modèle scolaire en ligne, je voulais imaginer un environnement plus humain, plus horizontal, où chacun devient <b>acteur de son propre parcours.</b><br><br><a class="textlink" href="../../School Web/index.html">Voir le prototype du site</a>`,
	`MyBook est un <b>projet scolaire</b> réalisé sur plusieurs journées de studio durant ma terminale. L’objectif était de concevoir un <b>prototype Adobe XD</b> en créant <b>l’UI et l’UX</b> d’une application pensée comme une sorte de <b>bibliothèque numérique</b> combinée à un <b>réseau social autour des livres.</b><br><br>L’application permet de <b>partager des bibliothèques personnelles</b> découvrir de nouveaux livres via des recommandations personnalisées et interagir avec des amis à travers des <b>clubs de lecture.</b> Elle inclut aussi une <b>géolocalisation</b> pour trouver des librairies et médiathèques près de chez soi et un système de <b>notation et de commentaires</b> des livres et des expériences d'achat.<br><br>Le prototype a été conçu pour offrir une expérience <b>simple et intuitive,</b> avec une interface facilitant l’exploration des livres et l’interaction sociale autour de la lecture.
	<br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">Voir le prototype de l'application</a>`,];

function changeText(divId, index) {
    const ps = document.querySelectorAll(`#${divId} p.outfit-regular`);

    ps.forEach((p) => {
        if (p.innerHTML === descCut[index]) {
            p.innerHTML = descFull[index];
        } else {
            p.innerHTML = descCut[index];
        }
    });
	
	const bttons = document.querySelectorAll(`#${divId} button`);

    bttons.forEach((btton) => {
        if (btton.textContent === "Voir plus") {
            btton.textContent = "Voir moins";
        } else {
            btton.textContent = "Voir plus";
        }
    });
}

const descCutCut = ["Ce projet est un prototype de jeu narratif que j’ai créé en tant que projet personnel, centré sur la <b>nostalgie des amitiés lycéennes qui s’effacent avec le temps.</b>",
	`Je n’ai personnellement jamais aimé l’école; le système scolaire traditionnel ne me correspondait pas.<br><br>C’est pourquoi j’ai eu l’idée de développer un concept alternatif: une <b>plateforme de soutien</b>, pensée comme une sorte de <b>fablab en ligne</b>, inspirée de la pédagogie Montessori. Une approche plus libre, créative et adaptée aux besoins de chacun.<br><br><a class="textlink" href="../../../School Web/index.html">Voir le prototype du site</a>`,
	`MyBook est un <b>projet scolaire</b> réalisé sur plusieurs journées de studio durant ma terminale. L’objectif était de concevoir un <b>prototype Adobe XD</b> en créant <b>l’UI et l’UX</b> d’une application pensée comme une sorte de <b>bibliothèque numérique</b> combinée à un <b>réseau social autour des livres.</b><br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">Voir le prototype de l'application</a>`,
	"I think that..."];

const descFullFull = ["Ce projet est un prototype de jeu narratif que j’ai créé en tant que projet personnel, centré sur la <b>nostalgie des amitiés lycéennes qui s’effacent avec le temps.</b><br><br>Construit autour de ce thème émotionnel, le jeu introduit une mécanique originale dans laquelle <b>le joueur aide un étudiant à trier ses anciens fichiers numériques</b> lors d’un appel vidéo. En parcourant des documents, des photos et des messages, le joueur reconstitue peu à peu l’histoire d’un groupe d’amis d’enfance soudés—guidé par les réactions spontanées et évolutives du personnage. Cette mécanique permet un <b>dialogue naturel</b> et une <b>révélation intime et progressive du passé</b>, renforçant le sentiment de nostalgie.<br><br>J’ai développé un Game Design Document détaillé tout au long du projet, que j’ai enrichi de manière itérative au fil de l’évolution du concept.<br><br>Visuellement, le jeu oppose deux temporalités: des souvenirs aux teintes chaudes et à l’esthétique inspirée des lycées et diners américains, et un présent plus sobre, avec une palette de couleurs neutres, soulignant la distance émotionnelle entre ces deux époques.<br><br>Pour maintenir l’intérêt du joueur, j’ai intégré des fonctionnalités telles que <b>des fins multiples, des dossiers protégés par mot de passe, des choix de dialogue,</b> ainsi que la possibilité de <b>sauvegarder certains fichiers pour déclencher différentes réactions</b>—le tout conçu pour renforcer l’immersion et la rejouabilité.",
	`Je n’ai personnellement jamais aimé l’école; le système scolaire traditionnel ne me correspondait pas.<br><br>C’est pourquoi j’ai eu l’idée de développer un concept alternatif: une <b>plateforme de soutien</b>, pensée comme une sorte de <b>fablab en ligne</b>, inspirée de la pédagogie Montessori. Une approche plus libre, créative et adaptée aux besoins de chacun.<br><br>L’objectif de cette plateforme serait de proposer un espace où les apprenants peuvent <b>explorer, expérimenter, et progresser à leur rythme,</b> sans la pression des notes ni des programmes rigides.<br><br>On y trouverait des projets concrets, des ressources collaboratives, des ateliers interactifs - le tout guidé par la curiosité et l’envie d’apprendre. Les utilisateurs pourraient s’entraider, documenter leurs apprentissages, partager leurs créations, et recevoir des retours constructifs de la communauté.<br><br>Plutôt que de reproduire le modèle scolaire en ligne, je voulais imaginer un environnement plus humain, plus horizontal, où chacun devient <b>acteur de son propre parcours.</b><br><br><a class="textlink" href="../../../School Web/index.html">Voir le prototype du site</a>`,
	`MyBook est un <b>projet scolaire</b> réalisé sur plusieurs journées de studio durant ma terminale. L’objectif était de concevoir un <b>prototype Adobe XD</b> en créant <b>l’UI et l’UX</b> d’une application pensée comme une sorte de <b>bibliothèque numérique</b> combinée à un <b>réseau social autour des livres.</b><br><br>L’application permet de <b>partager des bibliothèques personnelles</b> découvrir de nouveaux livres via des recommandations personnalisées et interagir avec des amis à travers des <b>clubs de lecture.</b> Elle inclut aussi une <b>géolocalisation</b> pour trouver des librairies et médiathèques près de chez soi et un système de <b>notation et de commentaires</b> des livres et des expériences d'achat.<br><br>Le prototype a été conçu pour offrir une expérience <b>simple et intuitive,</b> avec une interface facilitant l’exploration des livres et l’interaction sociale autour de la lecture.
	<br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">Voir le prototype de l'application</a>`,
	"I think that..."];

function changeTextText(divId, index) {
    const ps = document.querySelectorAll(`#${divId} p.outfit-regular`);

    ps.forEach((p) => {
        if (p.innerHTML === descCutCut[index]) {
            p.innerHTML = descFullFull[index];
        } else {
            p.innerHTML = descCutCut[index];
        }
    });
	
	const bttons = document.querySelectorAll(`#${divId} button`);

    bttons.forEach((btton) => {
        if (btton.textContent === "Voir plus") {
            btton.textContent = "Voir moins";
        } else {
            btton.textContent = "Voir plus";
        }
    });
}
window.addEventListener("load", () => {
	changeText("one", 1);
	changeText("two", 0);
	changeText("three", 2);
	changeTextText("bgnostalgia", 0);
	changeTextText("bgexaschool", 1);
	changeTextText("bgmybook", 2);
    typeText();
});