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
1. Change wording of prompt to be true to filter (i.e. filtering for dob should reflect that we are filtering by year)
2. Input data validation
3. The ability to input a CSV by URL
4. Testing
5. Have the script live in a globally callable package such that a user could call `parse-csv Documents/example.csv` directly into the command line
6. Dev and QA branches
7. Haven't tested yet but not sure if Windows would be supported. Docker image would solve this issue
8. Ability to export filtered CSV
