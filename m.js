var showscore = document.getElementById('score'); 
var showkor = document.getElementById('kor');
var shownumber1 = document.getElementById('number1');
var showmark = document.getElementById('mark');
var shownumber2 = document.getElementById('number2');
var showanswer = document.getElementById('answer');
var showresult = document.getElementById('result');
var showplus = document.getElementById('plus');
showplus.checked = true;
showmark.innerHTML = "+";
var score = 0;
var kor = 0;
var number1 = 0;
var number2 = 0;
var total = 0;
showscore.innerHTML = score;
showkor.innerHTML = kor;

function random() {
    showkor.innerHTML = kor;
    number1 = Math.floor(Math.random() * 11);
    number2 = Math.floor(Math.random() * 11);
    shownumber1.innerHTML = number1;
    shownumber2.innerHTML = number2;
}

function start() {
    random();
    kor = 0;
    score = 0;
    showkor.innerHTML = kor;
    showscore.innerHTML = score;
    showanswer.value = '';
}

function btnanswer() {
    checkmark();
    if (total == showanswer.value) {
        showresult.innerHTML = 'ถูกต้อง';
        showresult.style.color = 'green';
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'ไม่ถูกต้อง';
        showresult.style.color = 'red';
        showanswer.value = '';
    }
    kor += 1;
    random();
}

function checkmark() {
    if (showmark.innerHTML == "+") {
        total = number1 + number2;
    } else if (showmark.innerHTML == "-") {
        total = number1 - number2;
    } else if (showmark.innerHTML == "×") {
        total = number1 * number2;
    } else if (showmark.innerHTML == "÷") {
        total = number1 / number2;
    }
}

function radiomark(value) {
    showmark.innerHTML = value;
}

random();
