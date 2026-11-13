
// ================================
// 1. GET HTML ELEMENTS
// ================================

const home = document.getElementById("home");
const dashboard = document.getElementById("dashboard");
const exam = document.getElementById("exam");
const result = document.getElementById("result");

const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");


// ================================
// 2. SUBJECT ORDER
// ================================

const subjectOrder = [
  "Mathematics",
  "English Language",
  "Biology",
  "Computer Studies"
];


// ================================
// 3. EXAMINATION QUESTIONS
// ================================

const questions = {

  Mathematics: [
    { question: "What is 5 + 5?", options: ["8", "10", "12", "15"], answer: 1 },
    { question: "What is 12 × 2?", options: ["20", "22", "24", "26"], answer: 2 },
    { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "40"], answer: 1 },
    { question: "What is the square of 6?", options: ["12", "24", "30", "36"], answer: 3 },
    { question: "What is 15 - 7?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "What is 9 × 3?", options: ["18", "27", "30", "36"], answer: 1 },
    { question: "What is 50% of 200?", options: ["50", "75", "100", "150"], answer: 2 },
    { question: "How many sides has a hexagon?", options: ["4", "5", "6", "8"], answer: 2 },
    { question: "What is 7 + 8?", options: ["13", "14", "15", "16"], answer: 2 },
    { question: "What is 81 ÷ 9?", options: ["7", "8", "9", "10"], answer: 2 }
  ],

  "English Language": [
    { question: "What is the opposite of Hot?", options: ["Warm", "Cold", "Heat", "Fire"], answer: 1 },
    { question: "Which is a noun?", options: ["Run", "Beautiful", "Table", "Quickly"], answer: 2 },
    { question: "What is the plural of Child?", options: ["Childs", "Children", "Childes", "Childrens"], answer: 1 },
    { question: "Choose the correct spelling.", options: ["Recieve", "Receive", "Receeve", "Recive"], answer: 1 },
    { question: "Which is a verb?", options: ["Jump", "Chair", "Blue", "Happy"], answer: 0 },
    { question: "What is the opposite of Difficult?", options: ["Hard", "Easy", "Tough", "Strong"], answer: 1 },
    { question: "Which is a pronoun?", options: ["John", "He", "School", "Book"], answer: 1 },
    { question: "What is the past tense of Go?", options: ["Goed", "Going", "Went", "Gone"], answer: 2 },
    { question: "Which punctuation ends a question?", options: ["Full stop", "Comma", "Question mark", "Colon"], answer: 2 },
    { question: "What is a synonym of Happy?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: 2 }
  ],

  Biology: [
    { question: "What is the basic unit of life?", options: ["Tissue", "Cell", "Organ", "Bone"], answer: 1 },
    { question: "Which organ pumps blood?", options: ["Liver", "Lungs", "Heart", "Kidney"], answer: 2 },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2 },
    { question: "How many legs does an insect have?", options: ["4", "6", "8", "10"], answer: 1 },
    { question: "Which organ helps humans breathe?", options: ["Heart", "Lungs", "Stomach", "Brain"], answer: 1 },
    { question: "What is the green pigment in plants?", options: ["Chlorophyll", "Haemoglobin", "Melanin", "Keratin"], answer: 0 },
    { question: "Which is a mammal?", options: ["Fish", "Frog", "Dog", "Lizard"], answer: 2 },
    { question: "Where does digestion begin?", options: ["Stomach", "Mouth", "Liver", "Small intestine"], answer: 1 },
    { question: "Which part controls the human body?", options: ["Brain", "Heart", "Lungs", "Skin"], answer: 0 },
    { question: "What do bees produce?", options: ["Milk", "Honey", "Oil", "Water"], answer: 1 }
  ],

  "Computer Studies": [
    { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], answer: 0 },
    { question: "Which is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2 },
    { question: "Which is an output device?", options: ["Mouse", "Keyboard", "Scanner", "Monitor"], answer: 3 },
    { question: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Access Machine", "Random Active Machine"], answer: 1 },
    { question: "Which device stores data?", options: ["Hard drive", "Monitor", "Mouse", "Speaker"], answer: 0 },
    { question: "Which is an operating system?", options: ["Windows", "Google", "HTML", "Keyboard"], answer: 0 },
    { question: "What does WWW stand for?", options: ["World Wide Web", "World Web Window", "Wide World Work", "Web World Wide"], answer: 0 },
    { question: "Which is a web browser?", options: ["Excel", "Chrome", "Windows", "PowerPoint"], answer: 1 },
    { question: "What is the brain of a computer?", options: ["Monitor", "CPU", "Mouse", "Printer"], answer: 1 },
    { question: "Which language is used to style web pages?", options: ["HTML", "CSS", "SQL", "Python"], answer: 1 }
  ]

};


// ================================
// 4. EXAM VARIABLES
// ================================

let currentSubjectIndex = 0;
let currentSubject = "";
let currentQuestion = 0;

let studentAnswers = [];

let examResults = {};


// ================================
// 5. SHOW LOGIN
// ================================

function showLogin() {

  signupModal.style.display = "none";
  loginModal.style.display = "flex";

}


// ================================
// 6. SHOW SIGNUP
// ================================

function showSignup() {

  loginModal.style.display = "none";
  signupModal.style.display = "flex";

}


// ================================
// 7. CLOSE MODALS
// ================================

function closeModal() {

  loginModal.style.display = "none";
  signupModal.style.display = "none";

}


// ================================
// 8. SIGN UP
// ================================

document.getElementById("signupForm").addEventListener("submit", function(e) {

  e.preventDefault();

  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim().toLowerCase();
  let password = document.getElementById("signupPassword").value;

  let existingUser = JSON.parse(localStorage.getItem("user"));

  if (existingUser && existingUser.email === email) {

    alert("This email already has an account. Please sign in.");
    showLogin();
    return;

  }

  let user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully!");

  this.reset();

  showLogin();

});


// ================================
// 9. SIGN IN
// ================================

document.getElementById("loginForm").addEventListener("submit", function(e) {

  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim().toLowerCase();
  let password = document.getElementById("loginPassword").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {

    localStorage.setItem("loggedIn", "true");

    closeModal();

    this.reset();

    showDashboard();

  } else {

    alert("Invalid email or password!");

  }

});


// ================================
// 10. HIDE ALL PAGES
// ================================

function hideAllPages() {

  home.classList.add("hidden");
  dashboard.classList.add("hidden");
  exam.classList.add("hidden");
  result.classList.add("hidden");

}


// ================================
// 11. SHOW DASHBOARD
// ================================

function showDashboard() {

  let user = JSON.parse(localStorage.getItem("user"));

  if (localStorage.getItem("loggedIn") !== "true" || !user) {
    logout();
    return;
  }

  hideAllPages();

  dashboard.classList.remove("hidden");

  document.getElementById("welcomeMessage").innerText =
    "Welcome, " + user.name;

  displaySubjects();

}


// ================================
// 12. LOGOUT
// ================================

function logout() {

  localStorage.removeItem("loggedIn");

  currentSubjectIndex = 0;
  currentSubject = "";
  currentQuestion = 0;
  studentAnswers = [];
  examResults = {};

  closeModal();

  hideAllPages();

  home.classList.remove("hidden");

}


// ================================
// 13. DISPLAY SUBJECTS
// ================================

function displaySubjects() {

  let subjectList = document.getElementById("subjectList");

  subjectList.innerHTML = "";

  subjectOrder.forEach(function(subject, index) {

    subjectList.innerHTML += `
      <div class="subject-card">

        <span class="subject-number">${index + 1}</span>

        <h3>${subject}</h3>

        <p>10 Questions</p>

      </div>
    `;

  });

}


// ================================
// 14. START FULL EXAMINATION
// ================================

function startFullExam() {

  if (localStorage.getItem("loggedIn") !== "true") {

    alert("Please sign in first.");

    showLogin();

    return;

  }

  if (localStorage.getItem("completedExam")) {

    let restart = confirm(
      "Starting a new examination will replace your previous results. Continue?"
    );

    if (!restart) {
      return;
    }

  }

  currentSubjectIndex = 0;
  currentQuestion = 0;
  currentSubject = "";

  studentAnswers = [];
  examResults = {};

  localStorage.removeItem("examResults");
  localStorage.removeItem("completedExam");

  startSubject();

}


// ================================
// 15. START EACH SUBJECT
// ================================

function startSubject() {

  currentSubject = subjectOrder[currentSubjectIndex];

  currentQuestion = 0;

  studentAnswers = Array(questions[currentSubject].length).fill(null);

  hideAllPages();

  exam.classList.remove("hidden");

  document.getElementById("examTitle").innerText = currentSubject;

  document.getElementById("examSubjectLabel").innerText =
    "Subject " + (currentSubjectIndex + 1) + " of " + subjectOrder.length;

  displayQuestion();

}


// ================================
// 16. DISPLAY QUESTIONS
// ================================

function displayQuestion() {

  let question = questions[currentSubject][currentQuestion];

  document.getElementById("questionNumber").innerText =
    "Question " + (currentQuestion + 1) + " of 10";

  document.getElementById("subjectProgress").innerText =
    "SUBJECT " + (currentSubjectIndex + 1) + " OF 4";

  document.getElementById("questionText").innerText =
    question.question;

  let options = document.getElementById("options");

  options.innerHTML = "";

  question.options.forEach(function(option, index) {

    options.innerHTML += `
      <label class="option">

        <input
          type="radio"
          name="answer"
          value="${index}"
          ${studentAnswers[currentQuestion] === index ? "checked" : ""}
          onchange="selectAnswer(${index})"
        >

        <span>${option}</span>

      </label>
    `;

  });

  // Update selected option styling

  document.querySelectorAll(".option").forEach(function(option) {

    let radio = option.querySelector("input");

    if (radio.checked) {
      option.classList.add("selected");
    }

  });

  // Update progress bar

  let totalQuestions = subjectOrder.reduce(function(total, subject) {
    return total + questions[subject].length;
  }, 0);

  let completedQuestions = 0;

  for (let i = 0; i < currentSubjectIndex; i++) {

    completedQuestions += questions[subjectOrder[i]].length;

  }

  completedQuestions += currentQuestion + 1;

  let progress = (completedQuestions / totalQuestions) * 100;

  document.getElementById("progressBar").style.width =
    progress + "%";

  // Previous button

  document.getElementById("previousBtn").disabled =
    currentQuestion === 0 && currentSubjectIndex === 0;

  // Next button text

  let nextButton = document.getElementById("nextBtn");

  if (currentQuestion === 9 && currentSubjectIndex === 3) {

    nextButton.innerText = "Finish Examination";

  } else if (currentQuestion === 9) {

    nextButton.innerText = "Next Subject";

  } else {

    nextButton.innerText = "Next";

  }

}


// ================================
// 17. SELECT ANSWER
// ================================

function selectAnswer(answer) {

  studentAnswers[currentQuestion] = answer;

  document.querySelectorAll(".option").forEach(function(option) {

    option.classList.remove("selected");

  });

  let selectedOption = document.querySelector(
    'input[name="answer"][value="' + answer + '"]'
  );

  if (selectedOption) {

    selectedOption.closest(".option").classList.add("selected");

  }

}


// ================================
// 18. NEXT QUESTION
// ================================

function nextQuestion() {

  if (studentAnswers[currentQuestion] === null) {

    alert("Please select an answer before continuing.");

    return;

  }

  if (currentQuestion < 9) {

    currentQuestion++;

    displayQuestion();

  } else {

    finishSubject();

  }

}


// ================================
// 19. PREVIOUS QUESTION
// ================================

function previousQuestion() {

  if (currentQuestion > 0) {

    currentQuestion--;

    displayQuestion();

  }

}


// ================================
// 20. FINISH CURRENT SUBJECT
// ================================

function finishSubject() {

  let score = 0;

  for (let i = 0; i < questions[currentSubject].length; i++) {

    if (studentAnswers[i] === questions[currentSubject][i].answer) {

      score++;

    }

  }

  // Save this subject's score

  examResults[currentSubject] = score;

  localStorage.setItem(
    "examResults",
    JSON.stringify(examResults)
  );

  // Move to the next subject

  if (currentSubjectIndex < subjectOrder.length - 1) {

    currentSubjectIndex++;

    startSubject();

  } else {

    showFinalResults();

  }

}


// ================================
// 21. FINAL RESULTS DASHBOARD
// ================================

function showFinalResults() {

  let user = JSON.parse(localStorage.getItem("user"));

  hideAllPages();

  result.classList.remove("hidden");

  let totalScore = 0;

  let totalQuestions = 0;

  let subjectHTML = "";

  subjectOrder.forEach(function(subject) {

    let score = examResults[subject] || 0;

    let questionCount = questions[subject].length;

    let percentage = (score / questionCount) * 100;

    totalScore += score;

    totalQuestions += questionCount;

    subjectHTML += `
      <div class="subject-result">

        <div class="subject-result-top">

          <h3>${subject}</h3>

          <span class="subject-result-score">
            ${score} / ${questionCount}
          </span>

        </div>

        <div class="score-track">

          <div
            class="score-fill"
            style="width: ${percentage}%"
          ></div>

        </div>

        <p>Percentage: ${percentage}%</p>

      </div>
    `;

  });

  // Calculate overall percentage

  let overallPercentage = (totalScore / totalQuestions) * 100;

  document.getElementById("studentResult").innerText =
    "Student: " + user.name;

  document.getElementById("score").innerText =
    totalScore + " / " + totalQuestions;

  document.getElementById("percentage").innerText =
    overallPercentage + "%";

  document.getElementById("subjectResults").innerHTML =
    subjectHTML;

  // Save completed examination

  let completedExam = {

    studentName: user.name,

    subjectScores: examResults,

    totalScore: totalScore,

    totalQuestions: totalQuestions,

    percentage: overallPercentage,

    completed: true

  };

  localStorage.setItem(
    "completedExam",
    JSON.stringify(completedExam)
  );

}


// ================================
// 22. RESTORE PAGE AFTER REFRESH
// ================================

window.addEventListener("DOMContentLoaded", function() {

  if (localStorage.getItem("loggedIn") === "true") {

    let savedResults = JSON.parse(
      localStorage.getItem("completedExam")
    );

    if (savedResults && savedResults.completed) {

      examResults = savedResults.subjectScores;

      showSavedResults(savedResults);

    } else {

      showDashboard();

    }

  }

});


// ================================
// 23. SHOW SAVED RESULTS
// ================================

function showSavedResults(savedResults) {

  hideAllPages();

  result.classList.remove("hidden");

  document.getElementById("studentResult").innerText =
    "Student: " + savedResults.studentName;

  document.getElementById("score").innerText =
    savedResults.totalScore + " / " + savedResults.totalQuestions;

  document.getElementById("percentage").innerText =
    savedResults.percentage + "%";

  let subjectHTML = "";

  subjectOrder.forEach(function(subject) {

    let score = savedResults.subjectScores[subject] || 0;

    let questionCount = questions[subject].length;

    let percentage = (score / questionCount) * 100;

    subjectHTML += `
      <div class="subject-result">

        <div class="subject-result-top">

          <h3>${subject}</h3>

          <span class="subject-result-score">
            ${score} / ${questionCount}
          </span>

        </div>

        <div class="score-track">

          <div
            class="score-fill"
            style="width: ${percentage}%"
          ></div>

        </div>

        <p>Percentage: ${percentage}%</p>

      </div>
    `;

  });

  document.getElementById("subjectResults").innerHTML =
    subjectHTML;

}
