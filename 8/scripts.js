// Main application logic
document.addEventListener("DOMContentLoaded", function () {

  // Add your JavaScript code here
  squaresWithThree(1000);
  function squaresWithThree(n) {
    let result = [];

    for(let i = 1; i <= n ; i++) {
        let multiply = i * i;
        if(multiply.toString().includes('3')) {

            result.push(multiply);
        }
    }
    
    return console.log(result.length);
  }

  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {

  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 8!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
