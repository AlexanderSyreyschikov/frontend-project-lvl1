import getRandomNumber from '../utils.js';
import init from '../index.js';

const description = 'What is the result of the expression?';
const operandMaxValue = 25;

const getRandomOperation = () => {
  const collOperations = ['+', '-', '*'];
  const randomIndexColl = getRandomNumber(0, collOperations.length - 1);
  return collOperations[randomIndexColl];
};

const getGameData = () => {
  const operation = getRandomOperation();
  const operand1 = getRandomNumber(0, operandMaxValue);
  const operand2 = getRandomNumber(0, operandMaxValue);
  const question = `${operand1} ${operation} ${operand2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
      answer = null;
      break;
  }
  answer = answer.toString();
  return [question, answer];
};
const initGame = () => init(getGameData, description);

export default initGame;
