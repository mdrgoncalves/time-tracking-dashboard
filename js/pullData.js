import data from './data.json' assert { type: 'json' };

// DOM Elements

const dailyButton = document.querySelector('.button-daily');
const weeklyButton = document.querySelector('.button-weekly');
const monthlyButton = document.querySelector('.button-monthly');
const cards = document.querySelectorAll('.cards-container article');

document.addEventListener('DOMContentLoaded', setTimeData(dailyButton));

// Function to update the DOM with the data from the JSON file
function setTimeData(button) {

    const buttonSwitch = (button) => ({
        'daily': 'Yesterday - ',
        'weekly': 'Last Week - ',
        'monthly': 'Last Month - ',  
    })[button];

    const buttonText = button.textContent.toLowerCase();
    const timeData = buttonSwitch(buttonText);

    cards.forEach((card, index) => {
        let cardTitle = data[index].title;
        let cardName = cardTitle.toLowerCase().replace(/\s/g, '');

        card.querySelector(`.${cardName}-card__title`).innerHTML = cardTitle;
        card.querySelector(`.${cardName}-card__timer`).innerHTML = data[index].timeframes[buttonText].current + 'hrs';
        card.querySelector(`.${cardName}-card__weeker`).innerHTML = timeData + data[index].timeframes[buttonText].previous + 'hrs';
    });

}

function activeButton(button) {
    dailyButton.classList.remove('button--active');
    weeklyButton.classList.remove('button--active');
    monthlyButton.classList.remove('button--active');
    button.classList.add('button--active');
}

// Event Listeners

dailyButton.addEventListener('click', function() {
    activeButton(this);
    setTimeData(this);
});

weeklyButton.addEventListener('click', function() {
    activeButton(this);
    setTimeData(this);
});

monthlyButton.addEventListener('click', function() {
    activeButton(this);
    setTimeData(this);
});



