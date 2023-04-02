import React from "react";
import { Text, View, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalList from "../components/GoalListComponent.js";

import { TextBoxComponent } from "../components/TextBoxComponent.js"
import { TextComponent } from "../components/TextComponent.js"
import { GoalTypeSelection } from "../components/GoalTypeSelectionComponent.js"
import { MCIIIntroduction } from "../components/MCIIIntroductionComponent.js"
import { MCIIResearch } from "../components/MCIIResearchComponent.js"

/* MODEL DATA */
import MCII from "../models/MCII.json";
var data = MCII.components;

// add next property to every item except the last
for (var i = 0; i < data.length - 1; i++) {
    data[i].next = data[i + 1].name;
}

const mapping = {
    "TextComponent": TextComponent,
    "TextBoxComponent": TextBoxComponent
};

/* STACK CONTROLLER */
const Stack = createNativeStackNavigator();

function GoalStackController() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Your Goals" component={GoalList} />
            <Stack.Screen name="Create a Goal" component={GoalTypeSelection} />
            <Stack.Screen name="MCII Introduction" component={MCIIIntroduction} />
            <Stack.Screen name="MCII Research" component={MCIIResearch} />
            {
                // create needed screens dyanmically from data
                data.map((item, index) => {
                    return (
                        <Stack.Screen
                            key={item.name}
                            name={item.name}
                            component={mapping[item.component]}
                            initialParams={item}
                        />
                    );
                })
            }
        </Stack.Navigator>
    );
}

export default GoalStackController;