import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalList from "../components/GoalList.js";

const Stack = createNativeStackNavigator();

function GoalStackController() {
    return (
        <Stack.Navigator>
            {/* defines the list of goals view */}
            <Stack.Screen name="List of Goals" component={GoalList} />
            


        </Stack.Navigator>
    );
}

export default GoalStackController;