// This is just to fill in the stations name inside the selector
let tanjungMalimPortKlangLineStations = [
    'Tanjung Malim',
    'Kuala Kubu Bharu',
    'Rasa',
    'Batang Kali',
    'Serendah',
    'Rawang',
    'Kuang',
    'Sungai Buloh',
    'Kepong Sentral',
    'Kepong',
    'Segambut',
    'Sentul',
    'Putra',
    'Bank Negara',
    'Kuala Lumpur',
    'KL Sentral',
    'Abdullah Hukum',
    'Angkasapuri',
    'Pantai Dalam',
    'Petaling',
    'Jalan Templer',
    'Kampung Dato Harun',
    'Seri Setia',
    'Setia Jaya',
    'Subang Jaya',
    'Batu Tiga',
    'Shah Alam',
    'Padang Jawa',
    'Bukit Badak',
    'Klang',
    'Teluk Pulai',
    'Teluk Gadong',
    'Kampung Raja Uda',
    'Jalan Kastam',
    'Pelabuhan Klang'
];

let tanjungMalimPortKlangLineStationsSorted = [...tanjungMalimPortKlangLineStations].sort();

function fillInDataForScheduleTanjungMalimPortKlangLine() {
    // Attach a click event listener to each li
    tanjungMalimPortKlangLineStationsSorted.forEach(station => {
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

                } else {
                    console.log("Please select both stations.");
                }
            } else if (weekTypeVariable === "Weekend") {
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
                    let fromStation = tanjungMalimPortKlangLineStations.indexOf(selectedFromStation);
                    let toStation = tanjungMalimPortKlangLineStations.indexOf(selectedToStation);

                    console.log("From Station Index: " + fromStation + " To Station Index: " + toStation);

                    if (fromStation < toStation) {
                        //console.log("From station is less than to station.");
                        getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Tanjung_Malim_Pelabuhan_Klang', weekTypeVariable, selectedFromStation, selectedToStation);
                    } else if (fromStation > toStation) {
                        //console.log("From station is more than to station.");
                        getFromToTimeForSchedule('Tanjung_Malim_Pelabuhan_Klang_Line', 'Pelabuhan_Klang_Tanjung_Malim', weekTypeVariable, selectedFromStation, selectedToStation);
                    }
                } else {
                    console.log("Please select both stations.");
                }

            } else if (weekTypeVariable === "Weekend") {
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

                } else {
                    console.log("Please select both stations.");
                }
            }
        });

        // Push the 'liTo' to the array
        liElementsTo.push(liTo);
    });
}