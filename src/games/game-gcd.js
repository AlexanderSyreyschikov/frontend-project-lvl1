import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a % b) {
    return getGcd(b, a % b);
  }
  return Math.abs(b);
};

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  let answer = getGcd(number1, number2);
  answer = answer.toString();
  return [question, answer];
};

const initGame = () => init(getGameData, description);

export default initGame;
