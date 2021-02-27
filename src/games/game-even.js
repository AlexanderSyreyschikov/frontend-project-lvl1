import getRandomNumber from '../utils.js';
import init from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const gameInit = () => init(gameData, description);
export default gameInit;
