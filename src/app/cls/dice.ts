export enum DiceShapes {
    Tetrahedron = 0,
    Cube = 15,
    Octahedron = 1,
    Dodecahedron = 2,
    Icosahedron = 3
}

export interface IDiceType {
    name: string;
    sides: number;
    object: DiceShapes;
}

export interface IDiceOption {
    label: string;
    value: IDiceType;
}

export const DiceTypes: IDiceType[] = [
    { name: 'd4', sides: 4, object: DiceShapes.Tetrahedron },
    { name: 'd6', sides: 6, object: DiceShapes.Cube },
    { name: 'd8', sides: 8, object: DiceShapes.Octahedron },
    { name: 'd10', sides: 10, object: DiceShapes.Dodecahedron },
    { name: 'd12', sides: 12, object: DiceShapes.Dodecahedron },
    { name: 'd20', sides: 20, object: DiceShapes.Icosahedron }
]

export const DiceOptions: IDiceOption[] = [
    { label: 'd4', value: DiceTypes[0] },
    { label: 'd6', value:  DiceTypes[1] },
    { label: 'd8', value: DiceTypes[2] },
    { label: 'd10', value: DiceTypes[3] },
    { label: 'd12', value: DiceTypes[4] },
    { label: 'd20', value: DiceTypes[5] }
]

export class Dice {
    public name: string;
    public type: IDiceType;

    public constructor() {
        this.name = 'd4';
        this.type = DiceTypes[0]
    }
    
}
