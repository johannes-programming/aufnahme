// Constant DATA (multi-line string)
const fs = require('fs');
const path = require('path');

const DATA = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');


const inputBox = document.getElementById('inputBox');
const displayArea = document.getElementById('displayArea');

function updateDisplay() {
    const filter = inputBox.value.toUpperCase();
    const lines = DATA.trim().split('\n');
    const filtered = lines.filter(line => line.toLowerCase().includes(filter));
    displayArea.textContent = filtered.join('\n');
}

inputBox.addEventListener('input', updateDisplay);

// Initial display
updateDisplay();