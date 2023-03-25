import React from 'react';
import { Text, View } from 'react-native';

const TextComponent = ({ heading, text }) => {
    return (
        <View>
            <Text>{heading}</Text>
            <Text>{text}</Text>
        </View>
    );
};

export default TextComponent;
