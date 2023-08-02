
type elfCalorieInventory = Array<number>;

/**
 * Function to parse the list of numbers from each elf
 * @param caloriesList String with the information about the calories of each elf
 * @returns List of calories for each elf
 */
export function elfCaloriesParser(
    caloriesList: string,
): Array<elfCalorieInventory> {
    return caloriesList.split("\n\n").map((elfList) => {
        return elfList.split("\n").map(Number);
    });
}

/**
 * Function to estimate the elf with the higher sum of calories and the sum of calories
 * @param caloriesList List of calories per elf
 * @returns {elfIndex: number, calories: number} Index of the elf with the higher sum of calories and the sum of calories
 */
export function mostCaloricElf(caloriesList: Array<elfCalorieInventory>): {
    elfIndex: number;
    calories: number;
} {
    const calories = caloriesList.map((elfList) => {
        return elfList.reduce((a, b) => a + b, 0);
    });
    console.log(calories);
    
    const fattestElf: number = calories.indexOf(Math.max(...calories));
    return {
        elfIndex: fattestElf,
        calories: calories[fattestElf],
    };
}


export function topCalorificElfs(
    caloriesList: Array<elfCalorieInventory>,
    top: number,
): { elfIndex: number; calories: number }[] {
    const topElfs: Array<{ elfIndex: number; calories: number }> = [];
    for (let i = 0; i < top; i++) {
        const elf = mostCaloricElf(caloriesList);        
        topElfs.push(elf);
        caloriesList.splice(elf.elfIndex, 1);
    }
    return topElfs;
}