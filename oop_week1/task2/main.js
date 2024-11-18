let num = 42;                 // число
let str = "я люблю js"; // строка
let bool = false;             // логическое значение
let obj = { language: "js" };  // объект
let symb = Symbol('simvol');  // символ
let bigInt = -987654321987654321n; // BigInt

// Вывод типов данных
console.log('Тип переменной num:', typeof num);         // number
console.log('Тип переменной str:', typeof str);         // string
console.log('Тип переменной bool:', typeof bool);       // boolean
console.log('Тип переменной obj:', typeof obj);         // object
console.log('Тип переменной symb:', typeof symb);       // symbol
console.log('Тип переменной bigInt:', typeof bigInt);   // bigint



// Максимальное значение для числа
let maxNumber = Number.MAX_VALUE;
console.log('Максимальное значение для числа:', maxNumber); // 1.7976931348623157e+308

// Минимальное положительное значение для числа
let minPositiveNumber = Number.MIN_VALUE;
console.log('Минимальное положительное значение для числа:', minPositiveNumber); // 5e-324

// Положительная бесконечность
let positiveInfinity = Number.POSITIVE_INFINITY;
console.log('Положительная бесконечность:', positiveInfinity); // Infinity

// Отрицательная бесконечность
let negativeInfinity = Number.NEGATIVE_INFINITY;
console.log('Отрицательная бесконечность:', negativeInfinity); // -Infinity

// Не число (NaN)
let notANumber = NaN;
console.log('NaN (не число):', notANumber); // NaN

// Обоснования минимальных и максимальных значений

// 1. Максимальное значение числа: 1.7976931348623157e+308.
//    Это значение определяется форматом IEEE 754 (64-битное число с плавающей точкой).
//    Формат выделяет 1 бит для знака, 11 бит для экспоненты и 52 бита для мантиссы.
//    Экспонента может достигать значения 1023, что и позволяет представить такое большое число.

// 2. Минимальное положительное значение числа: 5e-324.
//    Это ближайшее к нулю положительное значение, которое может быть представлено в формате IEEE 754.
//    Здесь экспонента имеет минимальное значение (-1022), а мантисса содержит только один значимый бит.

// 3. BigInt:
//    Этот тип данных используется для работы с числами, выходящими за пределы диапазона Number.
//    Его длина ограничена только объемом доступной памяти.

// 4. Бесконечности (Infinity и -Infinity):
//    Возникают, когда результат вычислений выходит за пределы допустимого диапазона чисел.