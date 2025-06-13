let lines = null; // Global variable to store joined lines

async function getLines() {
    const response = await fetch('cfg.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const config = await response.json();
    return config.lines;
}

function updateDisplay() {
    const query = document.getElementById('query');
    const display = document.getElementById('display');
    const filter = query.value.toUpperCase();
    const filtered = lines.filter(line => line.includes(filter));
    display.textContent = filtered.join('\n');
}

async function main() {
    lines = await getLines();
    const query = document.getElementById('query');
    query.addEventListener('input', updateDisplay);
    updateDisplay();
}

main();
