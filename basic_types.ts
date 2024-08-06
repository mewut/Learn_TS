// Boolean: Логический тип, который может принимать значения true или false.
let isDone: boolean = false;


// Number: Числовой тип, который может представлять как целые, так и дробные числа.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// String: Строковый тип, который представляет текстовые данные.
let color: string = "blue";
color = 'red'; // Можно использовать как одинарные, так и двойные кавычки


// Array: Массив, который может содержать элементы одного типа.
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // Альтернативный способ записи


// Tuple: Кортеж, который представляет массив фиксированной длины с элементами разных типов.
let x: [string, number];
x = ['hello', 10]; // OK
// x = [10, "hello"]; // Error


// Enum: Перечисление, которое позволяет определить набор именованных констант.
enum Color { Red, Green, Blue };
let c: Color = Color.Green;


// Any: Тип, который может представлять любое значение. Используется, когда тип переменной неизвестен.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // OK, definitely a boolean


// Void: Тип, который представляет отсутствие значения. Обычно используется для функций, которые не возвращают значение.
function warnUser(): void {
    console.log('This is my warning message');
}


// Null и Undefined: Типы, которые представляют отсутствие значения.
let u: undefined = undefined;
let n: null = null;


// Never: Тип, который представляет значение, которое никогда не возвращается. Обычно используется для функций, которые всегда выбрасывают исключение или никогда не завершаются.
function error(message: string): never {
    throw new Error(message);
}


// Object: Тип, который представляет любой непримитивный тип.
let obj: object = { 
    name: "John", 
    age: 30 
};


// Unknown: Тип, который представляет любое значение, подобно any, но требует проверки типа перед использованием.
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false; // OK, definitely a boolean