import { DATA } from './config.js';

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