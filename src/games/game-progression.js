import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'What number is missing in the progression?';

const getCollProgression = (lengthColl) => {
  const start = getRandomNumber();
  const step = getRandomNumber(-15, 15);
  const coll = [start];
  for (let i = 2; i <= lengthColl; i += 1) {
    coll.push(start + (i - 1) * step);
  }
  return coll;
};

const getGameData = () => {
  const lengthProgression = getRandomNumber(5, 10);
  const positionHidden = getRandomNumber(0, (lengthProgression - 1));
  const collProgression = getCollProgression(lengthProgression);
  let answer = collProgression[positionHidden];
  collProgression[positionHidden] = '..';
  const question = collProgression.join(' ');
  answer = answer.toString();
  return [question, answer];
};

const initGame = () => init(getGameData, description);

export default initGame;
