function submitQuiz() {
    const responses = document.querySelectorAll('input[type="radio"]:checked');
    let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    // Count the answers for each RIASEC type
    responses.forEach(response => {
        if (response.value) scores[response.value]++;
    });

    // Find the highest-scoring career type
    let highestInterest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // Call O*NET API
    fetch(https://api.onetcenter.org/v1/career_recommendations?interest=${highestInterest}, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        }
    })
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error("Error fetching careers:", error));
}

// Function to display results
function displayResults(careers) {
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Career Recommendations</h2>";

    careers.forEach(career => {
        resultsDiv.innerHTML += `
            <p><strong>${career.title}</strong></p>
            <p>${career.description}</p>
            <p><em>Average Salary: $${career.average_salary}</em></p>
            <hr>
        `;
    });
}