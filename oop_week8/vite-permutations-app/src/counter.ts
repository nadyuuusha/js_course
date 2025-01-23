// vite-permutations-app/src/counter.ts
// vite-permutations-app/src/counter.ts

export function getInputValues() {
    const inputElement = document.getElementById('inputNumbers') as HTMLInputElement;
    try {
      const nums = JSON.parse(inputElement.value);
      if (Array.isArray(nums)) {
        return { nums: nums.length === 0 ? [] : nums, error: null }; // Если массив пустой, возвращаем пустой массив
      }
      return { nums: [], error: "Пожалуйста, введите числа в формате [1, 2, 3]" }; // Возвращаем ошибку
    } catch (error) {
      return { nums: [], error: "Пожалуйста, введите числа в формате [1, 2, 3]" }; // Ошибка при парсинге
    }
  }
  
  
  export function generatePermutations(arr: number[]): number[][] {
    if (arr.length === 0) return [[]];
    const result: number[][] = [];
    const permute = (current: number[], remaining: number[]) => {
      if (remaining.length === 0) {
        result.push(current);
      } else {
        for (let i = 0; i < remaining.length; i++) {
          const next = [...current, remaining[i]];
          const nextRemaining = remaining.filter((_, idx) => idx !== i);
          permute(next, nextRemaining);
        }
      }
    };
    permute([], arr);
    return result;
  }
  
  export function displayOutput(permutations: number[][], error: string | null) {
    const resultElement = document.getElementById('result') as HTMLParagraphElement;
    if (error) {
      resultElement.textContent = error;
    } else {
      resultElement.textContent = JSON.stringify(permutations);
    }
  }
  