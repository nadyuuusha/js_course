import { generatePermutations, getInputValues, displayOutput } from './counter';

const handleGeneratePermutations = () => {
    const { nums, error } = getInputValues();
    if (error) {
        displayOutput([], error);
        return;
    }
    const output = generatePermutations(nums);
    displayOutput(output, null);
};

const buttonElement = document.getElementById('button');
buttonElement?.addEventListener('click', handleGeneratePermutations);
