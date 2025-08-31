// Main application logic
document.addEventListener("DOMContentLoaded", function () {
  generateHex("red");
  generateHex("red");
  // Add your JavaScript code here
  function generateHex(color) {
    const colors = ['red'  , 'green','blue'];
    
    if(!colors.includes(color)) {
        return 'Invalid color'
    }

    let result 
    if(color == 'red') {
        const highRed = (Math.floor(Math.random() * (255 - 128 + 1)) + 128).toString(16).padStart(2, '0');
        const lowGreen = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');  
        const lowBlue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
        result = highRed + lowGreen + lowBlue;
    }else if(color == 'green') {
         const lowRed =  Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
        const highGreen = (Math.floor(Math.random() * (255 - 128 + 1)) + 128).toString(16).padStart(2, '0');  
        const lowBlue = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
        result = lowRed + highGreen + lowBlue;
    } else if(color == 'blue') {
        const lowRed =  Math.floor(Math.random() * 128).toString(16).padStart(2, '0');
        const lowGreen = Math.floor(Math.random() * 128).toString(16).padStart(2, '0');  
        const highBlue = (Math.floor(Math.random() * (255 - 128 + 1)) + 128).toString(16).padStart(2, '0');
        result = lowRed + lowGreen + highBlue;
       
    }

    console.log(result)
    return result;
  }

  // do not touch this code
  initializeApp();
});

// to do change this code
function initializeApp() {
  // Example: Add a welcome message to the body
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.textContent = "Welcome to js challenge 10!";
  welcomeMessage.style.textAlign = "center";
  welcomeMessage.style.marginTop = "50px";
  document.body.appendChild(welcomeMessage);
}
