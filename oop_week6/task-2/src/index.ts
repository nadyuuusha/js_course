import * as readline from 'readline';

// Определение типа заказа
interface Order {
    date: string;
    amount: number;
}

// Рассчет суммы заказов за указанный месяц и год
const calculateMonthlySales = (orders: Order[], year: number, month: number): number => {
    let total = 0;
    for (const order of orders) {
        const orderDate = new Date(order.date);
        if (orderDate.getFullYear() === year && orderDate.getMonth() === month) {
            total += order.amount; // Суммируем только за нужный месяц и год
        }
    }
    return total;
};

// Получение ввода от пользователя
const getInput = (): Promise<Order[]> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const orders: Order[] = [];
    return new Promise((resolve) => {
        const askForOrder = () => {
            rl.question('Введите дату заказа (YYYY-MM-DD) и сумму через запятую (или "exit" для завершения ввода): ', (input) => {
                if (input.trim().toLowerCase() === 'exit') {
                    rl.close();
                    resolve(orders);
                } else {
                    const [dateStr, amountStr] = input.split(',').map(str => str.trim());
                    const amount = parseFloat(amountStr);
                    if (isNaN(amount) || !dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
                        console.log('Некорректный ввод. Пожалуйста, используйте формат "YYYY-MM-DD, сумма".');
                    } else {
                        orders.push({ date: dateStr, amount });
                    }
                    askForOrder();
                }
            });
        };
        askForOrder();
    });
};

// Получение месяца и года от пользователя
const getMonthAndYear = (): Promise<{ year: number, month: number }> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Введите месяц и год в формате YYYY-MM для расчета суммы: ', (input) => {
            const [yearStr, monthStr] = input.split('-').map(str => str.trim());
            const year = parseInt(yearStr);
            const month = parseInt(monthStr) - 1; // Месяц начинается с 0 (январь = 0)
            if (isNaN(year) || isNaN(month) || month < 0 || month > 11) {
                console.log('Некорректный ввод. Пожалуйста, используйте формат "YYYY-MM".');
                resolve({ year: 0, month: 0 });
            } else {
                rl.close();
                resolve({ year, month });
            }
        });
    });
};

// Функция запуска программы
const main = async () => {
    const orders = await getInput();
    const { year, month } = await getMonthAndYear();
    if (year !== 0 && month !== 0) {
        const totalSales = calculateMonthlySales(orders, year, month);
        console.log(`Общая сумма заказов за ${year}-${(month + 1).toString().padStart(2, '0')}: ${totalSales}`);
    }
};

// Запуск программы
main().catch(console.error);