const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

cardArray.sort(() =>  0.5 - Math.random())

const gridDisplay = document.getElementById("grid")
const  resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}


createBoard();



function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionaOneId = cardsChosenIds[0]
    const optionaTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')
    if(optionaOneId == optionaTwoId){
        cards[optionaOneId].setAttribute('src', 'images/blank.png')
        cards[optionaTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('you found a match!')
        cards[optionaOneId].setAttribute('src', 'images/white.png')
        cards[optionaTwoId].setAttribute('src', 'images/white.png')
        cards[optionaOneId].removeEventListener('click', flipCard)
        cards[optionaTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionaOneId].setAttribute('src', 'images/blank.png')
        cards[optionaTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    
    if (cardsWon.length == cardArray.length / 2){
        resultDisplay.textContent = 'congratulation you found them all'
    }
}



function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout(checkMatch, 500)
    }
}














































////===================== i stop 52 mins =====================