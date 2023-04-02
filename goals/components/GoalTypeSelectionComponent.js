import MCII from "../models/MCII.json";
import { Text, View } from 'react-native';
import { ss } from '../../StyleSheet.js';


const info = MCII.info;

export function GoalTypeSelection ( { navigation } ) {

    function onclick() {
        
    }

    return (
        <View style={ss.container}>
            <Text style={ss.text.heading}>Choose a Goal Type:</Text>
            <Text style={ss.item} onPress={() => navigation.navigate('MCII Introduction')}>
                {info.name}
            </Text>
            <Text style={ss.text.body}>More goal types coming soon!</Text>
            {/* <Text style={ss.text.body}>{info.description}</Text> */}
        </View>
    );
}

export default GoalTypeSelection;