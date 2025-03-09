let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');
const answers = ["B", "C", "C", "B", "A"]; // Correct answers
let score = 0; // Initialize score

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
}

function submitAnswer(questionNumber) {
    const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (selectedAnswer) {
        const label = selectedAnswer.parentElement;
        // Clear previous feedback
        const labels = questions[questionNumber - 1].querySelectorAll('label');
        labels.forEach(lbl => {
            lbl.classList.remove('correct', 'incorrect');
        });

        // Check answer and apply feedback
        if (selectedAnswer.value === answers[questionNumber - 1]) {
            label.classList.add('correct');
        } else {
            label.classList.add('incorrect');
        }

        // Disable all radio buttons for this question
        const inputs = questions[questionNumber - 1].querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.disabled = true; // Disable the radio buttons
        });
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    }
}

function displayResults() {
    score = 0; // Reset score for final calculation
    questions.forEach((question, index) => {
        const selectedAnswer = question.querySelector(`input[type="radio"]:checked`);
        if (selectedAnswer) {
            const label = selectedAnswer.parentElement;
            // Clear previous feedback
            const labels = question.querySelectorAll('label');
            labels.forEach(lbl => {
                lbl.classList.remove('correct', 'incorrect');
            });

            // Check answer and apply feedback
            if (selectedAnswer.value === answers[index]) {
                score++;
                label.classList.add('correct');
            } else {
                label.classList.add('incorrect');
            }
        }
    });
    document.getElementById('result-message').innerText = `You got ${score} out of ${questions.length} questions right!`;
    document.getElementById('try-again').style.display = 'block';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0; // Reset score
    showQuestion(currentQuestionIndex);
    document.getElementById('try-again').style.display = 'none';
    document.getElementById('result-message').innerText = ''; 

    // Reset all answers
    questions.forEach(question => {
        const labels = question.querySelectorAll('label');
        labels.forEach(lbl => {
            lbl.classList.remove('correct', 'incorrect'); 
        });
        const inputs = question.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => {
            input.checked = false; 
            input.disabled = false;
        });
    });
}


showQuestion(currentQuestionIndex);