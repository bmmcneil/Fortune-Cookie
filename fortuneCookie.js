let fortunesArr = [
    "Success is a journey, not a destination.",
    "Opportunities are everywhere, if you know where to look.",
    "A smile is the key that fits the lock of everybody's heart.",
    "Your hard work will soon pay off.",
    "Adventure awaits you around the corner.",
    "Good things come to those who wait.",
    "Your kindness will lead to unexpected blessings.",
    "Believe in yourself and all that you are.",
    "Today is a lucky day for new beginnings.",
    "Patience is the key to joy.",
    "The best is yet to come.",
    "Dream big and dare to fail.",
    "Your creative talents will soon be recognized.",
    "A journey of a thousand miles begins with a single step.",
    "Your positive attitude will lead to success.",
]

function randomFortune(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

let fortune = document.getElementById('fortuneText');
let fortuneButton = document.getElementById('fortuneButton');

let susButton = document.getElementById('susButton');
let susText = document.getElementById('susText')

let lyrics = document.getElementById('rick');


function susFortune(){
    susButton.style.visibility = 'visible';
    susText.style.visibility = 'visible';
}

function pleaseDontPressAgain(){
    alert('You already got your fortune good sir/m\'am, I cannot provide you another in good faith of my programming!');
    susFortune();
}

function dailyFortune(){
    fortune.innerHTML = randomFortune(fortunesArr);
    fortuneButton.innerHTML = 'Have a Good Day!';
    fortuneButton.removeEventListener('click', dailyFortune);
    fortuneButton.addEventListener('click', pleaseDontPressAgain);
}

function susFortuneText(){
    susText.style.visibility ='hidden';
    susButton.style.visibility = 'hidden';
    lyrics.style.visibility = 'visible';
    fortune.innerHTML = randomFortune(fortunesArr);
}

fortuneButton.addEventListener('click', dailyFortune);
susButton.addEventListener('click', susFortuneText)


