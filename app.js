import { isYes } from './functions.js';
const myButton = document.getElementById('action-button');


myButton.onclick = () => {
    alert('welcome to my quiz!');
    const myConfirmation = confirm('Do you want to take my quiz?');
    if(myConfirmation === true) {


        const userAnswer1 = prompt('Have I lived outside the United States? (y/n)');
        const sanitizedAnswer1 = userAnswer1.toLowerCase().trim();
        const userCorrect1 = isYes(sanitizedAnswer1);

        if(userCorrect1) {
            alert('Good Job!');
        } else {
            alert('Whoops!');
        }
        const userAnswer2 = prompt('Do I eat out at the finest places in Portland? (y/n)');
        const sanitizedAnswer2 = userAnswer2.toLowerCase().trim();
        const userCorrect2 = isYes(sanitizedAnswer2);

        if(userCorrect2) {
            alert('Whoops!');
        } else {
            alert('Good Job!');
        }
        const userAnswer3 = prompt('Does Zuri mean beautiful in Swahili? (y/n)');
        const sanitizedAnswer3 = userAnswer3.toLowerCase().trim();
        const userCorrect3 = isYes(sanitizedAnswer3);

        if(userCorrect3) {
            alert('Good Job!');
        } else {
            alert('Whoops!');
        }

    } else {
        alert('Thanks Anyway');
    }
};

// 