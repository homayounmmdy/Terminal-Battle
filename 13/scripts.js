// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript code here
  console.log(isValidIPv4("192.168.101."));
  function isValidIPv4(ipv4) {
    const IpNumbers = ipv4.split(".");

    if (IpNumbers.length !== 4) return false;

    for (let i = 0; i < IpNumbers.length; i++) {
      // Check for empty strings
      if (IpNumbers[i] === "") return false;

      // Check if the part contains only digits
      if (!/^\d+$/.test(IpNumbers[i])) return false;

      // Check range
      const num = parseInt(IpNumbers[i]);
      if (num < 0 || num > 255) return false;

      // Check for leading zeros (except for single '0')
      if (IpNumbers[i].length > 1 && IpNumbers[i][0] === "0") return false;
    }

    return true;
  }
  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {
  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 13!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
