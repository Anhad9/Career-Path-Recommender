document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", submitQuiz);
});

function submitQuiz() {
    let form = document.getElementById("careerQuiz");
    let questions = form.getElementsByClassName("question");
    let answers = {};

    for (let i = 0; i < questions.length; i++) {
        let questionText = questions[i].getElementsByTagName("p")[0].innerText;
        let selectedOption = questions[i].querySelector("input[type='radio']:checked");

        if (selectedOption) {
            answers[questionText] = selectedOption.value ? "Yes" : "No";
        } else {
            answers[questionText] = "No";
        }
    }

    let queryParameter = new URLSearchParams(answers).toString();
    const uri = `http://localhost:5000/ai/response?${queryParameter}`;

    fetch(uri)
        .then((response) => response.json())
        .then((data) => {
            console.log("API Response: ", data);
            document.getElementById("results").innerHTML = `<strong>Recommended Career:</strong> ${data.msg}`;
        })
        .catch((error) => {
            console.error(error.message);
            document.getElementById("results").innerHTML = `<strong>Error:</strong> ${error.message}`;
        });
}