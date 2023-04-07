import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ss } from '../../StyleSheet.js';

export function TextBoxComponent({ navigation, route }) {

    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText : "Continue";

    const user_input = route.params.user_input ? route.params.user_input : {};  // conditional catches when not yet created
    var textbox_user_input = "";

    function OnButtonPress() {

        // ensure data has been entered
        if (data.required != false && textbox_user_input == "") {
            Alert.alert("Missing Answer", "You must enter a response to continue.");
        }
        else {
            user_input[data.name] = textbox_user_input;
            const next_screen = data.next;
            navigation.navigate(next_screen, { user_input: user_input });
        }

    }

    function OnChangeText(text) {
        textbox_user_input = text;
    }

    function replaceKeys(input, data) {
        let output = input;

        // Find all instances of curly brackets containing keys
        const regex = /{([^{}]+)}/g;
        const matches = input.match(regex);

        if (matches) {
            // For each match, replace the curly brackets and key with the corresponding value from data
            matches.forEach((match) => {
                const key = match.slice(1, -1);
                const value = data[key];
                if (value !== undefined) {
                    // Replace the match with the corresponding value, stripping the last punctuation mark if present
                    const lastChar = value[value.length - 1];
                    if (/[.,;!?]/.test(lastChar)) {
                        output = output.replace(match, value.slice(0, -1));
                    } else {
                        output = output.replace(match, value);
                    }
                }
            });
        }

        // Remove the last punctuation mark from the output, if present
        const lastChar = output[output.length - 1];
        if (/[.,;!?]/.test(lastChar)) {
            output = output.slice(0, -1);
        }

        return output;
    }

    return (
        <View style={ss.goalContainer}>
            <Text style={ss.text.body}>{replaceKeys(data.text, user_input)}</Text>
            <TextInput style={ss.text.body}
                multiline
                placeholder="Enter your text here..."
                onChangeText={OnChangeText}
            />
            {/* display button only if data.next exists */}
            {data.next && <TouchableOpacity style={[ss.largeButton, ss.largeButtonPrimary]}
                onPress={OnButtonPress}
                activeOpacity={0.7}>
                <Text style={ss.largeButtonPrimary.text}>{buttonText}</Text>
            </TouchableOpacity>}
        </View>
    );
}
