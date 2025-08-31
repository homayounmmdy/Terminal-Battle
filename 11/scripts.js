// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  findDuplicates([
    2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
  ]);
  // Add your JavaScript code here
  function findDuplicates(arr) {
    let duplicate = [];
    let items = [];
    let result;

    arr.forEach((item) => {
      if (items.includes(item)) {
        duplicate.includes(item) ? null : duplicate.push(item);
      } else {
        items.push(item);
      }
    });

    if (duplicate.length > 0) {
      result = duplicate.sort((a, b) => a - b);
    } else {
      result = [];
    }

    console.log(result);
    return result;
  }

  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {
  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 11!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
