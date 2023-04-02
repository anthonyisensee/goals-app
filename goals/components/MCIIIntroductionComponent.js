import MCII from "../models/MCII.json";
import { Text, View, Button } from 'react-native';
import { ss } from '../../StyleSheet.js';


const info = MCII.info;

export function MCIIIntroduction ( { navigation } ) {
    return (
        <View style={ss.container}>
            <Text style={ss.text.heading}>{info.name}</Text>
            <Text style={ss.text.body}>{info.description}</Text>
            <View style={ss.buttonBottomMargin}>
                <Button
                    title={"The Research"}
                    onPress={() => navigation.navigate('MCII Research')}
                />
            </View>
            <Button
                title={"Create an MCII Goal"}
                onPress={() => navigation.navigate('Find a Quiet Place')}
            />
        </View>
    );
}

export default MCIIIntroduction;
