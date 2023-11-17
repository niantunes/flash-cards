// Flashcard
const flashcard = document.querySelector('.card-area');
// Botões
const correct = document.querySelector('.button-correct');
const incorrect = document.querySelector('.button-incorrect');
// Questão
const question = document.querySelector('.card-question-text');

// Teste de estrutura de questões a partir de estrutura JSON
const listquestions = '[{"question": "Who is Peter Parkar"}, {"question": "Who is Tio Ben"}, {"question": "Who is Mary Jane"}]';

// Lista para armazenar as questões
const questions = JSON.parse(listquestions);
// Índice para troca de perguntas
let index = 0;

init();

function init () {
    question.textContent = questions[index].question;
}

flashcard.addEventListener('click', function() {
    console.log('flashcard');
});

correct.addEventListener('click', function(event) {
    if (index < questions.length) {
        index++;
        question.textContent = questions[index].question;
    }
    
    event.stopPropagation();
});

incorrect.addEventListener('click', function(event) {
    console.log('incorrect');
    event.stopPropagation();
});