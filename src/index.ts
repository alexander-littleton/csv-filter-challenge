import { parseCsv } from './parsers'
import * as readline from 'readline'
import { BirthdayColumnsEnum } from './types'
import { filterByBirthdayColumn } from './filters'



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question(
  'Which .csv file do you want to filter? \n',
  filePath => {
    const extension = filePath.slice(filePath.length - 4)

    const table = parseCsv(filePath)

    let columnSelectionQuestion = `What column do you want to filter by? \n`
    const birthdayColumns = Object.values(BirthdayColumnsEnum).filter(value => typeof value === 'string')
    birthdayColumns.forEach((column, i)=> {
      columnSelectionQuestion += `[${i}] ${column}\n`
    })  
    rl.question(
      columnSelectionQuestion,
      selectedColumn => {
        const selectedColumnIndex = parseInt(selectedColumn);
        
        if (!birthdayColumns[selectedColumnIndex]) {
          console.log(`Invalid selection: ${selectedColumn}. Expected a number between 0 and ${birthdayColumns.length-1}`)
          rl.close() 
        } 
        
        rl.question(`What value do you want to filter for? \n`, filterValue => {
          const filteredTable = filterByBirthdayColumn(table, selectedColumnIndex, filterValue)
        
          if (!filteredTable.length) {
            console.log(`No values match filter '${filterValue}'`)
            rl.close()
          }

          console.log(filteredTable)
          rl.close()
          
        })

    })
})

rl.on('close', () => {
    process.exit(0)
})