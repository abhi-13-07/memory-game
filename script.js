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

let score = 0;
let cardsChosen = [];
let cardsWon = [];
const DEFAULT_IMAGE = './images/questionmark.png';
const WHITE_IMAGE = './images/white.png';

function displayBoard() {
	images.sort(() => Math.random() - 0.5);
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

displayBoard();
