import { readFileSync } from "fs";

export function rangeParser(fileContent: string): number[][][] {
    const rangeList: number[][][] = [];
    const rangeRegex = /(\d+)-(\d+),(\d+)-(\d+)/;
    const laWea = fileContent.split('\n');
    laWea.slice(0, laWea.length -1).forEach((rangePair) => {
        const results: number[] = rangeRegex.exec(rangePair)?.slice(1).map(Number) as number[];
        rangeList.push([
            [results[0], results[1]],
            [results[2], results[3]]
        ])
    });
    return rangeList;
}


export function fullRangeOverlapping(firstRange: number[], secondRange: number[]): boolean {
    return (firstRange[0] <= secondRange[0] && firstRange[1] >= secondRange[1])     // First contains second
        || (firstRange[0] >= secondRange[0] && firstRange[1] <= secondRange[1]);    // Second contains first
}


const mondongo = readFileSync('./data/adventofcode.com_2022_day_4_input.txt', 'utf8');
console.table(rangeParser(mondongo));