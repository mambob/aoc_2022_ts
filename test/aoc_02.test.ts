import {
    roundValue,
    tournamentValue,
    actualDecision,
    realTournamentValue
} from "../src/aoc_02";
import { readFileSync } from "fs";

describe("AOC 02", () => {
    describe("Test data", () => {
        const miniTournament: Array<Array<string>> = [
            ["A", "Y"],
            ["B", "X"],
            ["C", "Z"],
        ];

        it("Calculates correctly each strategy value", () => {
            expect(roundValue("A", "Y")).toEqual(8);
            expect(roundValue("B", "X")).toEqual(1);
            expect(roundValue("C", "Z")).toEqual(6);
        });

        it("Ends the strategy example with a score of 15", () => {
            expect(tournamentValue(miniTournament)).toEqual(15);
        });

        it("Calculates correctly the real choose of the player", () => {
            expect(actualDecision('A', 'Y')).toEqual('X');
            expect(actualDecision('B', 'X')).toEqual('X');
            expect(actualDecision('C', 'Z')).toEqual('X');
        });

        it("Calculates correctly with a score of 12", () => {
            expect(realTournamentValue(miniTournament)).toEqual(12);
        });
    });

    describe("Problem data", () => {
        it("Calculates correctly each strategy value", () => {
            const fileContent = readFileSync(
                "./data/adventofcode.com_2022_day_2_input.txt",
                "utf8",
            );
            const tournament = fileContent
                .split("\n")
                .map((elem) => elem.split(" "));
            tournament.splice(tournament.length - 1);
            expect(tournamentValue(tournament)).toEqual(12679);
        });

        it("Calculates correctly each strategy value", () => {
            const fileContent = readFileSync(
                "./data/adventofcode.com_2022_day_2_input.txt",
                "utf8",
            );
            const tournament = fileContent
                .split("\n")
                .map((elem) => elem.split(" "));
            tournament.splice(tournament.length - 1);
            expect(realTournamentValue(tournament)).toEqual(14470);
        });
    });
});
