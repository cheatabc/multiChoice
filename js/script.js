const data = [{
        "type": "checkbox",
        "question": "Question 1:",
        "alias": "q1",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "D"]
    },
    {
        "type": "checkbox",
        "question": "Question 2: ",
        "alias": "q2",
        "options": [{
            "letter": "A",
            "value": "Option 1: A?",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 3: ",
        "alias": "q2",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 4: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 5: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 6: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 7: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 8: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 9: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    },
    {
        "type": "checkbox",
        "question": "Question 10: ",
        "options": [{
            "letter": "A",
            "value": "Option 1",
            "selected": false
        }, {
            "letter": "B",
            "value": "Option 2",
            "selected": false
        }, {
            "letter": "C",
            "value": "Option 3",
            "selected": false
        }, {
            "letter": "D",
            "value": "Option 4",
            "selected": false
        }],
        "answer": ["A", "C"]
    }
];
const answerLocal = [
    { "q0": data[0].answer },
    { "q1": data[1].answer },
    { "q2": data[2].answer },
    { "q3": data[3].answer },
    { "q4": data[4].answer },
    { "q5": data[5].answer },
    { "q6": data[6].answer },
    { "q7": data[7].answer },
    { "q8": data[8].answer },
    { "q9": data[9].answer }
];
const myJSON = JSON.stringify(answerLocal);
localStorage.setItem("anwserList", myJSON);
let text = "";
const checkboxes = document.getElementsByName('optionQ[]');
const radioBtn = document.getElementById("question1");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const submitBtn = document.getElementById("submit");
const question = document.getElementById('question');
const quizContainer = document.getElementById('quiz-container');
const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const ckb1 = document.getElementById('ckb1');
const ckb2 = document.getElementById('ckb2');
const ckb3 = document.getElementById('ckb3');
const ckb4 = document.getElementById('ckb4');
const que0 = document.getElementById('que0');
const que1 = document.getElementById('que1');
const que2 = document.getElementById('que2');
const que3 = document.getElementById('que3');
const que4 = document.getElementById('que4');
const que5 = document.getElementById('que5');
const que6 = document.getElementById('que6');
const que7 = document.getElementById('que7');
const que8 = document.getElementById('que8');
const que9 = document.getElementById('que9');
const ques = document.getElementsByClassName('ques');
localStorage.setItem("currentIndex", 0);
localStorage.setItem("totalScore", 0);
const userSelect = JSON.parse(localStorage.getItem("userSelect"));
const currIndex = localStorage.getItem("currentIndex");

let tempAnswer = [
    { "q0": [] },
    { "q1": [] },
    { "q2": [] },
    { "q3": [] },
    { "q4": [] },
    { "q5": [] },
    { "q6": [] },
    { "q7": [] },
    { "q8": [] },
    { "q9": [] }
];
var score = 0;
var i = 0;

function refreshWindow() {
    window.onload = () => {
        let userSelect = JSON.parse(localStorage.getItem("userSelect"));
        let currIndex = localStorage.getItem("currentIndex");
        question.innerHTML = 'Q.' + (i + 1) + ' ' + data[i].question;
        ckb1.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[0].selected}" data-letter="${data[i].options[0].letter}" onchange="onChecked(this)" />`;
        ckb2.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[1].selected}" data-letter="${data[i].options[1].letter}" onchange="onChecked(this)" />`;
        ckb3.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[2].selected}" data-letter="${data[i].options[2].letter}" onchange="onChecked(this)" />`;
        ckb4.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[3].selected}" data-letter="${data[i].options[3].letter}" onchange="onChecked(this)" />`;

        option0.innerHTML = data[i].options[0].value;
        option1.innerHTML = data[i].options[1].value;
        option2.innerHTML = data[i].options[2].value;
        option3.innerHTML = data[i].options[3].value;
        if (userSelect != null) {
            for (let index = 0; index < userSelect[currIndex]["q" + i].length; index++) {
                for (let idx = 0; idx < checkboxes.length; idx++) {
                    if (checkboxes[idx].dataset.letter == userSelect[currIndex]["q" + i][index]) {
                        checkboxes[idx].checked = true;
                    }
                }
            }
        }
    };
}

refreshWindow();

displayQuestion();
disabledPrev();
disabledNext();

// Clock count-down
const date = new Date();
if (localStorage.getItem("count_timer") === null || localStorage.getItem("count_timer") <= 0) {
    date.setSeconds(540 + date.getSeconds());
    var count_timerDate = date.getTime();
    localStorage.setItem("count_timer", count_timerDate);
}

const second = localStorage.getItem("count_timer");
date.setTime(second);
var count_timer = date.getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = count_timer - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (seconds < 10) {
        document.getElementById("startTime").innerHTML = minutes + ":" + "0" + seconds;
    } else {
        document.getElementById("startTime").innerHTML = minutes + ":" + seconds;
    }
    if (distance < 0) {
        document.getElementById("startTime").innerHTML = "Time out!!!";
        submit();
    }
}, 500);

