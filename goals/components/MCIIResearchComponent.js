import MCII from "../models/MCII.json";
import { Text, View, TouchableOpacity } from 'react-native';
import { ss } from '../../StyleSheet.js';


const info = MCII.info;

export function MCIIResearch ( { navigation } ) {
    return (
        <View style={ss.container}>
            <Text style={ss.text.heading}>{info.name + " - The Research"}</Text>
            <Text style={ss.text.body}>{info.research}</Text>
            <TouchableOpacity style={[ss.largeButton, ss.largeButtonPrimary]}
                onPress={() => navigation.navigate('Find a Quiet Place')}
                activeOpacity={0.7}>
                <Text style={ss.largeButtonPrimary.text}>Create an MCII Goal</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MCIIResearch;