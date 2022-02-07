import { BirthdayColumnsEnum, BirthdayRow } from "./types"

export function filterByBirthdayColumn(table: BirthdayRow[], column:number, value: string) {
    if (column === BirthdayColumnsEnum.dob) {
        return table.filter(row => {
            return row.dob.slice(0,4) === value;
        })
    } else {
        return table.filter(row => row[BirthdayColumnsEnum[column] as keyof BirthdayRow] === value)
    }
}