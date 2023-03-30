import AsyncStorage from '@react-native-async-storage/async-storage';import data from './../../sample_data.json';

// sample data for application testing purposes
var goals = data.goals;

// console.log(goals);

export function SetGoalData(index, key, data) {
    goals[index].fields[key] = data;
}

export function GetGoalData(index, key) {
    return goals[index].fields[key];
}

export function GetAllGoals() {
    return goals;
}
