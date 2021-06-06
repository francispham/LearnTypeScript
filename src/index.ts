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


/* ******************** */
/* 2. INTERFACES */ 
interface Person {
  name: string;
  age?: number; // ? is defining Optional Param
}
const interfaceFunctionI = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};
// This works TOO!
const interfaceFunctionII = ({ name, age }: Person) => {
  console.log(name);
  return name;
};

// interfaceFunctionII({
//   name: 'Francis', 
//   age: 32
// });
// interfaceFunctionII({
//   age: 32,
//   name: 'Phong'
// });


/* ******************** */
/* 3. ENUMS (For a Set Numbers of Option) */
enum NumericType {
  Videos,     // 0
  BlogPost,   // 1
  Quiz        // 2
}

enum StringType {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST',
  Quiz = 'QUIZ'
}

const createContent = (contentType: StringType) => {
  console.log(NumericType.Quiz);
};
// createContent('QUIZ');  // invalid
// createContent(StringType.Video);
// console.log(NumericType); 


/* ******************** */
/* 4. CLASSES */
class ClassType {
  publicVar: string;  // or:    public publicVar: string;
  private privateVar: string; // prevents outside usage
  readonly readonlyVar: string; // prevents from being changed
  
  constructor(publicVar, privateVar, readonlyVar) {
    this.publicVar = publicVar;
    this.privateVar = privateVar;
    this.readonlyVar = readonlyVar;
  }

  type(): string {
    console.log('Private: ', this.privateVar);
    
    this.publicVar = 'Changed Public Variable'
    console.log('Public: ', this.publicVar);
    
    // this.readonlyVar = 'Changing'; // invalid because of readonly keyword!

    console.log('This is Class Type');
    return 'Have to be String Type here';
  }
};

const newClass = new ClassType('Public Variable', 'Private Variable', 'Read Only Variable');
// newClass.type();
// console.log(newClass.publicVar);
// console.log(newClass.privateVar); // invalid because of private keyword!
// console.log(newClass.readonlyVar);


/* ******************** */
/* 5. MODULES */
import defaultEnum, { InterfaceModule } from './modules';

const interfaceModuleFunction = ({isModule}: InterfaceModule) => {
  console.log(isModule);
};

// interfaceModuleFunction({isModule: true});
// console.log(defaultEnum.Type);


/* ******************** */
/* 6. GENERICS */
const genericFunction = <G>(arg: G): G => {
  return arg;
};
const genericOutput = genericFunction('Generic');
// console.log('genericOutput:', genericOutput);
// genericFunction(3);

// https://www.leveluptutorials.com/tutorials/level-1-typescript/generics