import * as fs from 'fs'
import csv = require('csv-parser')
import { BirthdayRow } from './types'

export function parseCsv(filepath: string): BirthdayRow[] {
    const results: BirthdayRow[] = [];

    fs.createReadStream(filepath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
        }) 
    return results
}
