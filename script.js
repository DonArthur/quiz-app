const quizData = [
    {
        question: '1 + 1 = ?',
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        answer: 'a'
    },
    {
        question: '2 + 1 = ?',
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        answer: 'b'
    },
    {
        question: '3 + 1 = ?',
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        answer: 'c'
    },
    {
        question: '4 + 1 = ?',
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        answer: 'd'
    },
    {
        question: '3 + 2 = ?',
        a: '2',
        b: '3',
        c: '4',
        d: '5',
        answer: 'd'
    }
]

const questionText = document.getElementById('question-text')
const quiz = document.getElementById('quiz-card')
const optionA = document.getElementById('a_text')
const optionB = document.getElementById('b_text')
const optionC = document.getElementById('c_text')
const optionD = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answerEls = document.querySelectorAll('.answer')
let currentQuiz = 0
let correctAnswers = 0

loadQuiz()

function  loadQuiz() {
    deselectAnswer()
    let currentQuestion = quizData[currentQuiz]
    questionText.innerHTML = currentQuestion.question
    optionA.innerHTML = currentQuestion.a
    optionB.innerHTML = currentQuestion.b
    optionC.innerHTML = currentQuestion.c
    optionD.innerHTML = currentQuestion.d
}

function getSelected() {
    let answer = undefined
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deselectAnswer() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })    
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].answer) {
            correctAnswers++
        }
        currentQuiz++            
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You scored ${ correctAnswers }/${quizData.length}!</h2>
                            <button onclick=location.reload()>Reload</button>`
        }
    }
})
