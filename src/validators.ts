import { BirthdayRow, BirthdayColumnsEnum } from "./types"

export function validateBirthdayHeader(row: BirthdayRow) : void {
    const columns = Object.keys(row)
    const validColumns = Object.values(BirthdayColumnsEnum).filter(value => typeof value === 'string')
    if (new Set(columns).size !== columns.length) {
        throw new Error("Duplicate columns")
    }
    columns.forEach(column => {
        if (!validColumns.includes(column)) {
            throw new Error(`Invalid column: '${column}'`)
        }
    })
    validColumns.forEach(column => {
        if (!columns.includes(column as string)) {
            throw new Error(`Missing column: '${column}'`)
        }
    })
}
