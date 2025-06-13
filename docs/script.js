async function getJoinedLines() {
    const response = await fetch('cfg.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const config = await response.json();
    return config.lines.join('\n');
}

async function updateDisplay() {
    const data = await getJoinedLines(); // <-- await here
    const query = document.getElementById('query');
    const display = document.getElementById('display');
    const filter = query.value.toUpperCase();
    const lines = data.trim().split('\n');
    const filtered = lines.filter(line => line.toUpperCase().includes(filter));
    display.textContent = filtered.join('\n');
}

function main() {
    const query = document.getElementById('query');
    query.addEventListener('input', updateDisplay);
    // Initial display
    updateDisplay();
}

main();
