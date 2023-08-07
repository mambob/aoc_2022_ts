
export class ShipCargo {
    private cratesContainer: Array<string[]> = [];


    constructor(cratesStacks: Array<string[]>) {
        this.cratesContainer = cratesStacks;
    }


    public toString = (): string => {
        let outputString: string = '';
        const maxStackSize: number = Math.max(...this.cratesContainer.map((stack) => {
            return stack.length;
        })) - 1;        
        for (let i = maxStackSize; i >= 0; i--) {
            for (let j = 0; j < this.cratesContainer.length; j++) {
                const crate: string | undefined = this.cratesContainer[j][i];
                switch (typeof crate) {
                    case 'string':
                        outputString += `[${crate}]`;
                        break;
                    case 'undefined':
                        outputString += '   ';
                        break;
                    default:
                        throw new Error("Cagaste mi negro");
                }
                outputString += ' ';
            }
            outputString += '\n';
        }
        for (let i = 0; i < this.cratesContainer.length; i++) {
            outputString += ` ${i + 1}  `;
        }
        return outputString;
    }


    public moveTo = (stackFrom: number, stackTo: number, quantity: number = 1): void => {
        stackFrom -= 1;
        stackTo -= 1;
        if (stackFrom < 0 || stackFrom > this.cratesContainer.length - 1) {   // Origin stack out of bounds
            return;
        }
        if (stackTo < 0 || stackTo > this.cratesContainer.length - 1) {   // Destiny stack out of bounds
            return;
        }
        if (this.cratesContainer[stackFrom].length < quantity) {    // Not enoughs crates to move
            return;
        }
        for (let i = 0; i < quantity; i++) {
            this.cratesContainer[stackTo].push(this.cratesContainer[stackFrom].pop() as string);
        }
    }


    // TODO: Make tests to this part 2
    public massiveMoveTo = (stackFrom: number, stackTo: number, quantity: number = 1): void => {
        stackFrom -= 1;
        stackTo -= 1;
        if (stackFrom < 0 || stackFrom > this.cratesContainer.length - 1) {   // Origin stack out of bounds
            return;
        }
        if (stackTo < 0 || stackTo > this.cratesContainer.length - 1) {   // Destiny stack out of bounds
            return;
        }
        if (this.cratesContainer[stackFrom].length < quantity) {    // Not enoughs crates to move
            return;
        }
        this.cratesContainer[stackTo].push(
            ...this.cratesContainer[stackFrom].splice(
                this.cratesContainer[stackFrom].length - quantity,
            )
        );
    }


    public stackTops = (): string => {
        let result: string = '';
        this.cratesContainer.forEach((stack) => {
            result += stack[stack.length - 1];
        });
        return result;
    }
}


export function instructionParser(
    content: string[],
): { from: number; to: number; quantity: number }[] {
    const instructions: { from: number; to: number; quantity: number }[] = [];
    const instructionRegex = /move (\d+) from (\d+) to (\d+)/;
    for (const instruction of content) {
        const slicedIns = instructionRegex.exec(instruction)?.slice(1).map(Number) as number[];
        instructions.push({
            from: slicedIns[1],
            to: slicedIns[2],
            quantity: slicedIns[0]
        });
    }
    return instructions;   
}

