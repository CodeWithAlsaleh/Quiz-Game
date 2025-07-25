'use strict'

import { quizQuestions } from './data/data.js';
import { elements } from './data/data.js';

class App {
  constructor() {
    this.initElements();
    this.attachEventListeners();
  }

  // Pre-game
  initElements() {
    // HTML Elements
    elements.gameContainer = document.querySelector('.game-container');
    elements.btnStartQuiz = document.querySelector('.btn-start-quiz');
    elements.questionsContainer = document.querySelector('.questions-container');
    elements.resultContainer = document.querySelector('.result-container');
    elements.ratio = 100 / quizQuestions.length;

    // Create load Bar elements
    elements.loadBarContainer = document.createElement('div');
    this.addClass(elements.loadBarContainer, 'load-bar-container');

    elements.loadBar = document.createElement('div');
    this.addClass(elements.loadBar, 'load-bar');

    elements.loadBarContainer.insertAdjacentElement('beforeend', elements.loadBar);
  }

  attachEventListeners() {
    // Add event listener to start btn
    elements.btnStartQuiz.addEventListener('click', () => {
      this.addClass(elements.gameContainer, 'hidden');
      this.removeClass(elements.questionsContainer, 'hidden');

      this.renderHTML();
    });
  }

  // Render UI
  renderHTML() {

    if (elements.questionIndex === quizQuestions.length) {
      this.renderResult();
      return;
    }

    const Question = quizQuestions[elements.questionIndex];

    let html = `
    <h2 class="question">${Question.question}</h2>

    <div class="status-info">
        <p class="questions-counter">Question ${elements.questionIndex + 1} of ${quizQuestions.length}</p>

        <p class="score">score: ${elements.score}</p>
    </div>

    <ul class="answers-container">
      <li class="answer answer0">${Question.answers[0].text}</li>
      <li class="answer answer1">${Question.answers[1].text}</li>
      <li class="answer answer2">${Question.answers[2].text}</li>
      <li class="answer answer3">${Question.answers[3].text}</li>
    </ul>
  `;

    // 1) Turn the string into DOM
    elements.questionsContainer.innerHTML = html;

    // 2) Then append your loader element into that container
    elements.questionsContainer.appendChild(elements.loadBarContainer);

    this.listenToAnswer();
  }

  renderResult() {
    this.addClass(elements.questionsContainer, 'hidden');
    this.removeClass(elements.resultContainer, 'hidden');

    elements.resultContainer.innerHTML = `
    <h1>Quiz Results</h1>

    <div class="result-description">
      <p class="result-score">
        You have scored ${elements.score} out of ${quizQuestions.length}
      </p>

      <p class="motivation-message">Good effort! Keep learning</p>
    </div>

    <button class="btn-restart-quiz">Resart Quiz</button>
  `;

    elements.restartBtn = document.querySelector('.btn-restart-quiz');

    elements.restartBtn.addEventListener('click', () => {
      // Reset values
      elements.score = 0, elements.questionIndex = 0;
      elements.loadBar.style.width = '0';

      this.addClass(elements.resultContainer, 'hidden');
      this.removeClass(elements.gameContainer, 'hidden');

      // Reset LoadBar Border
      this.changeLoadBarBorder('0');
    });
  }

  // Game Logic
  checkAnswer(ele) {
    const target = quizQuestions[elements.questionIndex].answers.find((answer => {
      return answer.text === ele;
    }));

    const correct = quizQuestions[elements.questionIndex].answers.find((answer => {
      return answer.correct === true;
    }));


    const targetAnswerInd = quizQuestions[elements.questionIndex].answers.indexOf(target);
    const correctAnswerInd = quizQuestions[elements.questionIndex].answers.indexOf(correct);

    const selectedAnswer = document.querySelector(`.answer${targetAnswerInd}`);
    const correctAnswer = document.querySelector(`.answer${correctAnswerInd}`);

    if (selectedAnswer === correctAnswer) {
      this.addClass(selectedAnswer, 'correct-answer');
      elements.score++;
    }
    else {
      this.addClass(selectedAnswer, 'wrong-answer');
      this.addClass(correctAnswer, 'correct-answer');
    }
  }

  increaseLoadBar() {
    elements.loadBar.style.width = (elements.questionIndex * elements.ratio) + '%';

    if (elements.questionIndex * elements.ratio === 100)
      this.changeLoadBarBorder('10px');
  }

  listenToAnswer() {
    elements.answersContainer = document.querySelector('.answers-container');

    elements.answersContainer.addEventListener('click', e => {
      this.checkAnswer(e.target.textContent);

      elements.questionIndex++;

      this.increaseLoadBar();

      setTimeout(() => {
        this.renderHTML();
      }, 1650); // it was 3000
    });
  }

  changeLoadBarBorder(value) {
    elements.loadBar.style['border-top-right-radius'] = value;
    elements.loadBar.style['border-bottom-right-radius'] = value;
  }

  addClass(obj, className) {
    obj.classList.add(className);
  }

  removeClass(obj, className) {
    obj.classList.remove(className);
  }
};


const app = new App();