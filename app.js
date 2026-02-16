console.log('keyecho');


function changeDisplayMode() {
    document.querySelector('.key-pressed').style.display = 'flex';
    document.querySelector('.empty-state-msg').style.display = 'none';
    showMsg = false;
}

showMsg = true;
document.addEventListener('keydown', (e) => {
    if (showMsg) changeDisplayMode();
    document.querySelector('.key-name').textContent = `${e.key}`;
    document.querySelector('.key-code').textContent = `${e.code}`;
    document.querySelector('.key-history-text').textContent += `${e.key}`;
})