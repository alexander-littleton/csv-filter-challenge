"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const parsers_1 = require("./parsers");
const readline = __importStar(require("readline"));
const types_1 = require("./types");
const filters_1 = require("./filters");
const validators_1 = require("./validators");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Which .csv file do you want to filter? \n', filePath => {
    const extension = filePath.slice(filePath.length - 4);
    const table = (0, parsers_1.parseBirthdayCsv)(filePath);
    let columnSelectionQuestion = `What column do you want to filter by? \n`;
    const birthdayColumns = Object.values(types_1.BirthdayColumnsEnum).filter(value => typeof value === 'string');
    birthdayColumns.forEach((column, i) => {
        columnSelectionQuestion += `[${i}] ${column}\n`;
    });
    rl.question(columnSelectionQuestion, selectedColumn => {
        const selectedColumnIndex = parseInt(selectedColumn);
        (0, validators_1.validateBirthdayHeader)(table[0]);
        if (!birthdayColumns[selectedColumnIndex]) {
            console.log(`Invalid selection '${selectedColumn}'. Expected a number between 0 and ${birthdayColumns.length - 1}`);
            rl.close();
        }
        rl.question(`What value do you want to filter for? \n`, filterValue => {
            const filteredTable = (0, filters_1.filterByBirthdayColumn)(table, selectedColumnIndex, filterValue);
            if (!filteredTable.length) {
                console.log(`No matches for '${filterValue}'`);
                rl.close();
            }
            console.log(filteredTable);
            rl.close();
        });
    });
});
rl.on('close', () => {
    process.exit(0);
});
