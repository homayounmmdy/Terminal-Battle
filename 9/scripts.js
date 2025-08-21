// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  fiboEvenSum(10);
  // Add your JavaScript code here
  function fiboEvenSum(n) {
    if (n <= 1) return 0;

    let a = 1,
      b = 2;
    let sum = 0;

    while (b <= n) {
      // Add even terms to the sum
      if (b % 2 === 0) {
        sum += b;
      }

      // Generate next Fibonacci number
      const next = a + b;
      a = b;
      b = next;
    }

    return sum;
  }

  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {
  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 9!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
