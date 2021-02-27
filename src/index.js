import readlineSync from 'readline-sync';

const getUserAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  return answer;
};

export default (getGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const maxRounds = 3;
  let round = 1;

  while (round <= maxRounds) {
    const [question, correctAnswer] = getGameData();
    const userAnswer = getUserAnswer(question).toLowerCase();
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
    round += 1;
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
