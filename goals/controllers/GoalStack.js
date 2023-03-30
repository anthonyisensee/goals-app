import React from "react";
import { Text, View, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ss } from '../../StyleSheet.js';


import GoalList from "../components/GoalListComponent.js";

/* MODEL DATA */
import MCII from "../models/MCII.json";
var data = MCII.components;

// add next property to every item except the last
for (var i = 0; i < data.length - 1; i++) {
    data[i].next = data[i + 1].name;
}

/* COMPONENT MODELS */
function TextComponent({ navigation, route }) {
    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText: "Continue";
    return (
        <View style={ss.goalContainer}>
            <Text>{data.text}</Text>
            {/* display a button only if data.next exists */}
            {data.next && <Button title={buttonText} onPress={() => navigation.navigate(data.next)} />}
        </View>
    );
}

function TextBoxComponent({ navigation, route }) {
    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText : "Continue";

    return (
        <View style={ss.goalContainer}>
            <Text>{data.text}</Text>
            <TextInput
                multiline
                placeholder="Enter your text here"
                onChangeText={(text) => console.log(text)}
            />
            {/* display a button only if data.next exists */}
            {data.next && <Button title={buttonText} onPress={() => navigation.navigate(data.next)} />}
        </View>
    );
}

/* STACK CONTROLLER */
const Stack = createNativeStackNavigator();

function GoalStackController() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Your Goals" component={GoalList} />
            {
                // create needed screens dyanmically from data
                data.map((item, index) => {
                    return (
                        <Stack.Screen
                            key={item.name}
                            name={item.name}
                            component={eval(item.component)}
                            initialParams={item}
                        />
                    );
                })
            }
        </Stack.Navigator>
    );
}

export default GoalStackController;