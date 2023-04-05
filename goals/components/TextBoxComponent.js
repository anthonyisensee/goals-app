import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { ss } from '../../StyleSheet.js';

export function TextBoxComponent({ navigation, route }) {

    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText : "Continue";

    const user_input = route.params.user_input ? route.params.user_input : {};  // conditional catches when not yet created
    var textbox_user_input = "";

    function OnButtonPress() {
        user_input[data.name] = textbox_user_input;
        const next_screen = data.next;
        navigation.navigate(next_screen, { user_input: user_input });
    }

    function OnChangeText(text) {
        textbox_user_input = text;
    }

    function replaceKeys(input, data) {
        let output = input;
        const keys = input.match(/{([^{}]*)}/g);
        if (keys) {
            keys.forEach((key) => {
                const keyName = key.slice(1, -1);
                const value = data[keyName];
                if (value) {
                    let replacedValue = value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                    output = output.replace(new RegExp(key, "g"), replacedValue);
                }
            });
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
