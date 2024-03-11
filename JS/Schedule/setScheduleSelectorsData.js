const scheduleSectionUlFrom = document.getElementById('main-content-schedule-selector-ul');
const scheduleSectionfromTitleFrom = document.getElementById('main-content-schedule-selector-from-title');

const scheduleSectionUlTo = document.getElementById('main-content-schedule-selector-ul-to');
const scheduleSectionfromTitleTo = document.getElementById('main-content-schedule-selector-to-title');

let liElementsFrom = [], liElementsTo = [];
let selectedFromStation = '', selectedToStation = '';

const scheduleTableContainer = document.getElementsByClassName("main-content-schedule-table-container")[0];

// Set the schedule selectors data
let batuCavesPulauSebangLineStations = [
    'Batu Caves',
    'Taman Wahyu',
    'Kampung Batu',
    'Batu Kentonmen',
    'Sentul',
    'Putra',
    'Bank Negara',
    'Kuala Lumpur',
    'KL Sentral',
    'MidValley',
    'Seputeh',
    'Salak Selatan',
    'Bandar Tasek Selatan',
    'Serdang',
    'Kajang',
    'Kajang 2',
    'UKM',
    'Bangi',
    'Batang Benar',
    'Nilai',
    'Labu',
    'Tiroi',
    'Seremban',
    'Senawang',
    'Sungai Gadut',
    'Rembau',
    'Pulau Sebang / Tampin'
];

// Sort the stations in alphabetical order
let batuCavesPulauSebangLineStationsSorted = [...batuCavesPulauSebangLineStations].sort();

// Clear existing list items if necessary
scheduleSectionUlFrom.innerHTML = '';
scheduleSectionUlTo.innerHTML = '';

// This is just to fill in the stations name inside the selector
function fillInDataForScheduleBatuCavesPulauSebangLine() {
    // Attach a click event listener to each li
    batuCavesPulauSebangLineStationsSorted.forEach(station => {
        // Create 'li' for 'From' selector
        let liFrom = document.createElement('li');
        liFrom.textContent = station;
        liFrom.classList.add('selector-items', 'header-language-selector-items-li');
        scheduleSectionUlFrom.appendChild(liFrom);

        // Add click event to 'liFrom'
        liFrom.addEventListener('click', function () {
            scheduleSectionfromTitleFrom.textContent = this.textContent;
            selectedFromStation = this.textContent;

            if (weekTypeVariable === "Weekday") {
                //console.log("Weekday is available.");
                console.log("From Station Name: " + selectedFromStation);
                if (selectedFromStation !== '' && selectedToStation !== '') {
                    //console.log("Both stations are selected.");
                    let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
                    let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

                    if (fromStation < toStation) {
                        //console.log("From station is less than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', 'Weekday', selectedFromStation, selectedToStation);
                    } else if (fromStation > toStation) {
                        //console.log("From station is more than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', 'Weekday', selectedFromStation, selectedToStation);
                    }
                } else {
                    console.log("Please select both stations.");
                }
            } else if (weekTypeVariable === "Weekend") {
                if (selectedFromStation !== '' && selectedToStation !== '') {
                    //console.log("Both stations are selected.");
                    let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
                    let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

                    if (fromStation < toStation) {
                        //console.log("From station is less than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', 'Weekend', selectedFromStation, selectedToStation);
                    } else if (fromStation > toStation) {
                        //console.log("From station is more than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', 'Weekend', selectedFromStation, selectedToStation);
                    }
                } else {
                    console.log("Please select both stations.");
                }
            }

        });
        // Push the 'liFrom' to the array
        liElementsFrom.push(liFrom);

        // Create 'li' for 'To' selector
        let liTo = document.createElement('li');
        liTo.textContent = station;
        liTo.classList.add('selector-items', 'header-language-selector-items-li');
        scheduleSectionUlTo.appendChild(liTo);

        // Add click event to 'liTo'
        liTo.addEventListener('click', function () {
            scheduleSectionfromTitleTo.textContent = this.textContent;
            selectedToStation = this.textContent;

            if (weekTypeVariable === "Weekday") {
                //console.log("Weekday is available.");
                if (selectedFromStation !== '' && selectedToStation !== '') {
                    // console.log("Both stations are selected.");
                    let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
                    let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

                    console.log("From Station Index: " + fromStation + " To Station Index: " + toStation);

                    if (fromStation < toStation) {
                        //console.log("From station is less than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', 'Weekday', selectedFromStation, selectedToStation);
                    } else if (fromStation > toStation) {
                        // console.log("From station is more than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', 'Weekday', selectedFromStation, selectedToStation);
                    }
                } else {

                }

            } else if (weekTypeVariable === "Weekend") {

                if (selectedFromStation !== '' && selectedToStation !== '') {
                    //console.log("Both stations are selected.");
                    let fromStation = batuCavesPulauSebangLineStations.indexOf(selectedFromStation);
                    let toStation = batuCavesPulauSebangLineStations.indexOf(selectedToStation);

                    if (fromStation < toStation) {
                        //console.log("From station is less than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Batu_Caves_Pulau_Sebang', 'Weekend', selectedFromStation, selectedToStation);
                    } else if (fromStation > toStation) {
                        //console.log("From station is more than to station.");
                        getFromToTimeForSchedule('Batu_Caves_Pulau_Sebang_Line', 'Pulau_Sebang_Batu_Caves', 'Weekend', selectedFromStation, selectedToStation);
                    }
                }

            }
        });

        // Push the 'liTo' to the array
        liElementsTo.push(liTo);
    });
}

