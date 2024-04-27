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

function randomFortune(){
    return fortunesArr[Math.floor(Math.random() * 15)]
}

let fortune = document.getElementById('fortuneText');
let fortuneButton = document.getElementById('fortuneButton');

function dailyFortune(){
    fortune.innerHTML = randomFortune();
    fortuneButton.innerHTML = 'Have a Good Day!';
    fortuneButton.removeEventListener('click', dailyFortune);
}

fortuneButton.addEventListener('click', dailyFortune);




