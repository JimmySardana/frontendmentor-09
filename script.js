const questions = document.getElementsByClassName("question");

Array.from(questions).forEach(question => {
    question.addEventListener("click", () => {
        Array.from(questions).forEach(otherQuestion => {
            if(otherQuestion === question) return;
            otherQuestion.classList.remove("clicked");
        });
        question.classList.toggle("clicked");
    })
});