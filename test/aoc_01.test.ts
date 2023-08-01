import { elfCaloriesParser, mostCaloricElf } from '../src/aoc_01';
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
        expect(mostCaloricElf(calories).elfIndex).toEqual(4);
        expect(mostCaloricElf(calories).calories).toEqual(24000);
    });
    it('Select the elf carrying the most Calories (Problem)', () => {
        caloriesList = readFileSync('./data/adventofcode.com_2022_day_1_input.txt', 'utf8');
        const calories = elfCaloriesParser(caloriesList);
        expect(mostCaloricElf(calories).elfIndex).toEqual(6);
        expect(mostCaloricElf(calories).calories).toEqual(69281);
    });
});