function calculateMarks() {
    const totalQuestions = document.getElementById('totalQuestions').value;
    const correctAnswers = document.getElementById('correctAnswers').value;

    if (totalQuestions === '' || correctAnswers === '') {
        alert('Please fill out both fields.');
        return;
    }

    const incorrectAnswers = totalQuestions - correctAnswers;
    const totalMarks = correctAnswers * 4;
    const negativeMarks = incorrectAnswers;
    const finalScore = totalMarks - negativeMarks;

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('negativeMarks').textContent = negativeMarks;
    document.getElementById('finalScore').textContent = finalScore;
}

