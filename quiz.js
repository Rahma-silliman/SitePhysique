// quiz.js
document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const submitButton = document.getElementById('submit-button');
    const nextButton = document.getElementById('next-button');

    let currentQuestion = 0;

    const questions = [
        {
            question: "Quel physicien n'a pas été photographié au congrès de Solvay en 1927 ?",
            options: ["Pauli", "Einstein", "Schrödinger", "Rutherford"],
            correctAnswer: "Rutherford"
        },
        // Ajoutez d'autres questions de la même manière
    ];

    function buildQuiz() {
        // Construire la question actuelle
        const currentQuestionData = questions[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.classList.add('mb-3');

        const questionText = document.createElement('p');
        questionText.innerHTML = `<strong>${currentQuestion + 1}. ${currentQuestionData.question}</strong>`;
        questionElement.appendChild(questionText);

        currentQuestionData.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${currentQuestion}`;
            input.value = option;
            optionElement.appendChild(input);
            optionElement.innerHTML += ` ${option}`;
            questionElement.appendChild(optionElement);
        });

        quizContainer.innerHTML = ''; // Effacez le contenu précédent
        quizContainer.appendChild(questionElement);
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('input:checked');
        let correctAnswers = 0;

        answerContainers.forEach((answerContainer, index) => {
            const userAnswer = answerContainer.value;
            const correctAnswer = questions[index].correctAnswer;

            if (userAnswer === correctAnswer) {
                correctAnswers++;
            }
        });

        resultContainer.innerHTML = `Vous avez obtenu ${correctAnswers} réponses correctes sur ${questions.length}.`;
    }

    function showNextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            buildQuiz(); // Afficher la question suivante
        } else {
            submitButton.style.display = 'block';
            nextButton.style.display = 'none';
        }
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
    nextButton.addEventListener('click', showNextQuestion);
});
