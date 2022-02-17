import { parseBirthdayCsv } from './parsers';
import * as readline from 'readline';
import { BirthdayColumnsEnum, BirthdayRow } from './types';
import { filterByBirthdayColumn } from './filters';
import { validateBirthdayHeader } from './validators';
const util = require('util');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

async function firstQuestion() {
    const filePathQuestion = 'Which .csv file do you want to filter? \n';
    const filePath = await question(filePathQuestion);
    const extension = filePath.slice(filePath.length - 4);

    const table = parseBirthdayCsv(filePath);
    validateBirthdayHeader(table[0]);
    return table;
}

async function secondQuestion() {
    let columnSelectionQuestion = `What column do you want to filter by? \n`;
    const birthdayColumns = Object.values(BirthdayColumnsEnum).filter(
        (value) => typeof value === 'string',
    );
    birthdayColumns.forEach((column, i) => {
        columnSelectionQuestion += `[${i}] ${column}\n`;
    });
    const selectedColumn = await question(columnSelectionQuestion);
    const selectedColumnIndex = parseInt(selectedColumn);

    if (!birthdayColumns[selectedColumnIndex]) {
        console.log(
            `Invalid selection '${selectedColumn}'. Expected a number between 0 and ${
                birthdayColumns.length - 1
            }`,
        );
        rl.close();
    }

    return selectedColumnIndex;
}

async function thirdQuestion() {
    const filterValue = await question(
        `What value do you want to filter for? \n`,
    );
    return filterValue;
}

rl.on('close', async () => {
    process.exit(0);
});

const filteredTable = async () => {
    await filterByBirthdayColumn(
        await firstQuestion(),
        await secondQuestion(),
        await thirdQuestion(),
    );
};

if (!filteredTable.length) {
    rl.close();
}

console.log(filteredTable);
rl.close();
