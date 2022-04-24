import { createCatName, type Cat, type Dog } from "./2_1_ts模块";

export type Animals = Cat | Dog;
const name = createCatName();