import { TreeVisibility, parseDocument } from "../src/aoc_08";
import { readFileSync } from "fs";

describe('AOC 08', () => {
    describe('Part 1', () => {
        describe('Test', () => {
            const treeVisib = new TreeVisibility([
                [3, 0, 3, 7, 3],
                [2, 5, 5, 1, 2],
                [6, 5, 3, 3, 2],
                [3, 3, 5, 4, 9],
                [3, 5, 3, 9, 0]
            ]);
            it('Detects correctly visible and non-visible trees', () => {
                expect(treeVisib.isVisible(1, 1)).toBe(true);
                expect(treeVisib.isVisible(1, 2)).toBe(true);
                expect(treeVisib.isVisible(1, 3)).toBe(false);  
                expect(treeVisib.isVisible(2, 1)).toBe(true);
                expect(treeVisib.isVisible(2, 2)).toBe(false);
                expect(treeVisib.isVisible(2, 3)).toBe(true);
                expect(treeVisib.isVisible(3, 2)).toBe(true);
                expect(treeVisib.isVisible(3, 1)).toBe(false);
                expect(treeVisib.isVisible(3, 3)).toBe(false);
            });
            it('Counts correctly the visible trees', () => {
                expect(treeVisib.visibleTreeCount()).toBe(21);
            });
        });
        describe('Problem', () => {
            const treeVisib = parseDocument(readFileSync('./data/adventofcode.com_2022_day_8_input.txt', 'utf-8'));
            it('Counts correctly the visible trees', () => {
                expect(treeVisib.visibleTreeCount()).toBe(1805);
            });
        });
    });
    describe('Part 2', () => {
        describe('Test', () => {
            const treeVisib = new TreeVisibility([
                [3, 0, 3, 7, 3],
                [2, 5, 5, 1, 2],
                [6, 5, 3, 3, 2],
                [3, 3, 5, 4, 9],
                [3, 5, 3, 9, 0]
            ]);
            it('Calculates correctly the scenic score', () => {
                expect(treeVisib.scenicScore(1, 2)).toBe(4);
                expect(treeVisib.scenicScore(3, 2)).toBe(8);
            });
            it('Calculates correctly the max scenic score', () => {
                expect(treeVisib.highestScenicScore()).toBe(8);
            });
        });
        describe('Problem', () => {
            const treeVisib = parseDocument(readFileSync('./data/adventofcode.com_2022_day_8_input.txt', 'utf-8'));
            it('Calculates correctly the maxscenic score', () => {
                expect(treeVisib.highestScenicScore()).toBe(444528);
            });
        });
    });
});