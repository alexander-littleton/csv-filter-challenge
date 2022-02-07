"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByBirthdayColumn = void 0;
const types_1 = require("./types");
function filterByBirthdayColumn(table, column, value) {
    if (column === types_1.BirthdayColumnsEnum.dob) {
        return table.filter(row => {
            return row.dob.slice(0, 4) === value;
        });
    }
    else {
        return table.filter(row => row[types_1.BirthdayColumnsEnum[column]] === value);
    }
}
exports.filterByBirthdayColumn = filterByBirthdayColumn;
