const containerDivs = document.getElementsByClassName('selector-container');
const selectorDivs = document.getElementsByClassName('selector');

for (let i = 0; i < containerDivs.length; i++) {
    containerDivs[i].addEventListener('mouseenter', () => onContainerSelectorEventShow(selectorDivs, i));

    containerDivs[i].addEventListener('click', () => onContainerSelectorEventShow(selectorDivs, i));

    containerDivs[i].addEventListener('mouseleave', () => onContainerSelectorEventHide(selectorDivs, i));

    selectorDivs[i].addEventListener('mouseleave', () => onContainerSelectorEventHide(selectorDivs, i));
   
    selectorDivs[i].addEventListener('mouseenter', () => {
        selectorDivs[i].style.transition = 'opacity 0.15s ease';
        selectorDivs[i].style.opacity = '1';
    });


}

// When showing the selector
function onContainerSelectorEventShow(cssContainer, i) {
    setTimeout(() => {
        cssContainer[i].style.transition = 'opacity 0.15s ease';
        cssContainer[i].style.opacity = '1';
    }, 150);
    cssContainer[i].style.display = 'block';
    //footerAddMarginTop();
}

// When wanna hide the selector
function onContainerSelectorEventHide(cssContainer, i) {
    setTimeout(() => {
        cssContainer[i].style.display = 'none';
    }, 150);
    cssContainer[i].style.transition = 'opacity 0.15s ease';
    cssContainer[i].style.opacity = '0';
    //footerDecreaseMarginTop();
}