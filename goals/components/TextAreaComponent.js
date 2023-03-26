import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextareaComponent = ({ heading, text }) => {
    const [value, setValue] = useState('');

    return (
        <View>
            <Text>{heading}</Text>
            <Text>{text}</Text>
            <TextInput
                style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setValue(text)}
                value={value}
                multiline={true}
            />
        </View>
    );
};

export default TextareaComponent;
