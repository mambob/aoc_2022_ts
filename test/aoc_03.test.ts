import {
    getRuckSackCommonItems,
    itemPriority,
    getRuckSackBadges,
} from "../src/aoc_03";
import { readFileSync } from "fs";

describe("AOC 03", () => {
    describe("Part 1", () => {
        describe("Test data", () => {
            const rucksacks = [
                "vJrwpWtwJgWrhcsFMMfFFhFp",
                "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
                "PmmdzqPrVvPwwTWBwg",
                "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
                "ttgJtRGJQctTZtZT",
                "CrZsJsPPZsGzwwsLwLmpwMDw",
            ];
            it("Detect correctly the items that appear in both compartments", () => {
                const commonItems = rucksacks
                    .map((rucksack) => getRuckSackCommonItems(rucksack))
                    .flat();
                expect(commonItems).toEqual(["p", "L", "P", "v", "t", "s"]);
            });
            it("Calculates correctly the priority of each common item", () => {
                const commonItems = rucksacks
                    .map((rucksack) => getRuckSackCommonItems(rucksack))
                    .flat();
                const priorities = commonItems.map((item) =>
                    itemPriority(item),
                );
                expect(priorities).toEqual([16, 38, 42, 22, 20, 19]);
                expect(priorities.reduce((a, b) => a + b)).toEqual(157);
            });
        });
        describe("Problem data", () => {
            it("Calculates correctly the prioroty of each common item", () => {
                const content = readFileSync(
                    "./data/adventofcode.com_2022_day_3_input.txt",
                    "utf8",
                ).split("\n");
                content.splice(content.length - 1);
                const commonItems = content
                    .map((rucksack) => getRuckSackCommonItems(rucksack))
                    .flat();
                const priorities = commonItems.map((item) =>
                    itemPriority(item),
                );
                expect(priorities.reduce((a, b) => a + b)).toEqual(8123);
            });
        });
    });
    describe("Part 2", () => {
        describe("Test data", () => {
            const rucksacks = [
                "vJrwpWtwJgWrhcsFMMfFFhFp",
                "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
                "PmmdzqPrVvPwwTWBwg",
                "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
                "ttgJtRGJQctTZtZT",
                "CrZsJsPPZsGzwwsLwLmpwMDw",
            ];
            it("Identifies correctly the badge of both groups", () => {
                expect(getRuckSackBadges(rucksacks)).toEqual(['r', 'Z']);
            });
            it("Calculates correctly the badge's priority of both groups", () => {
                const badges = getRuckSackBadges(rucksacks);
                const priorities: number[] = [];
                badges.forEach((badge) => priorities.push(itemPriority(badge)));
                expect(priorities.reduce((a, b) => a + b)).toEqual(70);
            });
        });
        describe.skip("Problem data", () => {
            const content = readFileSync(
                "./data/adventofcode.com_2022_day_3_input.txt",
                "utf8",
            ).split("\n");
            // content.splice(content.length - 1);
            const badges = getRuckSackBadges(content);
            const priorities: number[] = [];
            badges.forEach((badge) => priorities.push(itemPriority(badge)));
            expect(priorities.reduce((a, b) => a + b)).toEqual(2620);
        });
    });
});
