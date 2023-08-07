

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