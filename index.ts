/* 1. TYPES */

/* Basic Types: */ 
const isOpen: boolean = false;

const myName: string = 'Francis';

const myAge: number = 32.50;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean] = ['Francis', 32, false];

enum Job { 
  WebDev,
  DevOps, 
  BlockchainDev 
};
const job: Job = Job.WebDev;

const notGoodPracticeI: any = 'NoGood';
const notGoodPracticeII: any = 2;

let never: never;


/* Functions in TS */
const typedFunction = (word: string): string => {
  console.log(word);
  return word;
};
// typedFunction(myName);

const optionalParamsFunction = (word?: string): string => {
  console.log(word || 'Phong');
  return word || 'Phong';
}
// optionalParamsFunction();

const defaultParamsFunction = (word = 'Default', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
}
// defaultParamsFunction('Francis', 'Pham');


/* Implicit Types & Union Types with | */
let implicitI: string | number | boolean = 'implicit';
implicitI = 'newImplicit';
implicitI = true;   //  Invalid without Union Type included '| boolean'
implicitI = 10;     //  Invalid without Union Type included '| number'
// console.log('implicitI:', implicitI);

// Gets Type from Initial Declaration:
let implicitII = implicitI;
implicitII = 100;   //  Invalid if Type is not a Number because the last Type of implicitI is Number  

const unionType = (x: string | number): string => {
  return `margin: ${x}px;`;
};
// unionType(10);
// unionType('10');
// unionType(false);    // Invalid


/* Null Types */ 
let nullType: string | undefined = 'Null Type';
nullType = null;  // null is included in String Type
// console.log('nullType:', nullType);
nullType = 'NullII';
nullType = undefined; // undefined is Invalid but No Error Showed