import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const getRandomNumber = () => Math.round(Math.random() * 100) + 1;
const getUserAnswer = (number) => {
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  return answer;
};
const initGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let maxRounds = 3;
  let number;
  let correctAnswer;
  let userAnswer;
  while (maxRounds > 0) {
    number = getRandomNumber();
    correctAnswer = isEven(number) ? 'yes' : 'no';
    userAnswer = getUserAnswer(number).toLowerCase();
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    maxRounds -= 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default initGame;
