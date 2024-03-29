import MCII from "../models/MCII.json";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ss } from '../../StyleSheet.js';
import { AddGoal, UpdateGoal } from "./../controllers/DB.js";

export function SummarySave ( { navigation, route } ) {

    const final_goal_data = route.params.user_input;
    const mode = route.params.mode;
    const id = route.params.goal_id;

    function OnButtonPress() {

        if (mode == "edit") {
            // function to edit goal here
            UpdateGoal(id, final_goal_data["Goal Name"], "MCII", final_goal_data)
        }
        else {
            AddGoal(final_goal_data["Goal Name"], "MCII", final_goal_data)
        }
        navigation.navigate('Your Goals');
        
    }

    return (
        <ScrollView>
            <View style={ss.container}>
                <Text style={ss.text.body}>{"That's it! You did it. You identified your goal and the biggest obstacle to achieving it. What's more, you decided upon an actionable approach to overcoming that goal!\n\nHere's a summary of what you said:"}</Text>
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
                <TouchableOpacity style={[ss.largeButton, ss.largeButtonPrimary]}
                    onPress={OnButtonPress}
                    activeOpacity={0.7}>
                    <Text style={ss.largeButtonPrimary.text}>Save My Goal</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default SummarySave;
