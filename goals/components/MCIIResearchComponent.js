import MCII from "../models/MCII.json";
import { Text, View, Button } from 'react-native';
import { ss } from '../../StyleSheet.js';


const info = MCII.info;

export function MCIIResearch ( { navigation } ) {
    return (
        <View style={ss.container}>
            <Text style={ss.text.heading}>{info.name + " - The Research"}</Text>
            <Text style={ss.text.body}>{info.research}</Text>
            <Button
                title={"Create an MCII Goal"}
                onPress={() => navigation.navigate('Find a Quiet Place')}
            />
        </View>
    );
}

export default MCIIResearch;