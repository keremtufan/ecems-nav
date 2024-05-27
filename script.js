let ballPosition;
let gameInProgress = false;

function startGame() {
    if (gameInProgress) return;
    gameInProgress = true;
    document.getElementById('result').classList.add('hidden');
    ballPosition = Math.floor(Math.random() * 3) + 1;
    shuffleCups();
}

function shuffleCups() {
    // Bardakları karıştırma animasyonu (basit bir şekilde yapılıyor)
    const cups = document.querySelectorAll('.cup');
    cups.forEach(cup => {
        cup.style.order = Math.floor(Math.random() * 3) + 1;
    });

    setTimeout(() => {
        gameInProgress = false;
    }, 2000); // 2 saniye sonra karıştırma biter
}

function checkCup(selectedCup) {
    if (gameInProgress) return;
    const result = document.getElementById('result');
    if (selectedCup === ballPosition) {
        result.textContent = 'Sınavda başarılar Ecem Prenses!';
    } else {
        result.textContent = 'Hoşçakal!';
    }
    result.classList.remove('hidden');
}
