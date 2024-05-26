const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

const planets = [
    'mercury.png',
    'venus.png',
    'earth.png',
    'mars.png',
    'jupiter.png',
    'saturn.png',
    'uranus.png',
    'neptune.png'
];

function createPlanet() {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    planet.style.backgroundImage = `url(${randomPlanet})`;
    planet.style.left = `${Math.random() * (gameContainer.offsetWidth - 100)}px`;
    planet.style.top = '-100px';
    gameContainer.appendChild(planet);

    let horizontalSpeed = Math.random() * 4 - 2; // Случайная горизонтальная скорость от -2 до 2
    let verticalSpeed = 2 + Math.random() * 3; // Случайная вертикальная скорость от 2 до 5

    function move() {
        let left = parseFloat(planet.style.left) + horizontalSpeed;
        let top = parseFloat(planet.style.top) + verticalSpeed;

        if (left < -100 || left > gameContainer.offsetWidth || top > gameContainer.offsetHeight) {
            // Удалить планету, если она вышла за пределы игрового поля
            gameContainer.removeChild(planet);
        } else {
            planet.style.left = `${left}px`;
            planet.style.top = `${top}px`;
            requestAnimationFrame(move);
        }
    }

    planet.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        planet.classList.add('clicked');
        setTimeout(() => gameContainer.removeChild(planet), 300); // Даем время на выполнение анимации
    });

    requestAnimationFrame(move);
}

function startGame() {
    setInterval(createPlanet, 1000);
}

startGame();
