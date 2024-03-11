function deleteThemeStorage() {
    localStorage.removeItem('site-theme');
    location.reload();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
        let input = prompt('Code: ');

        if (input === 'del') {
            deleteThemeStorage();
        }

        if (input === 'show theme') {
            console.log(localStorage.getItem('site-theme'));
        }
    }
});