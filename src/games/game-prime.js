import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const initGame = () => init(getGameData, description);

export default initGame;
