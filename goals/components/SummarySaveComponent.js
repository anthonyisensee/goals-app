import MCII from "../models/MCII.json";
import { Text, View, Button } from 'react-native';
import { ss } from '../../StyleSheet.js';
import { AddGoal } from "./../controllers/DB.js";

export function SummarySave ( { navigation, route } ) {

    const final_goal_data = route.params.user_input;

    function OnButtonPress() {
        AddGoal(final_goal_data["Goal Name"], "MCII", final_goal_data)
        navigation.navigate('Your Goals');
    }

    return (
        <View style={ss.container}>
            <Text style={ss.text.body}>That's it! You did it. You identified your goal and the biggest obstacle to achieving it. What's more, you decided upon an actionable approach to overcoming that goal!\n\nHere's a summary of what you said:</Text>
            {
                Object.keys(final_goal_data).map((key, index) => {
                    return (
                        <View key={index}>
                            <Text style={[ss.text.body, ss.text.bold]}>{key}:</Text>
                            <Text style={ss.text.body}>{final_goal_data[key]}</Text>
                        </View>
                    );
                })
            }            
            <Button
                title={"Save My Goal"}
                onPress={OnButtonPress}
            />
        </View>
    );
}

export default SummarySave;
