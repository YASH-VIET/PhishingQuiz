let score = 0;

// START QUIZ
const startQuiz = document.getElementById("startQuiz");

startQuiz.addEventListener("click", function() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quiz").style.display = "block";
});


// Q1
const correctAnswer = document.getElementById("optionA");
const wrongAnswer = document.getElementById("optionB");

correctAnswer.addEventListener("click", function() {
    wrongAnswer.classList.remove("wrong");
    correctAnswer.classList.add("correct");

    score++;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("feedback").textContent = "✅ Correct!";

    showQuestion(2);
});

wrongAnswer.addEventListener("click", function() {
    correctAnswer.classList.remove("correct");
    wrongAnswer.classList.add("wrong");

    document.getElementById("feedback").textContent = "❌ Wrong!";
    showQuestion(2);
});


// Q2
const q2Wrong = document.getElementById("q2A");
const q2Correct = document.getElementById("q2B");

q2Correct.addEventListener("click", function() {
    q2Wrong.classList.remove("wrong");
    q2Correct.classList.add("correct");

    score++;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("feedback").textContent = "✅ Correct!";

    showQuestion(3);
});

q2Wrong.addEventListener("click", function() {
    q2Correct.classList.remove("correct");
    q2Wrong.classList.add("wrong");

    document.getElementById("feedback").textContent =
        "❌ Never share your password or OTP!";

    showQuestion(3);
});


// Q3
const q3Correct = document.getElementById("q3A");
const q3Wrong = document.getElementById("q3B");

q3Correct.addEventListener("click", function() {
    q3Wrong.classList.remove("wrong");
    q3Correct.classList.add("correct");

    score++;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("feedback").textContent = "✅ Correct!";

    showQuestion(4);
});

q3Wrong.addEventListener("click", function() {
    q3Correct.classList.remove("correct");
    q3Wrong.classList.add("wrong");

    document.getElementById("feedback").textContent =
        "❌ Not the best choice.";

    showQuestion(4);
});


// Q4
const q4Wrong = document.getElementById("q4A");
const q4Correct = document.getElementById("q4B");

q4Correct.addEventListener("click", function() {
    q4Wrong.classList.remove("wrong");
    q4Correct.classList.add("correct");

    score++;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("feedback").textContent =
        "✅ Correct! This URL is suspicious.";

    showQuestion(5);
});

q4Wrong.addEventListener("click", function() {
    q4Correct.classList.remove("correct");
    q4Wrong.classList.add("wrong");

    document.getElementById("feedback").textContent =
        "❌ Wrong! Check the real domain carefully.";

    showQuestion(5);
});


// Q5
const q5Wrong = document.getElementById("q5A");
const q5Correct = document.getElementById("q5B");

q5Correct.addEventListener("click", function() {
    q5Correct.classList.add("correct");

    score++;

    document.getElementById("score").textContent =
        "Score: " + score;

    q5Correct.disabled = true;
    q5Wrong.disabled = true;

    document.getElementById("finalScore").textContent =
        "Your Score: " + score + " / 5";

    let message = "";

    if (score === 5) {
        message = "🏆 Excellent! You are a phishing detective!";
    } else if (score >= 3) {
        message = "👍 Good job! Keep practicing.";
    } else {
        message = "💡 Keep learning and stay alert!";
    }

    document.getElementById("message").textContent = message;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
});

q5Wrong.addEventListener("click", function() {
    q5Wrong.classList.add("wrong");

    q5Correct.disabled = true;
    q5Wrong.disabled = true;

    document.getElementById("finalScore").textContent =
        "Your Score: " + score + " / 5";

    let message = "";

    if (score >= 3) {
        message = "👍 Good job! Keep practicing.";
    } else {
        message = "💡 Keep learning and stay alert!";
    }

    document.getElementById("message").textContent = message;

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
});


// RESTART
const restart = document.getElementById("restart");

restart.addEventListener("click", function() {
    location.reload();
});


// SHOW QUESTION + PROGRESS BAR
function showQuestion(number) {

    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";

    document.getElementById("question" + number).style.display = "block";

    // Question number
    document.getElementById("progress").textContent =
        "Question " + number + " / 5";

    // Progress bar
    let progress = (number / 5) * 100;

    document.getElementById("progressFill").style.width =
        progress + "%";

    // Clear previous feedback
    document.getElementById("feedback").textContent = "";
}
  
