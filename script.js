const images = [
	{
		name: 'html',
		img: './images/html.png',
	},
	{
		name: 'css',
		img: './images/css.png',
	},
	{
		name: 'javascript',
		img: './images/js.png',
	},
	{
		name: 'python',
		img: './images/python.png',
	},
	{
		name: 'react',
		img: './images/react.png',
	},
	{
		name: 'vue',
		img: './images/vue.png',
	},
	{
		name: 'angular',
		img: './images/angular.png',
	},
	{
		name: 'c++',
		img: './images/c++.png',
	},
	{
		name: 'html',
		img: './images/html.png',
	},
	{
		name: 'css',
		img: './images/css.png',
	},
	{
		name: 'javascript',
		img: './images/js.png',
	},
	{
		name: 'python',
		img: './images/python.png',
	},
	{
		name: 'react',
		img: './images/react.png',
	},
	{
		name: 'vue',
		img: './images/vue.png',
	},
	{
		name: 'angular',
		img: './images/angular.png',
	},
	{
		name: 'c++',
		img: './images/c++.png',
	},
];

const gameBoard = document.getElementById('game-board');
const scoreElement = document.getElementById('score');
const startButton = document.getElementById('start-btn');
const timerElement = document.getElementById('timer');

let score = 0;
let cardsChosen = [];
let cardsWon = [];
let seconds = 0;
let minutes = 0;

let timerInterval;

const DEFAULT_IMAGE = './images/questionmark.png';
const WHITE_IMAGE = './images/white.png';

function displayBoard() {
	images.sort(() => Math.random() - 0.5);
	startButton.remove();
	scoreElement.innerHTML = `Your Score: ${score}`;
	gameBoard.innerHTML = '';
	images.forEach((image, index) => {
		const img = document.createElement('img');
		img.setAttribute('data-id', index);
		img.addEventListener('click', flipCard);
		img.src = DEFAULT_IMAGE;
		img.alt = image.name;
		img.className = 'img';
		gameBoard.appendChild(img);
	});
}

startButton.addEventListener('click', () => {
	displayBoard();
	startTimer();
});

function flipCard(e) {
	const cardId = e.target.getAttribute('data-id');
	const imgElement = e.target;
	imgElement.src = images[cardId].img;
	cardsChosen.push({ ...images[cardId], id: cardId });
	if (cardsChosen.length === 2) {
		checkMatch();
	}
}

function checkMatch() {
	const cards = document.getElementsByClassName('img');
	const [firstCard, secondCard] = cardsChosen;

	if (firstCard.id === secondCard.id) {
		setTimeout(() => {
			cards[firstCard.id].src = DEFAULT_IMAGE;
		}, 500);
	} else if (firstCard.name === secondCard.name) {
		setTimeout(() => {
			cards[firstCard.id].src = WHITE_IMAGE;
			cards[firstCard.id].classList.add('match');
			cards[firstCard.id].removeEventListener('click', flipCard);

			cards[secondCard.id].src = WHITE_IMAGE;
			cards[secondCard.id].classList.add('match');
			cards[secondCard.id].removeEventListener('click', flipCard);
		}, 500);
		cardsWon = [...cardsWon, firstCard];
		score += 5;
		updateScore();
		console.log(cardsWon.length, parseInt(images.length / 2));
		if (cardsWon.length === parseInt(images.length / 2)) {
			stopGame();
		}
	} else {
		setTimeout(() => {
			cards[firstCard.id].src = DEFAULT_IMAGE;
			cards[secondCard.id].src = DEFAULT_IMAGE;
		}, 500);
	}

	cardsChosen = [];
}

function updateScore() {
	scoreElement.innerText = `Your Score: ${score}`;
}

function stopGame() {
	stopTimer();
	const button = document.createElement('button');
	button.addEventListener('click', () => {
		score = 0;
		displayBoard();
		startTimer();
	});
	button.innerText = 'Restart Game';
	gameBoard.innerHTML = '';
	gameBoard.appendChild(button);
}

function startTimer() {
	timerInterval = setInterval(() => {
		seconds += 1;
		if (seconds === 59) {
			minutes += 1;
		}
		timerElement.innerText = `Time: ${
			minutes < 10 ? `0${minutes}` : minutes
		} : ${seconds < 10 ? `0${seconds}` : seconds}`;
	}, 1000);
}

function stopTimer() {
	clearInterval(timerInterval);
	seconds = 0;
	minutes = 0;
}
