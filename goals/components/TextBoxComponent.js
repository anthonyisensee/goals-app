import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
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

    return (
        <View style={ss.goalContainer}>
            <Text>{data.text}</Text>
            <TextInput
                multiline
                placeholder="Enter your text here"
                onChangeText={OnChangeText}
            />
            {/* display a button only if data.next exists */}
            {data.next && <Button
                title={buttonText}
                onPress={OnButtonPress}
            />}
        </View>
    );
}
