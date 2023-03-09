import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalListView from "./GoalListView";


const Stack = createNativeStackNavigator();

function GoalStackController() {
    return (
        <Stack.Navigator>
            {/* defines the list of goals view */}
            <Stack.Screen name="List of Goals" component={GoalListView} />
            

        </Stack.Navigator>
    );
}

export default GoalStackController;