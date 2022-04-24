export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
    breeds: string[];
    yearOfBirth: number;
}

export const createCatName = () => "fluffy";

export type Animals = Cat | Dog;

const name = createCatName();