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