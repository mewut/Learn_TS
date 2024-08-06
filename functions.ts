// Этот тип определяет структуру объекта, который будет возвращаться функциями. Объект должен иметь два свойства: name типа string и age типа number.
type infoReturn = {
    name: string,
    age: number
}

// Эта функция принимает два параметра: name типа string и age типа number. Она возвращает объект типа infoReturn, который содержит эти два свойства.
function getInfo(name: string, age: number): infoReturn {
    return {
        name,
        age
    }
}

// Эта функция является стрелочной функцией и принимает два параметра: name типа string и age типа number. Она возвращает объект типа infoReturn, который содержит эти два свойства. Типизация функции указана явно.
const getInfoArrow: (name: string, age: number) => infoReturn = (name, age) => {
    return {
        name,
        age
    };
};

// Этот тип определяет структуру функции, которая принимает два параметра: name типа string и age типа number, и возвращает объект типа infoReturn.
type infoReturnFunction = (name: string, age: number) => infoReturn;

// Эта функция является стрелочной функцией и принимает два параметра: name типа string и age типа number. Она возвращает объект типа infoReturn, который содержит эти два свойства. Типизация функции указана явно с использованием типа infoReturnFunction.
const getInfoFunction: infoReturnFunction = (name, age) => {
    return {
        name,
        age
    };
}

// Эта функция принимает неопределенное количество параметров типа number (оператор ... используется для обозначения rest параметров). Она возвращает массив чисел, переданных в качестве аргументов.
const getNumbers = (...numbers: number[]) => {
    return numbers
}