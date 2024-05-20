import { CharactersCollection } from "./CharacterCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const numbersCollection = new NumbersCollection([10, 3, -5, 1000]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("ohYeah");
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
