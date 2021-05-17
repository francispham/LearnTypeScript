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

