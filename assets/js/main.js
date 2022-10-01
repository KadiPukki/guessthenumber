let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('#yournumber').value);
    if (!guess) {
        document.querySelector('.msg').textContent = 'No number';
    } else if (guess === secretNumber) {
        document.querySelector('.msg').textContent = 'Correct number!';
        document.querySelector('body').style.backgroundColor = 'rgb(94, 244, 48)';
        document.querySelector('.guess').textContent = secretNumber;
        document.querySelector('#yournumber').style.color = 'rgb(245, 249, 249)';
        document.querySelector('#yournumber').style.backgroundColor = 'rgb(94, 244, 48)';
    
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.msg').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = `💯 Score: ${score}`;

        } else {
            document.querySelector('.msg').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }    
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.msg').textContent = 'Start guessing...';

    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    
    document.querySelector('.guess').textContent = '?';

    document.querySelector('#yournumber').value = '';

    document.querySelector('body').style.backgroundColor = rgb(15, 16, 16);
});
