
export class TreeVisibility {
    private _treeGrid: number[][];

    private _height: number;

    private _width: number;

    constructor(treeGrid: number[][]) {
        this._treeGrid = treeGrid;
        this._height = treeGrid.length;
        this._width = treeGrid[0].length;
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    public isVisible(i: number, j: number): boolean {
        if (i === 0 || j === 0) {
            return true;
        }
        if (i === this._treeGrid.length - 1 || j === this._treeGrid[0].length - 1) {
            return true;
        }
        const possible_paths = [
            this._treeGrid[i].slice(0, j),
            this._treeGrid[i].slice(j + 1),
            this._treeGrid.slice(0, i).map((row) => row[j]),
            this._treeGrid.slice(i + 1).map((row) => row[j]),
        ];
        for (const path of possible_paths) {
            if (path.every((tree) => tree < this._treeGrid[i][j])) {
                return true;
            }
        }
        return false;
    }

    public visibleTreeCount(): number {
        let count = 0;
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                if (this.isVisible(i, j)) {
                    count++;
                }
            } 
        }
        return count;
    }

    public scenicScore(i: number, j: number): number {
        if (i === 0 || j === 0) {
            return 0;
        }
        if (i === this._treeGrid.length - 1 || j === this._treeGrid[0].length - 1) {
            return 0;
        }
        const possible_paths = [
            this._treeGrid[i].slice(0, j).reverse(),
            this._treeGrid[i].slice(j + 1),
            this._treeGrid.slice(0, i).map((row) => row[j]).reverse(),
            this._treeGrid.slice(i + 1).map((row) => row[j]),
        ];
        const pathsScore = [];
        for (const path of possible_paths) {
            let pathScore = 0;
            for (const tree of path) {
                pathScore++;
                if (tree >= this._treeGrid[i][j]) {
                    break;
                }
            }
            pathsScore.push(pathScore);
        }
        return pathsScore.reduce((a, b) => a * b);
    }

    public highestScenicScore(): number {
        let maxScore = 0;
        for (let i = 0; i < this._height; i++) {
            for (let j = 0; j < this._width; j++) {
                const treeScenicScore = this.scenicScore(i, j);
                if (treeScenicScore > maxScore) {
                    maxScore = treeScenicScore;
                }
            }
        }
        return maxScore;
    }
}


export function parseDocument(input: string): TreeVisibility {
    const treeGrid = input
        .split("\n")
        .reverse()
        .slice(1)
        .reverse()
        .map((row) => row.split("").map((val) => parseInt(val)));
    return new TreeVisibility(treeGrid);
}

// const alberto = new TreeVisibility([
//     [3, 0, 3, 7, 3],
//     [2, 5, 5, 1, 2],
//     [6, 5, 3, 3, 2],
//     [3, 3, 5, 4, 9],
//     [3, 5, 3, 9, 0]
// ]);