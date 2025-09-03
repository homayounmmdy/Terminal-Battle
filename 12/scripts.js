// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript code here
  isPangram("Hello", "hellow");
  function isPangram(sentence, letters) {
    const sentenceChars = [
      ...new Set(sentence.toLowerCase().replace(/[^a-z]/g, "")),
    ]
      .sort()
      .join("");
    const letterChars = [
      ...new Set(letters.toLowerCase().replace(/[^a-z]/g, "")),
    ]
      .sort()
      .join("");

    return sentenceChars === letterChars;
  }

  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {
  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 12!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
