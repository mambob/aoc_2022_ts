import { ShipCargo, instructionParser } from "../src/aoc_05";
import { readFileSync } from "fs";

describe('AOC 05', () => {
    describe('Part 1', () => {
        describe('Test', () => {
            it('Creates correctly a ShipCargo object with the cargo example', () => {
                expect(() => new ShipCargo([
                    ['Z', 'N'],
                    ['M', 'C', 'D'],
                    ['P']
                ])).not.toThrow();
            });
            it('Shows the top crates of each stack within a ShipCargo instance', () => {
                const cargoExample: ShipCargo = new ShipCargo([
                    ['Z', 'N'],
                    ['M', 'C', 'D'],
                    ['P']
                ]);
                expect(cargoExample.stackTops()).toEqual('NDP');
            });
            it('Shows the correct crates at the top after some movements', () => {
                const cargoExample: ShipCargo = new ShipCargo([
                    ['Z', 'N'],
                    ['M', 'C', 'D'],
                    ['P']
                ]);
                cargoExample.moveTo(2, 1, 1);
                cargoExample.moveTo(1, 3, 3);
                cargoExample.moveTo(2, 1, 2);
                cargoExample.moveTo(1, 2, 1);

                expect(cargoExample.stackTops()).toEqual('CMZ');
            });
        });
        describe('Problem', () => {
            const realExample: ShipCargo = new ShipCargo([
               ['Z', 'P', 'M', 'H', 'R'], 
               ['P', 'C', 'J', 'B'], 
               ['S', 'N', 'H', 'G', 'L', 'C', 'D'], 
               ['F', 'T', 'M', 'D', 'Q', 'S', 'R', 'L'], 
               ['F', 'S', 'P', 'Q', 'B', 'T', 'Z', 'M'], 
               ['T', 'F', 'S', 'Z', 'B', 'G'], 
               ['N', 'R', 'V'], 
               ['P', 'G', 'L', 'T', 'D', 'V', 'C', 'M'], 
               ['W', 'Q', 'N', 'J', 'F', 'M', 'L'], 
            ]);

            const fileContent: string = readFileSync('./data/adventofcode.com_2022_day_5_input.txt', 'utf-8');
            const rawInstructions: string[] = fileContent.split('\n').slice(10);
            rawInstructions.pop();
            const instructionList = instructionParser(rawInstructions);
            for (const instruction of instructionList) {
                realExample.moveTo(
                    instruction.from,
                    instruction.to,
                    instruction.quantity
                );
            }
            expect(realExample.stackTops()).toEqual('VQZNJMWTR');
        });
    });
    describe('Part 2', () => {
        describe('Test', () => {
            it('Shows the correct crates after a massive movement', () => {
                const cargoExample: ShipCargo = new ShipCargo([
                    ['Z', 'N'],
                    ['M', 'C', 'D'],
                    ['P']
                ]);
                cargoExample.massiveMoveTo(2, 1, 1);
                cargoExample.massiveMoveTo(1, 3, 3);
                cargoExample.massiveMoveTo(2, 1, 2);
                cargoExample.massiveMoveTo(1, 2, 1);
                expect(cargoExample.stackTops()).toEqual('MCD'); 
            });
        });
        describe('Problem', () => {
            it('Shows the correct crates after a massive movement', () => {
                const realExample: ShipCargo = new ShipCargo([
                    ['Z', 'P', 'M', 'H', 'R'], 
                    ['P', 'C', 'J', 'B'], 
                    ['S', 'N', 'H', 'G', 'L', 'C', 'D'], 
                    ['F', 'T', 'M', 'D', 'Q', 'S', 'R', 'L'], 
                    ['F', 'S', 'P', 'Q', 'B', 'T', 'Z', 'M'], 
                    ['T', 'F', 'S', 'Z', 'B', 'G'], 
                    ['N', 'R', 'V'], 
                    ['P', 'G', 'L', 'T', 'D', 'V', 'C', 'M'], 
                    ['W', 'Q', 'N', 'J', 'F', 'M', 'L'], 
                ]);
                const fileContent: string = readFileSync('./data/adventofcode.com_2022_day_5_input.txt', 'utf-8');
                const rawInstructions: string[] = fileContent.split('\n').slice(10);
                rawInstructions.pop();
                const instructionList = instructionParser(rawInstructions);
                for (const instruction of instructionList) {
                    realExample.massiveMoveTo(
                        instruction.from,
                        instruction.to,
                        instruction.quantity
                    );
                }
                expect(realExample.stackTops()).toEqual('NLCDCLVMQ');
            });
        });
    });
});