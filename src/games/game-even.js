import getRandomNumber from '../utils.js';
import init from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const initGame = () => init(getGameData, description);
export default initGame;
