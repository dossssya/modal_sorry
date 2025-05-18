const noBtn = document.querySelector('.btn.no');
const yesBtn = document.querySelector('.btn.yes');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const thankYouMsg = document.querySelector('.thank-you-message');

function getRandomPosition() {
    const modalRect = modalContent.getBoundingClientRect();
    const maxX = modalRect.width - noBtn.offsetWidth;
    const maxY = modalRect.height - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    return { x, y };
}

function moveNoButton() {
    const pos = getRandomPosition();
    noBtn.style.left = `${pos.x}px`;
    noBtn.style.top = `${pos.y}px`;
}

// 🖱 Убегает при наведении мышкой
noBtn.addEventListener('mouseover', moveNoButton);

// 🤏 Убегает при тапе на телефоне
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
}, { passive: false });

// Показать кнопку "Да" через 5 секунд
setTimeout(() => {
    yesBtn.classList.add('show');
}, 5000);

// Нажатие "Да"
yesBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    thankYouMsg.style.display = 'flex';
});
