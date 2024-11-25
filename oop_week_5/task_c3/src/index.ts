const initializeOpenBrackets = (): Set<string> => {
    return new Set(['(', '{', '[']);
  };
  
  const initializeBracketMap = (): Map<string, string> => {
    return new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
  };
  
  const isValid = (input: string, openBrackets: Set<string>, bracketMap: Map<string, string>): boolean => {
    const stack: string[] = [];
    
    for (const char of input) {
        if (openBrackets.has(char)) {
            stack.push(char);  
        } else {
            const lastOpen = stack.pop(); 
            if (lastOpen === undefined || bracketMap.get(lastOpen) !== char) {
                return false; 
            }
        }
    }
    
    return stack.length === 0;  
  };

  const updateResult = (isValidResult: boolean): void => {
    const resultElement = document.getElementById("result") as HTMLElement;
    resultElement.textContent = isValidResult ? "Входная строка валидна." : "Входная строка не валидна.";
  };
  
  const processInput = (): void => {
    const inputElement = document.getElementById("inputData") as HTMLInputElement;
    const inputValue = inputElement.value.trim();
    const openBrackets = initializeOpenBrackets();
    const bracketMap = initializeBracketMap();
    const isValidResult = isValid(inputValue, openBrackets, bracketMap);
    updateResult(isValidResult);
  };
  
  const buttonElement = document.getElementById("button");
  buttonElement?.addEventListener("click", processInput);