"use strict";
exports.__esModule = true;
var isOpen = false;
var myName = 'Francis';
var myAge = 32.50;
var list = [0, 1, 2];
var me = ['Francis', 32, false];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["DevOps"] = 1] = "DevOps";
    Job[Job["BlockchainDev"] = 2] = "BlockchainDev";
})(Job || (Job = {}));
;
var job = Job.WebDev;
var notGoodPracticeI = 'NoGood';
var notGoodPracticeII = 2;
var never;
var typedFunction = function (word) {
    console.log(word);
    return word;
};
var optionalParamsFunction = function (word) {
    console.log(word || 'Phong');
    return word || 'Phong';
};
var defaultParamsFunction = function (word) {
    if (word === void 0) { word = 'Default'; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
var implicitI = 'implicit';
implicitI = 'newImplicit';
implicitI = true;
implicitI = 10;
var implicitII = implicitI;
implicitII = 100;
var unionType = function (x) {
    return "margin: " + x + "px;";
};
var nullType = 'Null Type';
nullType = null;
nullType = 'NullII';
nullType = undefined;
var interfaceFunctionI = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
var interfaceFunctionII = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
var NumericType;
(function (NumericType) {
    NumericType[NumericType["Videos"] = 0] = "Videos";
    NumericType[NumericType["BlogPost"] = 1] = "BlogPost";
    NumericType[NumericType["Quiz"] = 2] = "Quiz";
})(NumericType || (NumericType = {}));
var StringType;
(function (StringType) {
    StringType["Video"] = "VIDEO";
    StringType["BlogPost"] = "BLOG_POST";
    StringType["Quiz"] = "QUIZ";
})(StringType || (StringType = {}));
var createContent = function (contentType) {
    console.log(NumericType.Quiz);
};
var ClassType = (function () {
    function ClassType(publicVar, privateVar, readonlyVar) {
        this.publicVar = publicVar;
        this.privateVar = privateVar;
        this.readonlyVar = readonlyVar;
    }
    ClassType.prototype.type = function () {
        console.log('Private: ', this.privateVar);
        this.publicVar = 'Changed Public Variable';
        console.log('Public: ', this.publicVar);
        console.log('This is Class Type');
        return 'Have to be String Type here';
    };
    return ClassType;
}());
;
var newClass = new ClassType('Public Variable', 'Private Variable', 'Read Only Variable');
var interfaceModuleFunction = function (_a) {
    var isModule = _a.isModule;
    console.log(isModule);
};
