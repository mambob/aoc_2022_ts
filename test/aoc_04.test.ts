import { fullRangeOverlapping, rangeParser, rangeOverlapping } from "../src/aoc_04";
import { readFileSync } from "fs";

describe('AOC 04', () => {
    describe('Part 1', () => {
        describe('test', () => {
            it('should return true when the ranges fully overlap', () => {
                expect(fullRangeOverlapping([2, 4], [6, 8])).toEqual(false);
                expect(fullRangeOverlapping([2, 3], [4, 5])).toEqual(false);
                expect(fullRangeOverlapping([5, 7], [7, 9])).toEqual(false);
                expect(fullRangeOverlapping([2, 8], [3, 7])).toEqual(true);
                expect(fullRangeOverlapping([6, 6], [4, 6])).toEqual(true);
                expect(fullRangeOverlapping([2, 6], [4, 8])).toEqual(false);
            });
        });
        describe('problem', () => {
            const mondongo: number[][][] = rangeParser(
                readFileSync(
                    "./data/adventofcode.com_2022_day_4_input.txt",
                    "utf8",
                ),
            );
            expect(
                mondongo.filter((pair) =>
                    fullRangeOverlapping(pair[0], pair[1]),
                ).length,
            ).toEqual(475);
        });
    });
    describe('Part 2', () => {
        describe('test', () => {
            it('Should return true when the ranges overlap', () => {
                expect(rangeOverlapping([5, 7], [7, 9])).toEqual(true);
                expect(rangeOverlapping([2, 8], [3, 7])).toEqual(true);
                expect(rangeOverlapping([6, 6], [4, 6])).toEqual(true);
                expect(rangeOverlapping([2, 6], [4, 8])).toEqual(true);
            });
        });
        describe('problem', () => {
            const mondongo: number[][][] = rangeParser(
                readFileSync(
                    "./data/adventofcode.com_2022_day_4_input.txt",
                    "utf8",
                ),
            );
            expect(
                mondongo.filter((pair) =>
                    rangeOverlapping(pair[0], pair[1]),
                ).length,
            ).toEqual(825);
        });
    });
});