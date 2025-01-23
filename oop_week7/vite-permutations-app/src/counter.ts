import { cloneDeep } from 'lodash';

export const generatePermutations = (nums: Array<number>): Array<Array<number>> => {
    if (nums.length === 0) {
        return [[]];
    }
    const result: Array<Array<number>> = [];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = cloneDeep(nums.slice(0, i).concat(nums.slice(i + 1)));
        const remainingPerms = generatePermutations(remainingNums);
        for (const perm of remainingPerms) {
            result.push([currentNum, ...perm]);
        }
    }
    return result;
};

export const getInputValues = (): { nums: Array<number>, error: string | null } => {
    const inputElement = document.getElementById('inputNumbers') as HTMLInputElement;
    const inputValue = inputElement.value.trim();

    if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
        const numStrings = inputValue.slice(1, -1).split(',');
        const nums: Array<number> = numStrings.map(num => {
            const trimmedNum = num.trim();
            return Number(trimmedNum);
        }).filter(num => !isNaN(num));
        return { nums, error: null };
    } else {
        return { nums: [], error: "Пожалуйста, введите числа в формате [1, 2, 3]" };
    }
};

export const displayOutput = (output: Array<Array<number>>, error: string | null) => {
    const outputElement = document.getElementById('result') as HTMLParagraphElement;
    if (error) {
        outputElement.textContent = error;
    } else {
        outputElement.textContent = '[' + output.map(arr => '[' + arr.join(', ') + ']').join(', ') + ']';
    }
};
