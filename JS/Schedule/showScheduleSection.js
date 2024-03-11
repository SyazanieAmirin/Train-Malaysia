const scheduleSection = document.getElementsByClassName('main-content-schedule-container')[0];
const scheduleButton = document.getElementById('main-content-selections-items-schedule');
const weekTypesContainer = document.getElementsByClassName('main-content-schedule-week-types-buttons-container')[0];
const fromAndToSelectorsContainer = document.getElementsByClassName('main-content-choose-from-to-schedule-selector-container')[0];

const scheduleSelector = document.getElementsByClassName('main-content-choose-lines-chooser-selector');

const weekTypeWeekdayButton = document.getElementById('main-content-schedule-week-types-buttons-weekday');
const weekTypeWeekendButton = document.getElementById('main-content-schedule-week-types-buttons-weekend');

let weekTypeVariable = "";

// Hide the sections of other sections
for (let i = 0; i < transitMap.length; i++) {
    scheduleButton.addEventListener('click', () => {
        transitMap[i].style.display = 'none';
    });
}
// Hide other sections ends here

// Show the week types section
scheduleButton.addEventListener('click', () => {
    if(trainLine.lineName == "KTM Batu Caves - Pulau Sebang Line" || trainLine.lineName == "KTM Tanjung Malim - Port Klang Line") {
        scheduleSection.style.display = 'flex';
        scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
        
});

// Show the schedule section
weekTypeWeekdayButton.addEventListener('click', () => {
    weekTypeVariable = "Weekday";
    fromAndToSelectorsContainer.style.display = 'block';
    scheduleSection.scrollIntoView({ behavior: 'smooth' });

    if(selectedFromStation !== "" && selectedToStation !== "") {
        if(trainLine.lineName == "KTM Batu Caves - Pulau Sebang Line") {

            console.log("From Station Name: " + selectedFromStation);
            if(selectedFromStation !== '' && selectedToStation !== '' ) {
                //console.log("Both stations are selected.");
                let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
                let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

                if(fromStation < toStation) {
                    //console.log("From station is less than to station.");
                    getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', weekTypeVariable, selectedFromStation, selectedToStation);
                } else if(fromStation > toStation) {
                    //console.log("From station is more than to station.");
                    getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', weekTypeVariable, selectedFromStation, selectedToStation);
                }
            } 
            
        } else if(trainLine.lineName == "KTM Tanjung Malim - Port Klang Line") {

            if (selectedFromStation !== '' && selectedToStation !== '') {
                //console.log("Both stations are selected.");
                let fromStation = tanjungMalimPortKlangLineStations.indexOf(selectedFromStation);
                let toStation = tanjungMalimPortKlangLineStations.indexOf(selectedToStation);

                if (fromStation < toStation) {
                    //console.log("From station is less than to station.");
                    getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Tanjung_Malim_Pelabuhan_Klang', weekTypeVariable, selectedFromStation, selectedToStation);
                } else if (fromStation > toStation) {
                    //console.log("From station is more than to station.");
                    getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Pelabuhan_Klang_Tanjung_Malim', weekTypeVariable, selectedFromStation, selectedToStation);
                }

            }

        }
    }
});

weekTypeWeekendButton.addEventListener('click', () => {
    weekTypeVariable = "Weekend";
    fromAndToSelectorsContainer.style.display = 'block';
    scheduleSection.scrollIntoView({ behavior: 'smooth' });

    if(selectedFromStation !== "" && selectedToStation !== "") {
        if(trainLine.lineName == "KTM Batu Caves - Pulau Sebang Line") {

            let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
            let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

            if(fromStation < toStation) {
                //console.log("From station is less than to station.");
                getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', weekTypeVariable, selectedFromStation, selectedToStation);
            } else if(fromStation > toStation) {
                //console.log("From station is more than to station.");
                getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', weekTypeVariable, selectedFromStation, selectedToStation);
            }

        } else if(trainLine.lineName == "KTM Tanjung Malim - Port Klang Line") {

            let fromStation = tanjungMalimPortKlangLineStations.indexOf(selectedFromStation);
            let toStation = tanjungMalimPortKlangLineStations.indexOf(selectedToStation);

            if (fromStation < toStation) {
                //console.log("From station is less than to station.");
                getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Tanjung_Malim_Pelabuhan_Klang', weekTypeVariable, selectedFromStation, selectedToStation);
            } else if (fromStation > toStation) {
                //console.log("From station is more than to station.");
                getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Pelabuhan_Klang_Tanjung_Malim', weekTypeVariable, selectedFromStation, selectedToStation);
            }

        }
    }

});