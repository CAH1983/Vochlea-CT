// const APIUrl = 'https://api.tfl.gov.uk/Journey/';


// const APIKey = '28975b7537ec25ece335cf1d0b03852c';

const fromInput = $('#from-input');
const toInput = $('#to-input');
const resultBtn = $('button');
const resultBox = $('#directions-box');

let requestURL = 'https://api.tfl.gov.uk/Journey/JourneyResults/' + fromInput.value + '/to/' + toInput.value + '?' + 'app_id=8c2a4197&app_key=28975b7537ec25ece335cf1d0b03852c';

const secondURL = 'https://api.tfl.gov.uk/Journey/JourneyResults/w30PU/to/w38JH?app_id=8c2a4197&app_key=28975b7537ec25ece335cf1d0b03852c'; 

// console.log(fromInput.value);
// console.log(toInput.value);

// Display the data after the user has submitted the form
// resultBtn.addEventListener('submit', function() {

//     fetch(requestUrl)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             resultBox.innerHTML = data.journeys.legs.steps; 
//         });

// });

resultBtn.addEventListener('click', function() {
    fetch(secondURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            resultBox.innerHTML = data.journeys.legs.steps;
        })
})