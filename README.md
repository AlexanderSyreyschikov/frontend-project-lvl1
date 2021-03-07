**Состояние пакета**:

* [![Maintainability](https://api.codeclimate.com/v1/badges/39f2e83b599e7dd82866/maintainability)](https://codeclimate.com/github/AlexanderSyreyschikov/frontend-project-lvl1/maintainability) *CodeClimate Maintainability*
* [![eslint](https://github.com/AlexanderSyreyschikov/frontend-project-lvl1/workflows/eslint/badge.svg)](https://github.com/AlexanderSyreyschikov/frontend-project-lvl1/actions) *Eslint test*
* [![Actions Status](https://github.com/AlexanderSyreyschikov/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/AlexanderSyreyschikov/frontend-project-lvl1/actions) *Hexlet tests and linter status*

# «Игры разума» 

Пакет состоит из пяти консольных игр. 
Каждая игра задает вопросы, на которые нужно дать правильные ответы.

1. [brain-even ("Проверка на чётность")](/AlexanderSyreyschikov/frontend-project-lvl1#game-brain-even)
2. [brain-even ("Калькулятор")](/AlexanderSyreyschikov/frontend-project-lvl1#game-brain-calc)
3. [brain-even ("НОД")](/AlexanderSyreyschikov/frontend-project-lvl1#game-brain-gcd)
4. [brain-even ("Арифметическая прогрессия")](/AlexanderSyreyschikov/frontend-project-lvl1#game-brain-progression)
5. [brain-even ("Простое ли число?")](/AlexanderSyreyschikov/frontend-project-lvl1#game-brain-prime)

## Инструкция к пакету
### Установка

`npm install`
`npm link`

### Удаление

`npm unlink`

## Описание
Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. 
Неправильные ответы завершают игру и предлагают пройти ее заново.

### Game brain-even 
**Проверка на четность**: пользователю показывается случайное число. И ему нужно ответить `yes`, если число чётное, или `no` — если нечётное:

[![Game brain-even ](https://asciinema.org/a/gBGy9OpYMKqljxthVIH0QIZe8.svg)](https://asciinema.org/a/gBGy9OpYMKqljxthVIH0QIZe8)

### Game brain-calc
**Калькулятор**: пользователю показывается случайное математическое выражение, например `35 + 16`, которое нужно вычислить и записать правильный ответ:

[![Game brain-calc ](https://asciinema.org/a/7mhZUHSQfciNsFEPPS84wiz04.svg)](https://asciinema.org/a/7mhZUHSQfciNsFEPPS84wiz04)

### Game brain-gcd 
**Наибольший общий делитель (НОД)**: пользователю показывается два случайных числа, например, `25 50`. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел:

[![Game brain-gcd ](https://asciinema.org/a/YLDRcodMWv43HeBK0NaHiU9Fg.svg)](https://asciinema.org/a/YLDRcodMWv43HeBK0NaHiU9Fg)

### Game brain-progression 
**Арифметическая прогрессия**: пользователю показывается арифметическая прогрессия, в которой одно число заменено `..`. Пользователь должен вычеслить данное число и записать правильный ответ:

[![Game brain-progression ](https://asciinema.org/a/tONtSHaxgywa27MWs8DeM3X26.svg)](https://asciinema.org/a/tONtSHaxgywa27MWs8DeM3X26)

### Game brain-prime 
**Простое ли число?** Пользователю показывается случайное число. И ему нужно ответить `yes`, если число простое, или `no` — если не простое:

[![Game brain-prime ](https://asciinema.org/a/0tZk7A0c3caUpdQjrr4lJVnXV.svg)](https://asciinema.org/a/0tZk7A0c3caUpdQjrr4lJVnXV)
