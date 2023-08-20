
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
                throw new Error("Node with this name already exists");
            }
            n.parent = this;
            this._children.push(n);
        }

    }

    public popChildren(node: FileSystemNode): void {
        this._children = this._children.filter((child) => child !== node);
    }

    public toString(deep: boolean = false): string {
        let stringOutput: string = '';
        if (this._type === 'dir') {
            stringOutput = `dir ${this._name}`;
            if (deep) {
                for (const child of this._children) {
                    stringOutput += `\n  - ${child.toString(true)}`;
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

    constructor() {
        this._root = new FileSystemNode('/', 'dir');
    }

    get root(): FileSystemNode {
        return this._root;
    }

    public toString(): string {
        return this._root.toString(true);
    }
}


const fsTree: FileSystemTree = new FileSystemTree();
fsTree.root.addChildren(
    new FileSystemNode('home', 'dir'),
    new FileSystemNode('songs', 'dir'),
    new FileSystemNode('bin', 'dir'),
    new FileSystemNode('atlantis.mp4', 'file', 1234567),
)

fsTree.root.children.filter((child) => child.name === 'songs')[0].addChildren(
    new FileSystemNode('hey_jude.mp3', 'file', 1234567),
    new FileSystemNode('let_it_be.mp3', 'file', 1234567),
    new FileSystemNode('here_comes_the_sun.mp3', 'file', 1234567),
    new FileSystemNode('deliver_us.mp3', 'file', 1234567),
)

console.log(fsTree.toString());
