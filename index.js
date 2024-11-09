const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const createCommitsInRange = async (start, end, commitCount) => {
    const randomInt = (await import('random-int')).default;

    const startDate = moment(start, 'DD-MM-YYYY');
    const endDate = moment(end, 'DD-MM-YYYY');

    const makeCommit = n => {
        if (n === 0) return simpleGit().push();

        // Calculates a random date between start and end
        const randomTimestamp = randomInt(startDate.unix(), endDate.unix());
        const DATE = moment.unix(randomTimestamp).format();

        const data = { data: DATE };
        console.log(DATE);

        jsonfile.writeFile(FILE_PATH, data, () => {
            simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
        });
    };
    
    makeCommit(commitCount);
};

// Example 
createCommitsInRange('01-01-2023', '01-01-2024', 100);
