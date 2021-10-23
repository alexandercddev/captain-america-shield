
let count = 1; 
document.getElementById('shield').addEventListener('click', () => {
    let button = document.getElementById('shield');
    button.className = `animation-click-${count}`;
    count = count < 3 ? count + 1 : 1;
    button.disabled = true;
    setTimeout(() => {
        button.className = ''; 
        button.disabled = false; 
    }, 1500);
});