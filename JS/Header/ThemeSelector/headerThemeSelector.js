const liSelectors = document.getElementsByClassName('header-theme-selector-item');
const darkModeText = document.getElementsByClassName('header-theme-selector-item')[1].textContent;
let themeIconOnTitle = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 1V3" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 21V23" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.22 4.22L5.64 5.64" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.36 18.36L19.78 19.78" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 12H3" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 12H23" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.22 19.78L5.64 18.36" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.36 5.64L19.78 4.22" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`

let selectedThemeStorage = localStorage.getItem('site-theme');
const body = document.body;

// Default theme is light theme
if (selectedThemeStorage === null) {
    localStorage.setItem('site-theme', 'Light Theme');
    selectedThemeStorage = 'Light Theme';
    body.classList.add('light-theme');
}

if (selectedThemeStorage === 'Dark Theme') {
    localStorage.setItem('site-theme', 'Dark Theme');
    body.classList.add('dark-theme');
} else {
    localStorage.setItem('site-theme', 'Light Theme');
    body.classList.remove('dark-theme');
}

changeThemeNavTitle(selectedThemeStorage);  // Pass localstorage item as arg

console.log('Current Theme: ' + selectedThemeStorage);


for (let i = 0; i < liSelectors.length; i++) {
    liSelectors[i].addEventListener('click', () => {
        // Get selected theme
        let selectedTheme = liSelectors[i].textContent;
        const body = document.body;

        // If dark mode, add dark-theme class to body
        if (selectedTheme === darkModeText) {
            body.classList.add('dark-theme');
            localStorage.setItem('site-theme', 'Dark Theme');
            changeThemeNavTitle('Dark Theme');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('site-theme', 'Light Theme');
            changeThemeNavTitle('Light Theme');
        }
    });
}

// Change the navbar title of the theme selector
function changeThemeNavTitle(selectedTheme) {
    // This is logic for the title of the navbar.
    // Need to use loop because im changing for desktop and mobile's title. It's different elements.
    for (let i = 0; i < 2; i++) {
        if (selectedTheme === 'Light Theme') { // If light mode
            themeIconOnTitle = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 1V3" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 21V23" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.22 4.22L5.64 5.64" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.36 18.36L19.78 19.78" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 12H3" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12H23" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.22 19.78L5.64 18.36" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.36 5.64L19.78 4.22" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`
    
            // Change title. BEFORE selectedTheme is dark/light mode svg. AFTER is the arrow icon
            document.getElementsByClassName('header-theme-selector-button-title')[i].innerHTML = themeIconOnTitle + selectedTheme + `
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L8.5 7L16 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
                                        </svg>`;
        } else { // If dark mode
            themeIconOnTitle = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 12.991C22.8073 15.0759 22.0249 17.0628 20.7442 18.7192C19.4635 20.3756 17.7375 21.6331 15.7683 22.3444C13.799 23.0557 11.6679 23.1914 9.62435 22.7358C7.58076 22.2801 5.7092 21.2518 4.22868 19.7713C2.74815 18.2908 1.71989 16.4192 1.26422 14.3757C0.808549 12.3321 0.944309 10.201 1.65562 8.2317C2.36692 6.26245 3.62436 4.53651 5.28078 3.25582C6.93721 1.97513 8.92411 1.19267 11.009 1C9.78837 2.65139 9.20099 4.68604 9.3537 6.73389C9.50642 8.78175 10.3891 10.7068 11.8412 12.1588C13.2932 13.6109 15.2183 14.4936 17.2661 14.6463C19.314 14.799 21.3486 14.2116 23 12.991Z" stroke="#19213E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    
            document.getElementsByClassName('header-theme-selector-button-title')[i].innerHTML = themeIconOnTitle + selectedTheme + `
                                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L8.5 7L16 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                        </svg>`;
        }
    }
}