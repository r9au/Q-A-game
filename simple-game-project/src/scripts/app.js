let currentQuestion = null;
let score = 0;

const startGameButton = document.getElementById('start-game');
const submitAnswerButton = document.getElementById('submit-answer');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const scoreElement = document.getElementById('score');

const startGame = async () => {
    const questionData = await fetchQuestion();
    if (questionData) {
        currentQuestion = questionData;
        questionElement.textContent = questionData.question;
        answerInput.value = ''; // Clear previous input
    } else {
        questionElement.textContent = 'Failed to fetch a question. Try again!';
    }
};

const checkAnswer = () => {
    if (!currentQuestion) return;

    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentQuestion.correct_answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert(`Wrong! The correct answer was: ${currentQuestion.correct_answer}`);
    }

    scoreElement.textContent = `Score: ${score}`;
    startGame(); // Fetch the next question
};

startGameButton.addEventListener('click', startGame);
submitAnswerButton.addEventListener('click', checkAnswer);