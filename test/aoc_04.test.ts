import { fullRangeOverlapping } from "../src/aoc_04";

describe('AOC 04', () => {
    describe('Part 1', () => {
        describe('test', () => {
            it('should return true when the ranges overlap', () => {
                expect(fullRangeOverlapping([2, 4], [6, 8])).toEqual(false);
                expect(fullRangeOverlapping([2, 3], [4, 5])).toEqual(false);
                expect(fullRangeOverlapping([5, 7], [7, 9])).toEqual(false);
                expect(fullRangeOverlapping([2, 8], [3, 7])).toEqual(true);
                expect(fullRangeOverlapping([6, 6], [4, 6])).toEqual(true);
                expect(fullRangeOverlapping([2, 6], [4, 8])).toEqual(false);
            });
        });
        describe('problem', () => {
            // TODO: This tests
        });
    });
    describe('Part 2', () => {
        describe('test', () => {
            // TODO: This tests
        });
        describe('problem', () => {
            // TODO: This tests
        });
    });
});