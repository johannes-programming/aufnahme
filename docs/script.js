let cfg = null; // Global variable to store joined lines

async function getCfg() {
    const response = await fetch('cfg.json');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const ans = await response.json();
    return ans;
}

function updateDisplay() {
    const query = document.getElementById('query');
    const display = document.getElementById('display');
    const filter = query.value.toUpperCase();
    const filtered = cfg.lines.filter(line => line.includes(filter));
    display.textContent = filtered.join('\n');
}

async function main() {
    cfg = await getCfg();
    const query = document.getElementById('query');
    query.addEventListener('input', updateDisplay);
    updateDisplay();
}

main();
