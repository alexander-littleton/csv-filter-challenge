"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBirthdayHeader = void 0;
const types_1 = require("./types");
function validateBirthdayHeader(row) {
    const columns = Object.keys(row);
    const validColumns = Object.values(types_1.BirthdayColumnsEnum).filter(value => typeof value === 'string');
    if (new Set(columns).size !== columns.length) {
        throw new Error("Duplicate columns");
    }
    columns.forEach(column => {
        if (!validColumns.includes(column)) {
            throw new Error(`Invalid column: '${column}'`);
        }
    });
    validColumns.forEach(column => {
        if (!columns.includes(column)) {
            throw new Error(`Missing column: '${column}'`);
        }
    });
}
exports.validateBirthdayHeader = validateBirthdayHeader;
