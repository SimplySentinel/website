// remoteCode.js

// Log a message to the console
console.log('Remote code executed successfully.');

// Create a new div element and add it to the body
const newDiv = document.createElement('div');
newDiv.id = 'remote-code-test';
newDiv.style.position = 'fixed';
newDiv.style.bottom = '10px';
newDiv.style.right = '10px';
newDiv.style.padding = '10px';
newDiv.style.backgroundColor = 'green';
newDiv.style.color = 'white';
newDiv.innerText = 'Remote code executed!';
document.body.appendChild(newDiv);

// Optionally, remove the div after 5 seconds
setTimeout(() => {
    const div = document.getElementById('remote-code-test');
    if (div) {
        document.body.removeChild(div);
    }
}, 5000);
