const fs = require('fs');
const path = require('path');
const readline = require('readline');

function createHTMLProject(folderName) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
    <script src="./scripts.js"></script>
</head>
<body>
</body>
</html>`;

    const jsContent = `

// Main application logic
document.addEventListener('DOMContentLoaded', function() {    
    // Add your JavaScript code here


    // do not touch this code
    initializeApp();
});

// to do change this code
function initializeApp() {    
    // Example: Add a welcome message to the body
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome to js challenge ${folderName}!';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.marginTop = '50px';
    document.body.appendChild(welcomeMessage);
}`;

    const readmeContent = `# Challenge  ${folderName}

## Challenge Title
Description of Challenge`;

    try {
        // Create the folder if it doesn't exist
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName, { recursive: true });
            console.log(`✓ Created folder: ${folderName}`);
        }

        // Change to the project directory
        const originalDir = process.cwd();
        process.chdir(folderName);

        // Create the files
        fs.writeFileSync('index.html', htmlContent);
        console.log('✓ Created index.html');

        fs.writeFileSync('scripts.js', jsContent);
        console.log('✓ Created scripts.js');

        fs.writeFileSync('readme.mdx', readmeContent);
        console.log('✓ Created readme.mdx');

        // Return to original directory
        process.chdir(originalDir);

        console.log(`\n🎉 Project "${folderName}" created successfully!`);
        console.log(`📍 Location: ${path.resolve(folderName)}`);
        console.log('\nTo open the project:');
        console.log(`cd ${folderName} && open index.html`);

    } catch (error) {
        console.error('❌ Error creating project:', error.message);
    }
}

function askForFolderName() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('📁 Enter folder name for your project: ', (folderName) => {
        folderName = folderName.trim();
        
        if (!folderName) {
            console.log('❌ Folder name cannot be empty. Using "my-project" as default.');
            folderName = 'my-project';
        }

        // Check if folder already exists
        if (fs.existsSync(folderName)) {
            rl.question(`⚠️  Folder "${folderName}" already exists. Overwrite? (y/N): `, (answer) => {
                if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
                    createHTMLProject(folderName);
                } else {
                    console.log('❌ Operation cancelled.');
                }
                rl.close();
            });
        } else {
            createHTMLProject(folderName);
            rl.close();
        }
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

// Run the interactive prompt
if (require.main === module) {
    // Check if folder name was provided as command line argument
    const args = process.argv.slice(2);
    
    if (args.length > 0) {
        createHTMLProject(args[0]);
    } else {
        askForFolderName();
    }
}

module.exports = { createHTMLProject };