export enum DiceShapes {
    Tetrahedron = 0,
    Cube = 15,
    Octahedron = 1,
    Dodecahedron = 2,
    Icosahedron = 3
}

export interface IDiceOption {
    label: string;
    value: string;
    sides: number;
    object: DiceShapes;
}

export const DiceOptions: IDiceOption[] = [
    { label: 'd4', value: 'd4', sides: 4, object: DiceShapes.Tetrahedron },
    { label: 'd6', value: 'd6', sides: 6, object: DiceShapes.Cube },
    { label: 'd8', value: 'd8', sides: 8, object: DiceShapes.Octahedron },
    { label: 'd10', value: 'd10', sides: 10, object: DiceShapes.Dodecahedron },
    { label: 'd12', value: 'd12', sides: 12, object: DiceShapes.Dodecahedron },
    { label: 'd20', value: 'd20', sides: 20, object: DiceShapes.Icosahedron }
]
