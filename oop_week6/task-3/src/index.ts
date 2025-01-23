import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// Получение пути директории от пользователя
const getDirectoryPath = (): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Введите путь к директории для поиска: ', (dirPath) => {
            rl.close();
            resolve(dirPath.trim());
        });
    });
};

// Получение поискового запроса от пользователя
const getSearchQuery = (): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Введите строку для поиска в названии или содержимом файлов: ', (query) => {
            rl.close();
            resolve(query.trim());
        });
    });
};

// Поиск файлов по названию и содержимому
const searchFiles = async (dir: string, query: string): Promise<void> => {
    const results: string[] = [];
    
    const searchInDirectory = async (directory: string) => {
        const files = fs.readdirSync(directory);
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                await searchInDirectory(filePath);
            } else {
                if (file.includes(query)) {
                    results.push(filePath);
                    continue;
                }
                if (path.extname(filePath) === '.txt') {
                    try {
                        const content = fs.readFileSync(filePath, 'utf8');
                        if (content.includes(query)) {
                            results.push(filePath);
                        }
                    } catch (error) {
                        console.error(`Ошибка при чтении файла ${filePath}: ${error}`);
                    }
                }
            }
        }
    };
    await searchInDirectory(dir);
    
    if (results.length > 0) {
        console.log(`Найденные файлы:`);
        results.forEach((file) => console.log(file));
    } else {
        console.log(`Файлы с запросом "${query}" не найдены.`);
    }
};

// Основная функция
const main = async () => {
    try {
        const dirPath = await getDirectoryPath();
        const searchQuery = await getSearchQuery();
        if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
            console.log('Ошибка: указанная директория не существует или это не директория.');
            return;
        }
        await searchFiles(dirPath, searchQuery);
    } catch (error) {
        console.error(`Произошла ошибка: ${error}`);
    }
};

main().catch(console.error);