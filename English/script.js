const words = ["Graphic Design", "Art", "Game Design", "Web"];

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

const descCut = ["This project is a narrative-driven game prototype I created as a personal project, centered around the <b>nostalgia of high school friendships fading away.</b>",
	'I’ve personally never liked school; the traditional education system never really suited me.<br><br>That’s why I came up with the idea of developing an alternative concept: a <b>support platform</b> designed as a kind of <b>online fablab</b>, inspired by Montessori pedagogy — a freer, more creative approach tailored to individual needs.<br><br><a class="textlink" href="../../School Web/index.html">See the website prototype</a>',
	`MyBook is a <b>school project</b> carried out over several studio days during my senior year of high school. The goal was to design an <b>Adobe XD prototype</b> by creating the <b>UI and UX</b> of an app intended to serve as a <b>digital library</b> combined with a <b>social network around books.</b><br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">See the prototype of the app</a>`];
	
const descFull = ["This project is a narrative-driven game prototype I created as a personal project, centered around the <b>nostalgia of high school friendships fading away.</b><br><br>Built on this emotional theme, the game introduces an original mechanic where <b>the player helps a college student organize their old digital files</b> during a video call. As the player sorts through documents, photos, and messages, they slowly piece together the story of a close-knit group of childhood friends—guided by the character’s candid, evolving reactions. This mechanic enables <b>organic dialogue</b> and a gradual, <b>intimate reveal of the past</b>, enhancing the sense of nostalgia.<br><br>I developed a detailed Game Design Document throughout the project, expanding it iteratively as the concept evolved.<br><br>Visually, the game contrasts two timelines: warm, youthful aesthetics inspired by American high schools and diners for the memories, and a more muted, neutral palette for the present, emphasizing the emotional distance between then and now.<br><br>To keep players engaged, I incorporated features like <b>multiple endings, password-protected folders, dialogue choices</b>, and the ability to <b>save certain files to trigger different reactions</b>—all designed to deepen immersion and replayability.",
	'I’ve personally never liked school; the traditional education system never really suited me.<br><br>That’s why I came up with the idea of developing an alternative concept: a <b>support platform</b> designed as a kind of <b>online fablab</b>, inspired by Montessori pedagogy — a freer, more creative approach tailored to individual needs.<br><br>The goal of this platform would be to offer a space where learners can <b>explore, experiment, and progress at their own pace,</b> without the pressure of grades or rigid curricula.<br><br>It would feature hands-on projects, collaborative resources, interactive workshops — all guided by curiosity and the desire to learn. Users could support each other, document their learning, share their creations, and receive constructive feedback from the community.<br><br>Rather than replicating the school model online, I wanted to imagine a more human, more horizontal environment — one where everyone becomes the <b>agent of their own learning journey.</b><br><br><a class="textlink" href="../../School Web/index.html">See the website prototype</a>',
	`MyBook is a <b>school project</b> carried out over several studio days during my senior year of high school. The goal was to design an <b>Adobe XD prototype</b> by creating the <b>UI and UX</b> of an app intended to serve as a <b>digital library</b> combined with a <b>social network around books.</b><br><br>The app allows users to <b>share personal libraries,</b> discover new books through personalized recommendations, and interact with friends via <b>book clubs.</b> It also features <b>geolocation</b> to find nearby bookstores and libraries, as well as a <b>rating and commenting</b> system for books and shopping experiences.<br><br>The prototype was designed to offer a <b>simple and intuitive</b> experience, with an interface that facilitates book exploration and social interaction around reading.<br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">See the prototype of the app</a>`]; 

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
        if (btton.textContent === "See more") {
            btton.textContent = "See less";
        } else {
            btton.textContent = "See more";
        }
    });
}

const descCutCut = ["This project is a narrative-driven game prototype I created as a personal project, centered around the <b>nostalgia of high school friendships fading away.</b>",
	'I’ve personally never liked school; the traditional education system never really suited me.<br><br>That’s why I came up with the idea of developing an alternative concept: a <b>support platform</b> designed as a kind of <b>online fablab</b>, inspired by Montessori pedagogy — a freer, more creative approach tailored to individual needs.<br><br><a class="textlink" href="../../../School Web/index.html">See the website prototype</a>',
	`MyBook is a <b>school project</b> carried out over several studio days during my senior year of high school. The goal was to design an <b>Adobe XD prototype</b> by creating the <b>UI and UX</b> of an app intended to serve as a <b>digital library</b> combined with a <b>social network around books.</b><br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">See the prototype of the app</a>`]; 

const descFullFull = ["This project is a narrative-driven game prototype I created as a personal project, centered around the <b>nostalgia of high school friendships fading away.</b><br><br>Built on this emotional theme, the game introduces an original mechanic where <b>the player helps a college student organize their old digital files</b> during a video call. As the player sorts through documents, photos, and messages, they slowly piece together the story of a close-knit group of childhood friends—guided by the character’s candid, evolving reactions. This mechanic enables <b>organic dialogue</b> and a gradual, <b>intimate reveal of the past</b>, enhancing the sense of nostalgia.<br><br>I developed a detailed Game Design Document throughout the project, expanding it iteratively as the concept evolved.<br><br>Visually, the game contrasts two timelines: warm, youthful aesthetics inspired by American high schools and diners for the memories, and a more muted, neutral palette for the present, emphasizing the emotional distance between then and now.<br><br>To keep players engaged, I incorporated features like <b>multiple endings, password-protected folders, dialogue choices</b>, and the ability to <b>save certain files to trigger different reactions</b>—all designed to deepen immersion and replayability.",
	'I’ve personally never liked school; the traditional education system never really suited me.<br><br>That’s why I came up with the idea of developing an alternative concept: a <b>support platform</b> designed as a kind of <b>online fablab</b>, inspired by Montessori pedagogy — a freer, more creative approach tailored to individual needs.<br><br>The goal of this platform would be to offer a space where learners can <b>explore, experiment, and progress at their own pace,</b> without the pressure of grades or rigid curricula.<br><br>It would feature hands-on projects, collaborative resources, interactive workshops — all guided by curiosity and the desire to learn. Users could support each other, document their learning, share their creations, and receive constructive feedback from the community.<br><br>Rather than replicating the school model online, I wanted to imagine a more human, more horizontal environment — one where everyone becomes the <b>agent of their own learning journey.</b><br><br><a class="textlink" href="../../../School Web/index.html">See the website prototype</a>',
	`MyBook is a <b>school project</b> carried out over several studio days during my senior year of high school. The goal was to design an <b>Adobe XD prototype</b> by creating the <b>UI and UX</b> of an app intended to serve as a <b>digital library</b> combined with a <b>social network around books.</b><br><br>The app allows users to <b>share personal libraries,</b> discover new books through personalized recommendations, and interact with friends via <b>book clubs.</b> It also features <b>geolocation</b> to find nearby bookstores and libraries, as well as a <b>rating and commenting</b> system for books and shopping experiences.<br><br>The prototype was designed to offer a <b>simple and intuitive</b> experience, with an interface that facilitates book exploration and social interaction around reading.<br><br><a class="textlink" target="_blank" href="https://xd.adobe.com/view/e71802cf-f8d9-40e5-b7f9-1bbccd4d862a-b24b/">See the prototype of the app</a>`]; 

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
        if (btton.textContent === "See more") {
            btton.textContent = "See less";
        } else {
            btton.textContent = "See more";
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