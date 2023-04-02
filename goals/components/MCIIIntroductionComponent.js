import MCII from "../models/MCII.json";
import { Text, View, TouchableOpacity } from 'react-native';
import { ss } from '../../StyleSheet.js';


const info = MCII.info;

export function MCIIIntroduction ( { navigation } ) {
    return (
        <View style={ss.container}>
            <Text style={ss.text.heading}>{info.name}</Text>
            <Text style={ss.text.body}>{info.description}</Text>
            <TouchableOpacity style={ss.largeButton}
                onPress={() => navigation.navigate('MCII Research')}
                activeOpacity={0.7}>
                <Text style={ss.largeButton.text}>The Research</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ss.largeButton}
                onPress={() => navigation.navigate('Find a Quiet Place')}
                activeOpacity={0.7}>
                <Text style={ss.largeButton.text}>Create an MCII Goal</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MCIIIntroduction;
