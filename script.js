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
    const cups = document.querySelectorAll('.cup');
    const moves = [
        [1, 2],
        [2, 3],
        [1, 3],
        [2, 1],
        [3, 1],
        [3, 2]
    ];

    let i = 0;

    function moveCups() {
        if (i >= moves.length) {
            gameInProgress = false;
            return;
        }

        const [first, second] = moves[i];
        const firstCup = document.getElementById(`cup${first}`);
        const secondCup = document.getElementById(`cup${second}`);

        firstCup.classList.add('moving');
        secondCup.classList.add('moving');

        setTimeout(() => {
            firstCup.classList.remove('moving');
            secondCup.classList.remove('moving');
            [firstCup.style.order, secondCup.style.order] = [secondCup.style.order, firstCup.style.order];
            i++;
            setTimeout(moveCups, 500);
        }, 500);
    }

    moveCups();
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
