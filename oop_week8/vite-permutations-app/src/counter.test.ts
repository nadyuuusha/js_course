// vite-permutations-app/src/counter.test.ts
import { generatePermutations, getInputValues, displayOutput } from './counter';

describe('generatePermutations', () => {
  it('should return empty array for empty input', () => {
    expect(generatePermutations([])).toEqual([[]]);
  });

  it('should return correct permutations for [1, 2, 3]', () => {
    expect(generatePermutations([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  it('should return correct permutations for [1, 2]', () => {
    expect(generatePermutations([1, 2])).toEqual([[1, 2], [2, 1]]);
  });
});

describe('getInputValues', () => {
  it('should handle empty input', () => {
    document.body.innerHTML = '<input id="inputNumbers" value="[]" />';
    const result = getInputValues();
    expect(result.nums).toEqual([]); // Ожидаем пустой массив
    expect(result.error).toBeNull(); // Нет ошибки
  });

  it('should return error for invalid input', () => {
    document.body.innerHTML = '<input id="inputNumbers" value="1, 2, 3" />';
    const result = getInputValues();
    expect(result.nums).toEqual([]); // Ожидаем пустой массив
    expect(result.error).toBe("Пожалуйста, введите числа в формате [1, 2, 3]"); // Ожидаем ошибку
  });
});

describe('displayOutput', () => {
  it('should display error message', () => {
    document.body.innerHTML = '<p id="result"></p>';
    displayOutput([], 'Пожалуйста, введите числа в формате [1, 2, 3]');
    const result = document.getElementById('result') as HTMLParagraphElement;
    expect(result.textContent).toBe('Пожалуйста, введите числа в формате [1, 2, 3]');
  });

  it('should display permutations correctly', () => {
    document.body.innerHTML = '<p id="result"></p>';
    displayOutput([[1, 2], [2, 1]], null);
    const result = document.getElementById('result') as HTMLParagraphElement;
    expect(JSON.parse(result.textContent || '[]')).toEqual([[1, 2], [2, 1]]);
  });
});
