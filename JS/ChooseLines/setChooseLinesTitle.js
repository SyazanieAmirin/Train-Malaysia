const img = document.getElementsByClassName('main-content-choose-lines-chooser-button-image')[0];
const title = document.getElementsByClassName('main-content-choose-lines-chooser-button-title');
const chooseLinesLi = document.getElementsByClassName('selector-items header-language-selector-items-li');
const selectorDivsOnChooseLines = document.getElementsByClassName('selector');

// The container that contains all the buttons below the selectors
let mainContentSelectionsMain = document.getElementsByClassName('main-content-selections-container')[0];


let allItemsTitle = [
    `KTM Batu Caves - <br>Pulau Sebang Line`,
    `KTM Tanjung Malim - <br>Port Klang Line`,
    `LRT Ampang Line`,
    `LRT Sri Petaling`,
    `LRT Kelana Jaya Line`,
    `KLIA Ekspres Line`,
    `KLIA Transit Line`,
    `KL Monorail Line`,
    `MRT Kajang Line`,
    `KTM KL Sentral - <br>Terminal Skypark Line`,
    `LRT Shah Alam Line`,
    `MRT Putrajaya Line`,
    `BRT Sunway Line`,
];

// Hide the selector
function hideContainerSelector() {
    for (let i = 0; i < selectorDivsOnChooseLines.length; i++) {
        onContainerSelectorEventHide(selectorDivsOnChooseLines, i);
    }
}

for (let i = 0; i < chooseLinesLi.length; i++) {
    chooseLinesLi[i].addEventListener('click', () => {

        // Below are for the line object itself
        // For the trainLine object defined in chooseLinesMain.js
        trainLine.lineName = chooseLinesLi[i].textContent;
        chooseLinesLiGlobalText = chooseLinesLi[i].textContent;
        setTransitMapImgSrc(trainLine);
        

        // Below are for the selector's section
        let selectedLine = chooseLinesLi[i].textContent;
        img.src = `Transit Lines Icon/${selectedLine}.svg`; // Icon inside selector
        title[0].innerHTML = allItemsTitle[i]; // Title inside selector

        // Below are for Alert Info box
        if(selectedLine === "KTM KL Sentral - Terminal Skypark Line") {
            infoAlertContainer.style.display = 'block';
            infoAlertContent.textContent = "This line was discontinued until further notice!";

        } else if (selectedLine === "LRT Shah Alam Line") {
            infoAlertContainer.style.display = 'block';
            infoAlertContent.textContent = "This line is still under construction";
        } else {
            infoAlertContainer.style.display = 'none';
        }

        // Below are for the schedule section
        if(selectedLine === "KTM Batu Caves - Pulau Sebang Line") {
            deleteAllScheduleLiItems("Batu Caves - Pulau Sebang Line");
            fillInDataForScheduleBatuCavesPulauSebangLine();
            
        } else if (selectedLine === "KTM Tanjung Malim - Port Klang Line") {
            deleteAllScheduleLiItems("Tanjung Malim - Port Klang Line");
            fillInDataForScheduleTanjungMalimPortKlangLine();
        }

        // If choose other lines other than the two KTM lines, hide the schedule section
        if(selectedLine !== "KTM Batu Caves - Pulau Sebang Line" && selectedLine !== "KTM Tanjung Malim - Port Klang Line") {
            deleteAllScheduleLiItems("Batu Caves - Pulau Sebang Line");
            deleteAllScheduleLiItems("Tanjung Malim - Port Klang Line");
            scheduleSection.style.display = 'none';
            scheduleButton.style.opacity = '0.7';
        } else {
            scheduleButton.style.opacity = '1';
        }

        // Call the function to hide the container of the selector (The list li)
        hideContainerSelector();

        // Show the main content selections (aka the buttons below the selectors)
        mainContentSelectionsMain.style.display = 'flex';
    });
}

// This is for user who changed theme AFTER the transit map has been shown
for (let i = 0; i < liSelectors.length; i++) {
    liSelectors[i].addEventListener('click', () => {
        setTransitMapImgSrc(trainLine);
    });
}