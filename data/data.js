// data.js

const questionsDataBase = [
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
    question: "What is the capital of Spain?",
    answers: [
      { text: "Barcelona", correct: false },
      { text: "Madrid", correct: true },
      { text: "Seville", correct: false },
      { text: "Valencia", correct: false },
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
    question: "Which bird builds nests in trees?",
    answers: [
      { text: "Penguin", correct: false },
      { text: "Ostrich", correct: false },
      { text: "Eagle", correct: true },
      { text: "Kiwi", correct: false },
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
    question: "Which season is the coldest?",
    answers: [
      { text: "Spring", correct: false },
      { text: "Summer", correct: false },
      { text: "Winter", correct: true },
      { text: "Autumn", correct: false },
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
    question: "What do you call frozen water?",
    answers: [
      { text: "Steam", correct: false },
      { text: "Ice", correct: true },
      { text: "Vapor", correct: false },
      { text: "Liquid", correct: false },
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
    question: "Which fruit is yellow and curved?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Banana", correct: true },
      { text: "Cherry", correct: false },
      { text: "Grape", correct: false },
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
    question: "What is 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "6", correct: false },
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
    question: "What is the opposite of 'up'?",
    answers: [
      { text: "Left", correct: false },
      { text: "Down", correct: true },
      { text: "Right", correct: false },
      { text: "Forward", correct: false },
    ],
  },
  {
    question: "Which gas do plants breathe in?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Hydrogen", correct: false },
      { text: "Nitrogen", correct: false },
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
    question: "Which animal is known for its stripes?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Zebra", correct: true },
      { text: "Lion", correct: false },
      { text: "Giraffe", correct: false },
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
    question: "How many hours are in a day?",
    answers: [
      { text: "12", correct: false },
      { text: "24", correct: true },
      { text: "48", correct: false },
      { text: "36", correct: false },
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
    question: "What is 10 ÷ 2?",
    answers: [
      { text: "2", correct: false },
      { text: "5", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
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
    question: "What tool do you use to measure time?",
    answers: [
      { text: "Scale", correct: false },
      { text: "Clock", correct: true },
      { text: "Thermometer", correct: false },
      { text: "Compass", correct: false },
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
    question: "What is H2O more commonly called?",
    answers: [
      { text: "Salt", correct: false },
      { text: "Water", correct: true },
      { text: "Sugar", correct: false },
      { text: "Alcohol", correct: false },
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
    question: "Which fruit is red and often used in pies?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Strawberry", correct: false },
      { text: "Cherry", correct: true },
      { text: "Banana", correct: false },
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
    question: "What do cows drink?",
    answers: [
      { text: "Milk", correct: false },
      { text: "Water", correct: true },
      { text: "Juice", correct: false },
      { text: "Soda", correct: false },
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
    question: "Which animal miaows?",
    answers: [
      { text: "Dog", correct: false },
      { text: "Cat", correct: true },
      { text: "Bird", correct: false },
      { text: "Fish", correct: false },
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
    question: "Which fruit has seeds on the outside?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Strawberry", correct: true },
      { text: "Orange", correct: false },
      { text: "Banana", correct: false },
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
    question: "What do you use to cut paper?",
    answers: [
      { text: "Knife", correct: false },
      { text: "Scissors", correct: true },
      { text: "Fork", correct: false },
      { text: "Spoon", correct: false },
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
    question: "Which shape has four equal sides?",
    answers: [
      { text: "Rectangle", correct: false },
      { text: "Square", correct: true },
      { text: "Circle", correct: false },
      { text: "Triangle", correct: false },
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
    question: "How many sides does a pentagon have?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
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
    question: "Which historical civilization built the Machu Picchu?",
    answers: [
      { text: "Maya", correct: false },
      { text: "Aztec", correct: false },
      { text: "Inca", correct: true },
      { text: "Olmec", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Which is the smallest country in the world by area?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Which organ in the human body filters blood?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Kidney", correct: true },
      { text: "Heart", correct: false },
      { text: "Lung", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Gd", correct: false },
      { text: "Ga", correct: false },
    ],
  },
  {
    question: "How many bones are in the adult human body?",
    answers: [
      { text: "206", correct: true },
      { text: "201", correct: false },
      { text: "210", correct: false },
      { text: "196", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "Which gas is used to fill balloons to make them float?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Hydrogen", correct: false },
      { text: "Helium", correct: true },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "90", correct: false },
      { text: "100", correct: true },
      { text: "110", correct: false },
      { text: "120", correct: false },
    ],
  },
  {
    question: "Which country is famous for the Great Pyramid of Giza?",
    answers: [
      { text: "Egypt", correct: true },
      { text: "Mexico", correct: false },
      { text: "Peru", correct: false },
      { text: "India", correct: false },
    ],
  },
  {
    question: "Which is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Fibula", correct: false },
      { text: "Humerus", correct: false },
    ],
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "French", correct: false },
      { text: "English", correct: false },
    ],
  },
  {
    question: "How many colors are there in a rainbow?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "What is the term for animals that eat only plants?",
    answers: [
      { text: "Carnivores", correct: false },
      { text: "Herbivores", correct: true },
      { text: "Omnivores", correct: false },
      { text: "Insectivores", correct: false },
    ],
  },
  {
    question: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    answers: [
      { text: "Guitar", correct: false },
      { text: "Piano", correct: true },
      { text: "Violin", correct: false },
      { text: "Drums", correct: false },
    ],
  },
  {
    question: "How many chambers does the human heart have?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is the largest planet visible from Earth without a telescope?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Silver", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "What does DNA stand for?",
    answers: [
      { text: "Deoxyribonucleic Acid", correct: true },
      { text: "Dinucleic Acid", correct: false },
      { text: "Deoxyribose Acid", correct: false },
      { text: "Dioxyribonucleic Acid", correct: false },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Diamond", correct: true },
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Quartz", correct: false },
    ],
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "O negative", correct: true },
      { text: "AB positive", correct: false },
      { text: "B negative", correct: false },
    ],
  },
  {
    question: "What is the process by which plants make food?",
    answers: [
      { text: "Respiration", correct: false },
      { text: "Photosynthesis", correct: true },
      { text: "Transpiration", correct: false },
      { text: "Digestion", correct: false },
    ],
  },
  {
    question: "Which gas makes up most of the Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },
  {
    question: "What is the smallest unit of life?",
    answers: [
      { text: "Atom", correct: false },
      { text: "Molecule", correct: false },
      { text: "Cell", correct: true },
      { text: "Organ", correct: false },
    ],
  },
  {
    question: "Who is the author of 'Harry Potter'?",
    answers: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "Stephen King", correct: false },
      { text: "George R.R. Martin", correct: false },
    ],
  },
  {
    question: "Which ocean is the largest on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Which continent is known as the Dark Continent?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "Europe", correct: false },
      { text: "Australia", correct: false },
    ],
  },
  {
    question: "What type of animal is a Komodo dragon?",
    answers: [
      { text: "Mammal", correct: false },
      { text: "Reptile", correct: true },
      { text: "Bird", correct: false },
      { text: "Amphibian", correct: false },
    ],
  },
  {
    question: "What is the freezing point of water in Fahrenheit?",
    answers: [
      { text: "0", correct: false },
      { text: "32", correct: true },
      { text: "100", correct: false },
      { text: "212", correct: false },
    ],
  },
  {
    question: "Which is the largest internal organ in the human body?",
    answers: [
      { text: "Kidney", correct: false },
      { text: "Liver", correct: true },
      { text: "Lung", correct: false },
      { text: "Heart", correct: false },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      { text: "K2", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false },
    ],
  },
  {
    question: "Which city is known as the Big Apple?",
    answers: [
      { text: "Los Angeles", correct: false },
      { text: "New York City", correct: true },
      { text: "Chicago", correct: false },
      { text: "San Francisco", correct: false },
    ],
  },
  {
    question: "What gas do plants release during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Who invented the telephone?",
    answers: [
      { text: "Nikola Tesla", correct: false },
      { text: "Alexander Graham Bell", correct: true },
      { text: "Thomas Edison", correct: false },
      { text: "Guglielmo Marconi", correct: false },
    ],
  },
  {
    question: "Which instrument is known as the King of Instruments?",
    answers: [
      { text: "Piano", correct: false },
      { text: "Organ", correct: true },
      { text: "Violin", correct: false },
      { text: "Guitar", correct: false },
    ],
  },
  {
    question: "What is the main gas responsible for the greenhouse effect?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Methane", correct: false },
    ],
  },
  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "United States", correct: false },
      { text: "Russia", correct: true },
      { text: "Canada", correct: false },
      { text: "China", correct: false },
    ],
  },
  {
    question: "Which famous scientist is known for the laws of motion?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Marie Curie", correct: false },
    ],
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: [
      { text: "NaCl", correct: true },
      { text: "KCl", correct: false },
      { text: "NaOH", correct: false },
      { text: "H2SO4", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Pluto", correct: false },
    ],
  },
  {
    question: "Which vitamin is produced when the skin is exposed to sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin B12", correct: false },
    ],
  },
  {
    question: "What is the study of plants called?",
    answers: [
      { text: "Zoology", correct: false },
      { text: "Botany", correct: true },
      { text: "Geology", correct: false },
      { text: "Ecology", correct: false },
    ],
  },
  {
    question: "Which scientist proposed the three laws of planetary motion?",
    answers: [
      { text: "Galileo Galilei", correct: false },
      { text: "Johannes Kepler", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: false },
    ],
  },
  {
    question: "Which organ in the human body produces insulin?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Pancreas", correct: true },
      { text: "Kidney", correct: false },
      { text: "Spleen", correct: false },
    ],
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Antarctic Desert", correct: true },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
    ],
  },
  {
    question: "Which animal is the fastest land mammal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Gazelle", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    answers: [
      { text: "Rice", correct: false },
      { text: "Soybeans", correct: true },
      { text: "Seaweed", correct: false },
      { text: "Fish", correct: false },
    ],
  },
  {
    question: "Which element is known as the building block of life?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: false },
      { text: "Nitrogen", correct: false },
    ],
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    answers: [
      { text: "Michelangelo", correct: true },
      { text: "Raphael", correct: false },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Donatello", correct: false },
    ],
  },
  {
    question: "Which instrument is used to measure earthquakes?",
    answers: [
      { text: "Barometer", correct: false },
      { text: "Seismograph", correct: true },
      { text: "Thermometer", correct: false },
      { text: "Anemometer", correct: false },
    ],
  },
  {
    question: "What is the main language spoken in Egypt?",
    answers: [
      { text: "Arabic", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
      { text: "Spanish", correct: false },
    ],
  },
  {
    question: "Which city hosted the 2016 Summer Olympics?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "London", correct: false },
      { text: "Rio de Janeiro", correct: true },
      { text: "Tokyo", correct: false },
    ],
  },
  {
    question: "What is the tallest building in the world?",
    answers: [
      { text: "Shanghai Tower", correct: false },
      { text: "Burj Khalifa", correct: true },
      { text: "One World Trade Center", correct: false },
      { text: "Taipei 101", correct: false },
    ],
  },
  {
    question: "Which country has the most natural lakes?",
    answers: [
      { text: "Canada", correct: true },
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
      { text: "Brazil", correct: false },
    ],
  },
  {
    question: "Which gas is most abundant in the human body?",
    answers: [
      { text: "Nitrogen", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mars", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: "Which animal is known as the ship of the desert?",
    answers: [
      { text: "Horse", correct: false },
      { text: "Camel", correct: true },
      { text: "Donkey", correct: false },
      { text: "Llama", correct: false },
    ],
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: [
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Which city is famous for its canals and gondolas?",
    answers: [
      { text: "Venice", correct: true },
      { text: "Amsterdam", correct: false },
      { text: "Bangkok", correct: false },
      { text: "Paris", correct: false },
    ],
  },
  {
    question: "Who is known as the father of modern physics?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Galileo Galilei", correct: false },
    ],
  },
  {
    question: "Which element has the highest melting point?",
    answers: [
      { text: "Tungsten", correct: true },
      { text: "Iron", correct: false },
      { text: "Carbon", correct: false },
      { text: "Gold", correct: false },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Euro", correct: false },
    ],
  },
  {
    question: "What is the main function of red blood cells?",
    answers: [
      { text: "Fight infection", correct: false },
      { text: "Carry oxygen", correct: true },
      { text: "Clot blood", correct: false },
      { text: "Produce hormones", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Morning Star or Evening Star?",
    answers: [
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },
  {
    question: "Who discovered penicillin?",
    answers: [
      { text: "Alexander Fleming", correct: true },
      { text: "Marie Curie", correct: false },
      { text: "Louis Pasteur", correct: false },
      { text: "Gregor Mendel", correct: false },
    ],
  },
  {
    question: "What is the capital city of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
    ],
  },
  {
    question: "Which scientist developed the theory of evolution by natural selection?",
    answers: [
      { text: "Gregor Mendel", correct: false },
      { text: "Charles Darwin", correct: true },
      { text: "Louis Pasteur", correct: false },
      { text: "Alfred Wallace", correct: false },
    ],
  },
  {
    question: "What is the most abundant element in the Earth's crust?",
    answers: [
      { text: "Silicon", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Aluminum", correct: false },
      { text: "Iron", correct: false },
    ],
  }]


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