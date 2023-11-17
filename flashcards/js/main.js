// Flashcard
const flashcard = document.querySelector('.card-area');
const completeQuiz = document.querySelector('.complete-quiz');

// Botões
const correct = document.querySelector('.button-correct');
const incorrect = document.querySelector('.button-incorrect');

// Texto de pergunta e resposta
const question = document.querySelector('#card-question .card-question .card-question-text');
const answer = document.querySelector('#card-answer .card-question .card-question-text');

// Controle de apresentação de pergunta e resposta (transição)
const cardQuestion = document.querySelector('#card-question');
const cardAnswer = document.querySelector('#card-answer');

// Texto de finalização do quiz
const points = document.querySelector('.points');
const accuracy = document.querySelector('.accuracy');

// Teste de estrutura de questões a partir de estrutura JSON
const listquestions = '[{"question": "Who is Peter Parkar?", "answer": "Spider-man"}, {"question": "Who is Tio Ben?", "answer": "Uncle"}, {"question": "Who is Mary Jane?", "answer": "Girlfriend"}]';

// Lista para armazenar as questões
const questions = JSON.parse(listquestions);

// Índice para troca de perguntas
let index = 0;

// Contador de pontos
let score = 0;

// Inicialização
init();

// Eventos
flashcard.addEventListener('click', function() {
    if (cardQuestion.hidden === false) {
        showAnswer();
    } else {
        showQuestion();
    }
});

correct.addEventListener('click', function(event) {
    // Contar pontos
    score++;
    changeQuestion(event);
});

incorrect.addEventListener('click', function(event) {
    changeQuestion(event);
});

/**
 * Métodos
 */

// Inicializar 
function init () {
    question.textContent = questions[index].question;
    answer.textContent = questions[index].answer;
}

// Trocar de questão ao clicar em botão
function changeQuestion (event) {
    showQuestion();

    // Decréscimo de 1 ao tamanho da lista para não executar o método com índice não existente
    // Lógica utilizada é somar o índice após a apresentação
    if (index < questions.length - 1) {

        index++;
        init();
    } else {
        quizComplete();        
    }
    
    event.stopPropagation();
}

// Apresentar resposta
function showAnswer () {
    cardQuestion.hidden = true;
    cardAnswer.hidden = false;
}

// Apresentar questão
function showQuestion () {
    cardQuestion.hidden = false;
    cardAnswer.hidden = true;
}

// Finalização do quiz
function quizComplete () {
    flashcard.hidden = true;
    completeQuiz.hidden = false;

    points.textContent = score + ' out of ' + questions.length;
    accuracy.textContent = 'Accuracy ' + Math.floor((score * 100) / questions.length) + '%';
}