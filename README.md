## How-To
Requires `node-js` and `yarn` installed.

To run, clone this repo and run `yarn install` then `yarn start` to spin up the application and answer the prompts. Once answered, the app will print an array of matching rows to stdout.

By default, the filesystem starts at the root of the project folder for the file prompt.

## Assumptions
1. We only need to support filtering a single CSV file
2. No other file types will need to be supported
3. The script only needs to handle the 3 given fields
4. Only exact match filtering for values

## Nice To Haves/Next Steps
1. Input data validation
2. The ability to input a CSV by URL
3. Testing
4. Have the script live in a globally callable package such that a user could call `parse-csv Documents/example.csv` directly into the command line
5. Dev and QA branches
6. Haven't tested yet but not sure if Windows would be supported