function displayQuestion() {
    question.innerHTML = 'Q.' + (i + 1) + ' ' + data[i].question;
    ckb1.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[0].selected}" data-letter="${data[i].options[0].letter}" onchange="onChecked(this)" />`;
    ckb2.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[1].selected}" data-letter="${data[i].options[1].letter}" onchange="onChecked(this)" />`;
    ckb3.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[2].selected}" data-letter="${data[i].options[2].letter}" onchange="onChecked(this)" />`;
    ckb4.innerHTML = `<input type="checkbox" name="optionQ[]" data-selected="${data[i].options[3].selected}" data-letter="${data[i].options[3].letter}" onchange="onChecked(this)" />`;

    option0.innerHTML = data[i].options[0].value;
    option1.innerHTML = data[i].options[1].value;
    option2.innerHTML = data[i].options[2].value;
    option3.innerHTML = data[i].options[3].value;
}
// console.log(que1.dataset.index);
for (let index = 0; index < ques.length; index++) {
    ques[index].addEventListener('click', function(e) {
        e.preventDefault();
        i = index;
        displayQuestion();
        let currIndex1 = localStorage.getItem("currentIndex");
        if (userSelect != null) {
            for (let index = 0; index < userSelect[currIndex1]["q" + i].length; index++) {
                for (let idx = 0; idx < checkboxes.length; idx++) {
                    if (checkboxes[idx].dataset.letter == userSelect[currIndex1]["q" + i][index]) {
                        checkboxes[idx].checked = true;
                    }
                }
            }
        }
    })
}

function disabledPrev() {
    if (i == 0) {
        previousBtn.disabled = true;
    } else {
        previousBtn.disabled = false;
    }
}

function displaySubmit() {
    submitBtn.style.visibility = "visible";
}

function hideSubmit() {
    submitBtn.style.visibility = "hidden";
}

function disabledNext() {
    if (i == data.length - 1) {
        nextBtn.disabled = true;
        displaySubmit()
    } else {
        nextBtn.disabled = false;
        hideSubmit();
    }
}

previousBtn.addEventListener("click", function() {
    if (i > 0) {
        i = i - 1;
        localStorage.setItem("currentIndex", i);
        let currIndex1 = localStorage.getItem("currentIndex");
        displayQuestion();
        if (userSelect != null) {
            for (let index = 0; index < userSelect[currIndex1]["q" + i].length; index++) {
                for (let idx = 0; idx < checkboxes.length; idx++) {
                    if (checkboxes[idx].dataset.letter == userSelect[currIndex1]["q" + i][index]) {
                        checkboxes[idx].checked = true;
                    }
                }
            }
        }

    }
    disabledPrev();
    disabledNext();

});

nextBtn.addEventListener("click", function() {
    if (i < data.length - 1) {
        i = i + 1;
        localStorage.setItem("currentIndex", i);
        let currIndex1 = localStorage.getItem("currentIndex");
        displayQuestion();

        if (userSelect != null) {
            for (let index = 0; index < userSelect[currIndex1]["q" + i].length; index++) {
                for (let idx = 0; idx < checkboxes.length; idx++) {
                    if (checkboxes[idx].dataset.letter == userSelect[currIndex1]["q" + i][index]) {
                        checkboxes[idx].checked = true;
                    }
                }
            }
        }
    }
    disabledPrev();
    disabledNext();

});

submitBtn.addEventListener("click", function() {
    alert(localStorage.getItem("totalScore") + "/ 10");
    localStorage.removeItem("userSelect");
    localStorage.setItem("totalScore", 0);
    localStorage.setItem("count_timer", 0);
    location.reload();
});

function onChecked(params) {
    let currentIndex = localStorage.getItem("currentIndex");
    if (params.checked) {
        params.dataset.selected = true;
        if (Object.values(checkboxes).some(val => { return val.dataset.selected; })) {
            document.getElementById("question" + (currentIndex)).checked = true;
        }
        tempAnswer[currentIndex]["q" + currentIndex].push(params.dataset.letter);
        tempAnswer[currentIndex]["q" + currentIndex].sort();
    } else {
        params.dataset.selected = false;
        if (Object.values(checkboxes).every(val => { return val.dataset.selected == "false"; })) {
            document.getElementById("question" + (currentIndex)).checked = false;
        }
        tempAnswer[currentIndex]["q" + currentIndex].pop(params.dataset.letter);
        tempAnswer[currentIndex]["q" + currentIndex].sort();
    }
    localStorage.setItem("userSelect", JSON.stringify(tempAnswer));
    if (compareArray(data[currentIndex].answer, tempAnswer[currentIndex]["q" + currentIndex])) {
        score++;
    }
    localStorage.setItem("totalScore", score);
}

function compareArray(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i])
                return false;
        }
        return true;
    } else {
        return false;
    }
}
