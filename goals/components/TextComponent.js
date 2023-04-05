import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ss } from '../../StyleSheet.js';

export function TextComponent({ navigation, route }) {

    const data = route.params;
    const buttonText = data.buttonText ? data.buttonText : "Continue";

    const user_input = route.params.user_input ? route.params.user_input : {};  // conditional catches when not yet created

    function OnButtonPress() {
        const next_screen = data.next;
        navigation.navigate(next_screen, { user_input: user_input });
    }

    return (
        <View style={ss.goalContainer}>
            <Text style={ss.text.body}>{data.text}</Text>
            {/* display button only if data.next exists */}
            {data.next && <TouchableOpacity style={[ss.largeButton, ss.largeButtonPrimary]}
                onPress={OnButtonPress}
                activeOpacity={0.7}>
                <Text style={ss.largeButtonPrimary.text}>{buttonText}</Text>
            </TouchableOpacity>}
        </View>
    );
}
