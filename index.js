const questions = document.querySelectorAll(".question")
let openQuestion = questions[0]

questions.forEach(question => {
    question.addEventListener("click", e => {
        const parentElement = e.target.parentElement
        if (parentElement.classList.contains("question-btn")) {
            if (openQuestion && openQuestion != question) {
                openQuestion.classList.remove("show-question")
            }

            question.classList.toggle("show-question")
            openQuestion = question
        }
    })
})
