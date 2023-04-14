import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ss } from '../../StyleSheet.js';

export function TextComponent({ navigation, route }) {

    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText : "Continue";

    const user_input = route.params.user_input ? route.params.user_input : {};  // conditional catches when not yet created

    function OnButtonPress() {
        const next_screen = data.next;
        navigation.navigate(next_screen, { user_input: user_input });
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

        return output;
    }

    return (
        <ScrollView>
            <View style={ss.goalContainer}>
                <Text style={ss.text.body}>{replaceKeys(data.text, user_input)}</Text>
                {/* display button only if data.next exists */}
                {data.next && <TouchableOpacity style={[ss.largeButton, ss.largeButtonPrimary]}
                    onPress={OnButtonPress}
                    activeOpacity={0.7}>
                    <Text style={ss.largeButtonPrimary.text}>{buttonText}</Text>
                </TouchableOpacity>}
            </View>
        </ScrollView>
    );
}
