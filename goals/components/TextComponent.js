import React from 'react';
import { Text, View, Button } from 'react-native';

export default function TextComponent({ navigation, route }) {
    const data = route.params;
    console.log(data);
    
    return (
        <View>
            <Text>{data.heading}</Text>
            <Text>{data.text}</Text>
            {/* display a button only if data.next exists */}
            {data.next && <Button title={data.next} onPress={() => navigation.navigate(data.next)} />}
            
        </View>
    );
}
