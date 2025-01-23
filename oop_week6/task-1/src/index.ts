import * as readline from 'readline';

// Подсчет частоты символов в строке
const countCharacters = (s: string): Map<string, number> => {
    const charCount: Map<string, number> = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    return charCount;
};

// Нахождение самого частого символа и его количества
const findMostFrequentCharacter = (charCount: Map<string, number>): [string, number] => {
    let mostFrequentChar = '';
    let maxCount = 0;
    for (const [char, count] of charCount) {
        if (count > maxCount) {
            mostFrequentChar = char;
            maxCount = count;
        }
    }
    return [mostFrequentChar, maxCount];
};

// Обработка строки и получения результата
const getMostFrequentChar = (input: string): [string, number] => {
    const charCount = countCharacters(input);
    return findMostFrequentCharacter(charCount);
};

// Получение ввода от пользователя
const getInputFromUser = (prompt: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(prompt, (inputString) => {
            rl.close();
            resolve(inputString);
        });
    });
};

// Функция запуска программы
const main = async () => {
    const inputString = await getInputFromUser('Введите строку (например, "aa bb dd"): ');
    if (inputString.trim().length === 0) {
        console.log('Ошибка: пустая строка. Пожалуйста, введите не менее одного символа.');
        return;
    }
    const result = getMostFrequentChar(inputString.trim());
    console.log(`Результат: ${JSON.stringify(result)}`);
};

main().catch(console.error);