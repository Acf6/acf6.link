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
window.onload = typeText;

function moveOffscreenleft() {
// Select all sections with the class 'one'
	const sections = document.querySelectorAll('.one');
    
    // Loop through each section and add the 'off-screen-left' class
    sections.forEach((section) => {
        section.classList.add('off-screen-left');
    });
}
function moveOffscreenright() {
    // Select all sections with the class 'two'
    const sections = document.querySelectorAll('.two');
    
    // Loop through each section and add the 'off-screen-right' class
    sections.forEach((section) => {
        section.classList.add('off-screen-right');
    });
}
