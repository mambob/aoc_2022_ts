import { readFileSync } from "fs";

// Este código se supone que funciona con los ejemplos de prueba, pendiente de hacer las pruebas
export function datastreamMarkerFinder(buffer: string, markerLength: number = 4): number {
    let skipLoop: boolean = false;
    for (let i = 0; i < buffer.length; i++) {
        skipLoop = false;        
        for (let first = i; first < i + markerLength; first++) {
            for (let second = first + 1; second < i + markerLength; second++) {
                if (buffer[first] === buffer[second]) {
                    skipLoop = true;
                    break;
                }
            }
            if (skipLoop) break;
        }
        if (skipLoop) continue;
        return i + markerLength;
    }
    return -1;
}

// Jorge del futuro, la versión optimizada de este algoritmo que teorizaste
// no funciona en la práctica, porque no estás cacheando los resultados ni
// nada parecido, así que existen casos que no se calculan.

console.log(datastreamMarkerFinder(
    readFileSync('./data/adventofcode.com_2022_day_6_input.txt', 'utf8')
)); // = 1134

console.log(datastreamMarkerFinder(
    readFileSync('./data/adventofcode.com_2022_day_6_input.txt', 'utf8'),
    14
)); // = 2263