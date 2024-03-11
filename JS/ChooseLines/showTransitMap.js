const showTransitButton = document.getElementById('main-content-selections-items-transit-map');
const transitMap = document.getElementsByClassName('main-content-selections-show-transit-map-container');
const imgTransitMap = document.getElementsByClassName('main-content-selections-show-transit-map-img-src')[0];
const openImageAnchorTag = document.getElementById('main-content-selections-show-transit-buttons-open-image-link')

// Hide other sections here
showTransitButton.addEventListener('click', () => {
    scheduleSection.style.display = 'none';
});

for (let i = 0; i < transitMap.length; i++) {
    showTransitButton.addEventListener('click', () => {
        transitMap[i].style.display = 'flex';
    });
}


// Set the transit map for the selected line
function setTransitMapImgSrc(obj) {
    // Obj gathered from chooseLinesMain.js but used in setChooseLinesTitle.js
    if(localStorage.getItem('site-theme') === 'Light Theme') {
        obj.lineTransitMap = `Transit Maps/${obj.lineName}` + ` Transit Map.svg`;
        imgTransitMap.src = obj.lineTransitMap;
        openImageAnchorTag.href = obj.lineTransitMap;
    } else {
        obj.lineTransitMap = `Transit Maps/${obj.lineName}` + ` Transit Map - Dark.svg`;
        imgTransitMap.src = obj.lineTransitMap;
        openImageAnchorTag.href = obj.lineTransitMap;
    }
    
    console.log("Line Name: " + obj.lineName);
    console.log(selectedThemeStorage);
    console.log("Transit Map: " + obj.lineTransitMap);
}