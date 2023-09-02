import { readFileSync } from "fs";


class FileSystemNode {
    private _name: string;

    private _type: string;

    private _size: number = -1;

    private _parent: FileSystemNode | null = null;

    private _children: FileSystemNode[];

    constructor(name: string, type: string, size: number = -1) {
        this._name = name;
        this._type = type;
        if (this._type !== 'dir') {
            this._size = size;
        }
        this._children = [];
    }

    get name(): string {
        return this._name;
    }

    get type(): string {
        return this._type;
    }

    get size(): number {
        return this._size;
    }

    get parent(): FileSystemNode | null {
        return this._parent;
    }

    get children(): FileSystemNode[] {
        return this._children;
    }

    private set parent(value: FileSystemNode | null) {
        this._parent = value;
    }

    set name(value: string) {
        if (value.length === 0) {
            throw new Error("Name cannot be empty");
        }
        if (value.indexOf(' ') != -1) {
            throw new Error("Name cannot contain spaces");
        }
        this._name = value;
    }

    public addChildren(...node: FileSystemNode[]): void {
        for (const n of node) {
            if (n.parent !== null) {
                throw new Error("Node already has a parent");
            }
            if (this.children.map((child) => child.name).includes(n.name)) {
                throw new Error("Node with expected name already exists");
            }
            n.parent = this;
            this._children.push(n);
        }

    }

    public popChildren(node: FileSystemNode): void {
        this._children = this._children.filter((child) => child !== node);
    }

    public toString(deep: boolean = false): string {
        return this._toString(1, deep);
    }

    private _toString(depth: number = 1, deep: boolean = false): string {
        let stringOutput: string = '';
        if (this._type === 'dir') {
            stringOutput = `dir ${this._name}`;
            if (deep) {
                for (const child of this._children) {
                    stringOutput += `\n` + ' '.repeat(depth * 2) + `- ${child._toString(depth + 1, true)}`;
                }
            }
        }
        else {
            stringOutput = `${this._size} ${this._name}`;
        }
        return stringOutput;
    }
}


class FileSystemTree {
    private _root: FileSystemNode;

    private _current: FileSystemNode;

    constructor() {
        this._root = new FileSystemNode('/', 'dir');
        this._current = this._root;
    }

    get root(): FileSystemNode {
        return this._root;
    }

    get current(): FileSystemNode {
        return this._current;
    }

    public toString(): string {
        return this._root.toString(true);
    }

    public cd(path: string): void {
        if (path === '..') {
            if (this._current.parent !== null) {
                this._current = this._current.parent;
            }
        }
        else if (path === '/') {
            this._current = this._root;
        }
        else {
            const pathArray: FileSystemNode[] = this._current.children.filter((child) => child.name === path);
            if (pathArray.length === 0) {
                throw new Error("Path does not exist");
            }
            else {
                this._current = pathArray[0];
            }
        }
    }
}


function nodeWeight(node: FileSystemNode): number {
    if (node.type === 'file') {
        return node.size;
    }
    else {
        return node.children.reduce((acc, child) => acc + nodeWeight(child), 0);
    }
}


function parseNode(line: string): FileSystemNode {
    const [type, name] = line.split(' ');
    if (type === 'dir') {
        return new FileSystemNode(name, 'dir');
    } else {
        return new FileSystemNode(name, 'file', parseInt(type, 10));
    }
}


function parseDocument(document: string): FileSystemTree {
    const tree: FileSystemTree = new FileSystemTree();
    const lines: string[] = document.split('\n');

    for (const line of lines) { 

    }
    return tree;
}


parseDocument(readFileSync(
    './data/adventofcode.com_2022_day_7_input.txt',
    'utf-8'
));