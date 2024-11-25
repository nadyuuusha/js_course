function fibonacciRecursive(n: number): number {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
  
  function fibonacciMemoized(n: number): number {
    const memo = new Map<number, number>();
  
    const getFibonacci = (num: number): number => {
      if (memo.has(num)) {
        return memo.get(num)!;
      }
  
      if (num <= 1) {
        return num;
      }
  
      const result = getFibonacci(num - 1) + getFibonacci(num - 2);
      memo.set(num, result);
  
      return result;
    };
  
    return getFibonacci(n);
  }
  
  function measureTime(fibFunc: (n: number) => number, n: number): number {
    const start = performance.now();
    fibFunc(n);
    const end = performance.now();
    return end - start;
  }
  
  const performAnalysis = () => {
    const inputElement = document.getElementById("inputN") as HTMLInputElement;
    const n = parseInt(inputElement.value);
    if (isNaN(n) || n < 0) {
        displayOutput("Введите корректное целое число больше 0.");
        return;
    }
    const recursiveTime = measureTime(fibonacciRecursive, n);
    const memoizedTime = measureTime(fibonacciMemoized, n);
    const outputMessage = `
        Результаты для n = ${n}:<br>
        Рекурсивный метод: ${recursiveTime.toFixed(4)} мс<br>
        Мемоизированный метод: ${memoizedTime.toFixed(4)} мс
    `;
    displayOutput(outputMessage);
  };
  
  function displayOutput(message: string) {
    const outputElement = document.getElementById("result") as HTMLParagraphElement;
    outputElement.innerHTML = message;
  }
  
  const buttonElement = document.getElementById("button");
  buttonElement?.addEventListener("click", performAnalysis);