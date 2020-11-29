import readlineSync from 'readline-sync';

const queryUserName = () => {
    return readlineSync.question('May I have your name?');
};

export { queryUserName };