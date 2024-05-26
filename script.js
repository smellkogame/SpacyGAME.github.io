const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Массив с изображениями планет
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

// Функция создания планеты
function createPlanet() {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    planet.style.backgroundImage = `url(${randomPlanet})`;
    planet.style.left = `${Math.random() * (gameContainer.offsetWidth - 100)}px`;
    planet.style.top = '-100px';
    gameContainer.appendChild(planet);

    let fallingSpeed = 2 + Math.random() * 3;

    // Функция для падения планеты
    function fall() {
        let top = parseFloat(planet.style.top);
        if (top < gameContainer.offsetHeight) {
            planet.style.top = `${top + fallingSpeed}px`;
            requestAnimationFrame(fall);
        } else {
            gameContainer.removeChild(planet);
        }
    }

    // Обработка клика на планету
    planet.addEventListener('click', () => {
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        planet.classList.add('clicked');
        setTimeout(() => gameContainer.removeChild(planet), 300); // Время на выполнение анимации
    });

    requestAnimationFrame(fall);
}

// Функция для запуска игры
function startGame() {
    setInterval(createPlanet, 1000); // Создание новой планеты каждую секунду
}

startGame(); // Запуск игры
