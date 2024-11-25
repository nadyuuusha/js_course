const getInputData = (): string[] => {
    const inputElement = document.getElementById("inputData") as HTMLTextAreaElement;
    return inputElement.value.trim().split('\n');
  };
  
  const initializeLanguages = (numberOfStudents: number, inputValue: string[]): [Set<string>, Set<string> | null] => {
    const allLanguages = new Set<string>(); 
    let commonLanguages: Set<string> | null = null;  
    let index = 1;
  
    for (let i = 0; i < numberOfStudents; i++) {
        const numberOfLanguages = parseInt(inputValue[index++]);
        const languagesKnownByCurrentStudent = new Set<string>();  
  
        for (let j = 0; j < numberOfLanguages; j++) {
            const language = inputValue[index++].trim();
            languagesKnownByCurrentStudent.add(language);
            allLanguages.add(language);
        }
        
        commonLanguages = updateCommonLanguages(commonLanguages, languagesKnownByCurrentStudent);
    }
  
    return [allLanguages, commonLanguages];
  };
  
  const updateCommonLanguages = (commonLanguages: Set<string> | null, languagesKnownByCurrentStudent: Set<string>): Set<string> | null => {
    if (commonLanguages === null) {
        return new Set(languagesKnownByCurrentStudent);
    } else {
        const filteredCommonLanguages = new Set<string>([...commonLanguages].filter(language => 
            languagesKnownByCurrentStudent.has(language)
        ));
        return filteredCommonLanguages;
    }
  };
  
  const generateOutput = (allLanguages: Set<string>, commonLanguages: Set<string> | null): string => {
    let output = '';
    
    if (commonLanguages === null) {
        output += 0 + '\n';
    }
    if (commonLanguages) {
        const sortedCommonLanguages = Array.from(commonLanguages).sort();
        output += sortedCommonLanguages.join('\n') + '\n';
    }
  
    output += allLanguages.size + '\n';
    const sortedAllLanguages = Array.from(allLanguages).sort();
    output += sortedAllLanguages.join('\n');
  
    return output;
  };
  
  const processLanguages = () => {
    const inputValue = getInputData();
    const numberOfStudents = parseInt(inputValue[0]);
  
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
      alert("Введите корректное количество школьников");
      return;
    }
  
    const [allLanguages, commonLanguages] = initializeLanguages(numberOfStudents, inputValue);
    const output = generateOutput(allLanguages, commonLanguages);
    
    const resultElement = document.getElementById("result") as HTMLElement;
    resultElement.textContent = output;
  };
  
  const buttonElement = document.getElementById("button");
  buttonElement?.addEventListener("click", processLanguages);