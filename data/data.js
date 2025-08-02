// data.js

const questionsDataBase = [
  {
    question: "What color is the sky on a clear day?",
    answers: [
      { text: "Blue", correct: true },
      { text: "Green", correct: false },
      { text: "Red", correct: false },
      { text: "Yellow", correct: false },
    ],
  },
  {
    question: "Which animal barks?",
    answers: [
      { text: "Cat", correct: false },
      { text: "Dog", correct: true },
      { text: "Cow", correct: false },
      { text: "Sheep", correct: false },
    ],
  },
  {
    question: "How many days are in one week?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What do bees produce?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Honey", correct: true },
      { text: "Wool", correct: false },
      { text: "Bread", correct: false },
    ],
  },
  {
    question: "Which fruit is yellow and curved?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Banana", correct: true },
      { text: "Cherry", correct: false },
      { text: "Grape", correct: false },
    ],
  },
  {
    question: "Which shape has three sides?",
    answers: [
      { text: "Square", correct: false },
      { text: "Triangle", correct: true },
      { text: "Circle", correct: false },
      { text: "Rectangle", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ],
  },
  {
    question: "What do you call a baby cat?",
    answers: [
      { text: "Puppy", correct: false },
      { text: "Cub", correct: false },
      { text: "Kitten", correct: true },
      { text: "Calf", correct: false },
    ],
  },
  {
    question: "Which is a primary color?",
    answers: [
      { text: "Purple", correct: false },
      { text: "Green", correct: false },
      { text: "Red", correct: true },
      { text: "Orange", correct: false },
    ],
  },
  {
    question: "What gas do plants breathe in?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Which animal is known for its stripes?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Zebra", correct: true },
      { text: "Lion", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What do you use to write on paper?",
    answers: [
      { text: "Brush", correct: false },
      { text: "Pen", correct: true },
      { text: "Hammer", correct: false },
      { text: "Drill", correct: false },
    ],
  },
  {
    question: "What is the opposite of 'up'?",
    answers: [
      { text: "Left", correct: false },
      { text: "Down", correct: true },
      { text: "Right", correct: false },
      { text: "Forward", correct: false },
    ],
  },
  {
    question: "How many hours are in a day?",
    answers: [
      { text: "12", correct: false },
      { text: "24", correct: true },
      { text: "48", correct: false },
      { text: "36", correct: false },
    ],
  },
  {
    question: "Which animal miaows?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: true },
      { text: "Bird", correct: false },
      { text: "Fish", correct: false },
    ],
  },
  {
    question: "What is H2O more commonly called?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Sugar", correct: false },
      { text: "Alcohol", correct: false },
    ],
  },
  {
    question: "Which month comes after January?",
    answers: [
      { text: "March", correct: false },
      { text: "February", correct: true },
      { text: "April", correct: false },
      { text: "May", correct: false },
    ],
  },
  {
    question: "Which season is the coldest?",
    answers: [
      { text: "Spring", correct: false },
      { text: "Summer", correct: false },
      { text: "Winter", correct: true },
      { text: "Autumn", correct: false },
    ],
  },
  {
    question: "What tool do you use to hammer nails?",
    answers: [
      { text: "Screwdriver", correct: false },
      { text: "Wrench", correct: false },
      { text: "Hammer", correct: true },
      { text: "Saw", correct: false },
    ],
  },
  {
    question: "What color are bananas when ripe?",
    answers: [
      { text: "Green", correct: false },
      { text: "Yellow", correct: true },
      { text: "Red", correct: false },
      { text: "Blue", correct: false },
    ],
  },
  {
    question: "What is 5 x 5?",
    answers: [
      { text: "10", correct: false },
      { text: "25", correct: true },
      { text: "20", correct: false },
      { text: "30", correct: false },
    ],
  },
  {
    question: "Which bird can’t fly?",
    answers: [
      { text: "Parrot", correct: false },
      { text: "Penguin", correct: true },
      { text: "Eagle", correct: false },
      { text: "Sparrow", correct: false },
    ],
  },
  {
    question: "What do you call frozen water?",
    answers: [
      { text: "Steam", correct: false },
      { text: "Ice", correct: true },
      { text: "Vapor", correct: false },
      { text: "Liquid", correct: false },
    ],
  },
  {
    question: "Which fruit has seeds on the outside?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Strawberry", correct: true },
      { text: "Orange", correct: false },
      { text: "Banana", correct: false },
    ],
  },
  {
    question: "What do cows drink?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Water", correct: true },
      { text: "Juice", correct: false },
      { text: "Soda", correct: false },
    ],
  },
  {
    question: "Which shape is round?",
    answers: [
      { text: "Square", correct: false },
      { text: "Triangle", correct: false },
      { text: "Circle", correct: true },
      { text: "Rectangle", correct: false },
    ],
  },
  {
    question: "How many months are in a year?",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Seville", correct: false },
      { text: "Valencia", correct: false },
    ],
  },
  {
    question: "Which gas do humans breathe out?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Helium", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "What do you call a baby dog?",
    answers: [
      { text: "Kitten", correct: false },
      { text: "Puppy", correct: true },
      { text: "Calf", correct: false },
      { text: "Cub", correct: false },
    ],
  },
  {
    question: "Which planet is known for its rings?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Saturn", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "What is the opposite of 'hot'?",
    answers: [
      { text: "Warm", correct: false },
      { text: "Cold", correct: true },
      { text: "Dry", correct: false },
      { text: "Wet", correct: false },
    ],
  },
  {
    question: "What do you use to cut paper?",
    answers: [
      { text: "Knife", correct: false },
      { text: "Scissors", correct: true },
      { text: "Fork", correct: false },
      { text: "Spoon", correct: false },
    ],
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: [
      { text: "Iron", correct: false },
      { text: "Mercury", correct: true },
      { text: "Gold", correct: false },
      { text: "Aluminum", correct: false },
    ],
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Which shape has four equal sides?",
    answers: [
      { text: "Rectangle", correct: false },
      { text: "Square", correct: true },
      { text: "Circle", correct: false },
      { text: "Triangle", correct: false },
    ],
  },
  {
    question: "What do you call water when it boils?",
    answers: [
      { text: "Ice", correct: false },
      { text: "Steam", correct: true },
      { text: "Liquid", correct: false },
      { text: "Vapor", correct: false },
    ],
  },
  {
    question: "Which animal is known as man's best friend?",
    answers: [
      { text: "Cat", correct: false },
      { text: "Dog", correct: true },
      { text: "Horse", correct: false },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "How many continents are on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What do you call a group of fish?",
    answers: [
      { text: "Herd", correct: false },
      { text: "School", correct: true },
      { text: "Pack", correct: false },
      { text: "Swarm", correct: false },
    ],
  },
  {
    question: "Which fruit is red and often used in pies?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Strawberry", correct: false },
      { text: "Cherry", correct: true },
      { text: "Banana", correct: false },
    ],
  },
  {
    question: "What do you call the shape of the Earth?",
    answers: [
      { text: "Cube", correct: false },
      { text: "Sphere", correct: true },
      { text: "Pyramid", correct: false },
      { text: "Cylinder", correct: false },
    ],
  },
  {
    question: "Which month has 28 or 29 days?",
    answers: [
      { text: "February", correct: true },
      { text: "March", correct: false },
      { text: "April", correct: false },
      { text: "May", correct: false },
    ],
  },
  {
    question: "What tool do you use to measure time?",
    answers: [
      { text: "Scale", correct: false },
      { text: "Clock", correct: true },
      { text: "Thermometer", correct: false },
      { text: "Compass", correct: false },
    ],
  },
  {
    question: "Which animal has a long trunk?",
    answers: [
      { text: "Rhino", correct: false },
      { text: "Elephant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippo", correct: false },
    ],
  },
  {
    question: "What is 10 ÷ 2?",
    answers: [
      { text: "2", correct: false },
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
    ],
  },
  {
    question: "Which bird builds nests in trees?",
    answers: [
      { text: "Penguin", correct: false },
      { text: "Ostrich", correct: false },
      { text: "Eagle", correct: true },
      { text: "Kiwi", correct: false },
    ],
  },
  {
    question: "What do you call a group of wolves?",
    answers: [
      { text: "Pack", correct: true },
      { text: "Flock", correct: false },
      { text: "School", correct: false },
      { text: "Herd", correct: false },
    ],
  },
  {
    question: "Which planet has a day longer than its year?",
    answers: [
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippo", correct: false },
    ],
  },
  {
    question: "Which food comes from a cow?",
    answers: [
      { text: "Eggs", correct: false },
      { text: "Milk", correct: true },
      { text: "Honey", correct: false },
      { text: "Wool", correct: false },
    ],
  },
  {
    question: "How many sides does a pentagon have?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "What is 100 in Roman numerals?",
    answers: [
      { text: "L", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
      { text: "M", correct: false },
    ],
  },
];

const quizQuestions = [];
const mp = new Map();

const chooseRandomQuestion = function () {
  const n = questionsDataBase.length;

  let random = Math.floor(Math.random() * n);

  while (mp.has(random)) {
    random = Math.floor(Math.random() * n);
  }

  mp.set(random, 1);

  quizQuestions.push(questionsDataBase[random]);
};

const generateRandomQuestions = function () {
  mp.clear();
  quizQuestions.length = 0;

  for (let i = 0; i < 7; ++i)
    chooseRandomQuestion();
};

const elements = {
  gameContainer: null,
  btnStartQuiz: null,
  questionsContainer: null,
  resultContainer: null,
  answersContainer: null,
  restartBtn: null,
  loadBarContainer: null,
  loadBar: null,
  ratio: null,
  questionIndex: 0,
  score: 0,
  answerDisabled: false
};

export { quizQuestions, elements, generateRandomQuestions };