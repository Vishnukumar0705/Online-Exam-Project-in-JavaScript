var Questions = [
  {
    number: "Question 1.",
    question: "What does the abbreviation HTML stand for?",
    option1: "HyperText Markup Language",
    option2: "HighText Markup Language",
    option3: "HyperText Markdown Language",
    option4: "None of the above",
    Answer: "one",
    Select: "",
  },
  {
    number: "Question 2.",
    question: " How to create an ordered list in HTML?",
    option1: "ul Tag",
    option2: "ol Tag",
    option3: "href Tag",
    option4: "b Tag",
    Answer: "two",
    Select: "",
  },
  {
    number: "Question 3.",
    question: "What is the smallest header in HTML by default?",
    option1: "h2",
    option2: "h7",
    option3: "h4",
    option4: "h6",
    Answer: "four",
    Select: "",
  },
  {
    number: "Question 4.",
    question: "HTML files are saved by default with the extension?",
    option1: ".htm",
    option2: ".ht",
    option3: ".html",
    option4: "None of the Above",
    Answer: "three",
    Select: "",
  },
  {
    number: "Question 5.",
    question: "Which of the following is correct about HTML?",
    option1: "HTML uses User Defined Tags",
    option2: "Html uses tags defined within the Language",
    option3: "Both A and B",
    option4: "None of the Above",
    Answer: "two",
    Select: "",
  },
];

A = 0;
Online(A);
function Online(A) {
  document.getElementById("number").innerHTML = Questions[A].number;
  document.getElementById("questions").innerHTML = Questions[A].question;
  document.getElementById("textone").innerHTML = Questions[A].option1;
  document.getElementById("texttwo").innerHTML = Questions[A].option2;
  document.getElementById("textthree").innerHTML = Questions[A].option3;
  document.getElementById("textfour").innerHTML = Questions[A].option4;
  document.getElementById("one").value = Questions[A].option1;
  document.getElementById("two").value = Questions[A].option2;
  document.getElementById("three").value = Questions[A].option3;
  document.getElementById("four").value = Questions[A].option4;
}
function Option(inputId) {
  Questions[A].Select = inputId;
  console.log(Questions[A]);
}
function nextbtn() {
  var radio = document.getElementById(Questions[A].Select);
  radio.checked = false;
  if (A != 4) {
    A += 1;
  }
  Next();
  Online(A);
}
function Next() {
  if (A != 0) {
    document.getElementById("previous").disabled = false;
  }
  if (A == 4) {
    document.getElementById("next").disabled = true;
    document.getElementById("submit").disabled = false;
  }
}
function prebtn() {
  if (A != 0) {
    A -= 1;
    var radio = document.getElementById(Questions[A].Select);
    radio.checked = true;
  }
  Previous();
  Online(A);
}
function Previous() {
  if (A == 0) {
    document.getElementById("previous").disabled = true;
  }
  if (A <= 3) {
    document.getElementById("next").disabled = false;
  }
}
function submitbtn() {
    vvv();
}
var I = 0;
var increment = 0;
function vvv() {
  while(I<=4){
  if (Questions[I].Select == Questions[I].Answer) {
    increment++;
  }
  I++;
}
    localStorage.setItem("Your Score",increment) 
}