// Function to delete all the li items inside the ul container
function deleteAllScheduleLiItems(lineName) {
    liElementsFrom.forEach(li => {
        li.remove();
    });
    liElementsTo.forEach(li => {
        li.remove();
    });

    // Reset all values
    if (lineName === "Batu Caves - Pulau Sebang Line") {
        selectedFromStation = '';
        selectedToStation = '';
        scheduleSectionfromTitleFrom.textContent = 'Choose Your Starting Station';
        scheduleSectionfromTitleTo.textContent = 'Choose Your Destination Station';
        scheduleTableContainer.style.display = 'none';

    } else if (lineName === "Tanjung Malim - Port Klang Line") {
        selectedFromStation = '';
        selectedToStation = '';
        scheduleSectionfromTitleFrom.textContent = 'Choose Your Starting Station';
        scheduleSectionfromTitleTo.textContent = 'Choose Your Destination Station';
        scheduleTableContainer.style.display = 'none';
    }

    document.getElementsByClassName("main-content-schedule-container")[0].style.marginBottom = '13em';
}

// Function to fetch schedule data for the opposite direction
function getFromToTimeForSchedule(folder, line, weekType, fromStation, toStation) {
    // let oppositeDirectionStations;

    // if (line === 'Batu_Caves_Pulau_Sebang') {
    //     // Reverse the stations stops
    //     let pulauSebangBatuCavesLineStations = batuCavesPulauSebangLineStations.slice().reverse();
    //     oppositeDirectionStations = pulauSebangBatuCavesLineStations;
    //    // console.log("Opposite of Batu Caves Pulau Sebang Line: " + oppositeDirectionStations);

    // } else if (line === 'Pulau_Sebang_Batu_Caves') {
    //     oppositeDirectionStations = batuCavesPulauSebangLineStations;
    //     //console.log("Opposite of Pulau Sebang Batu Caves Line: " + oppositeDirectionStations);
    // }

    // Fetch the JSON file for the opposite direction
    fetch(`JSON/KTM_${folder}/${line}_${weekType}.json`)
        .then(response => response.json())
        .then(data => {
            let fromTimeArray = [];
            let toTimeArray = [];

            console.log(`JSON/KTM_${folder}/${line}_${weekType}.json`);

            if (data[fromStation] && data[toStation]) {
                for (const trainnumber in data[fromStation]) {
                    if (data[fromStation].hasOwnProperty(trainnumber)) {
                        fromTimeArray.push({ trainnumber, departure: data[fromStation][trainnumber] });
                    }
                }

                for (const trainnumber in data[toStation]) {
                    if (data[toStation].hasOwnProperty(trainnumber)) {
                        toTimeArray.push({ trainnumber, arrival: data[toStation][trainnumber] });
                    }
                }

                scheduleTableContainer.style.display = 'flex';
                updateScheduleTable(fromTimeArray, toTimeArray);

                // Delete/Edit the schedule table container margin (Above footer)
                document.getElementsByClassName("main-content-schedule-container")[0].style.marginBottom = '2em';

            } else {
                console.log("Selected stations not found in the JSON data.");
            }
        });
}

function updateScheduleTable(fromData, toData) {
    // Get the tbody element
    let tbody = document.getElementById('main-content-schedule-departure-arrival-table');

    // Clear existing data
    tbody.innerHTML = '';

    // Loop through the 'from' data
    fromData.forEach(item => {
        let row = document.createElement('tr');

        let trainNumberCell = document.createElement('td');
        trainNumberCell.textContent = item.trainnumber;
        row.appendChild(trainNumberCell);

        let departureCell = document.createElement('td');
        departureCell.textContent = item.departure;
        row.appendChild(departureCell);

        // Find the corresponding 'to' data for the current train number
        let correspondingToData = toData.find(toItem => toItem.trainnumber === item.trainnumber);

        // If found, add the arrival time to the row
        if (correspondingToData) {
            let arrivalCell = document.createElement('td');
            arrivalCell.textContent = correspondingToData.arrival;
            row.appendChild(arrivalCell);
        } else {
            // If not found, create an empty cell for arrival
            let arrivalCell = document.createElement('td');
            row.appendChild(arrivalCell);
        }

        // Append the row to the tbody
        tbody.appendChild(row);
    });
}


// When press E, it would log the console below
addEventListener('keydown', function (e) {
    if (e.key === 'e') {
        console.log("Stations From: " + selectedFromStation);
        console.log("Stations To: " + selectedToStation);
        console.log("Week Type: " + weekTypeVariable);
        console.log("Selected From: " + selectedFromStation + " Selected To: " + selectedToStation)
    }
});