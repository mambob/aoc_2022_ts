import { elfCaloriesParser, mostCaloricElf, topCalorificElfs } from '../src/aoc_01';
import { readFileSync } from 'fs';

describe('AOC 01', () => {

    let caloriesList: string;

    it('Select the elf carrying the most Calories (Test)', () => {
        caloriesList = `
        1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000
        `;
        const calories = elfCaloriesParser(caloriesList); 
        expect(mostCaloricElf(calories).elfIndex + 1).toEqual(4);
        expect(mostCaloricElf(calories).calories).toEqual(24000);
    });

    it('Select the elf carrying the most Calories (Problem)', () => {
        caloriesList = readFileSync('./data/adventofcode.com_2022_day_1_input.txt', 'utf8');
        const calories = elfCaloriesParser(caloriesList);
        expect(mostCaloricElf(calories).elfIndex + 1).toEqual(6);
        expect(mostCaloricElf(calories).calories).toEqual(69281);
    });

    it('Select the top three elves with the most Calories (test)', () => {
        caloriesList = `
        1000
        2000
        3000

        4000

        5000
        6000

        7000
        8000
        9000

        10000
        `;
        const calories = elfCaloriesParser(caloriesList); 
        const elfs = topCalorificElfs(calories, 3);
        expect(elfs.map((item) => item.calories).reduce((acc, elf) => acc + elf)).toEqual(45000);
    })

    it('Select the top three elves with the most Calories (problem)', () => {
        caloriesList = readFileSync('./data/adventofcode.com_2022_day_1_input.txt', 'utf8');
        const calories = elfCaloriesParser(caloriesList);
        const elfs = topCalorificElfs(calories, 3);
        expect(elfs.map((item) => item.calories).reduce((acc, elf) => acc + elf)).toEqual(3);
    });
    
});