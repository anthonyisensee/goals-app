import AsyncStorage from '@react-native-async-storage/async-storage';import data from './../../sample_data.json';

var goals = data.goals;

export function SetGoalData(index, key, data) {
    goals[index].fields[key] = data;
}

export function GetGoalData(index, key) {
    return goals[index].fields[key];
}

export function GetAllGoalsTemp() {
    return goals;
}

import * as SQLite from 'expo-sqlite';

// Open database "goals.db" or create it if it doesn't exist
const db = SQLite.openDatabase('goals.db');

// Create the "goals" table with columns "id", "name", "type", and "fields"
db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS goals (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, type TEXT, fields JSON)'
    );
});

db.transaction(tx => {
    tx.executeSql(
        'ALTER TABLE goals ADD COLUMN type TEXT'
    );
});

// db.transaction(tx => {
//     tx.executeSql(
//         'DELETE FROM goals',
//         [],
//         (_, result) => console.log(`Deleted ${result.rowsAffected} rows from the goals table`)
//     );
// });

// AddGoal("Test3", "MCII", {
// "Goal Name": "Stop Procrastinating",
//     "Best Possible Outcome": "I will be less stressed and will have time to work on the things I'd like to.",
//         "Write About the Best Possible Outcome": "My life will be much more peaceful because I won't be everything at the last minute under the stress of a deadline. I will have time to work on the things I'd like to.",
//             "Identify the Main Obstacle": "Doing things that are less important than the things I should be doing.",
//                 "Write About the Main Obstacle": "Random things that come up when I'm trying to work on something else. I'll often start working on something less important simply because it came to mind and then not work on the more important thing.",
//                     "Choose an Action": "I will write down the things I need to do and then work on them in order of importance when I have time to do so.",
//                         "Implementation Intention": "When I have time to work on something, I will write down the things I need to do and then work on them in order of importance."
//             });

// GetAllGoals((rows) => {
//     console.log(rows);
// });

export function AddGoal(name, type, fields) {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO goals (name, type, fields) VALUES (?, ?, ?)',
            [name, type, JSON.stringify(fields)]
        );
    });
}

export function GetAllGoals(callback) {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM goals',
            [],
            (_, { rows }) => callback(rows._array)
        );
    });
}


