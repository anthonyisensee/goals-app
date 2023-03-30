import { Text, View, SafeAreaView, SectionList, StatusBar, TouchableHighlight } from 'react-native';
import { ss } from '../../StyleSheet.js';
import { GetAllGoals } from "./../controllers/DB.js";

const GoalList = ( { navigation } ) => {

  // get data from database
  var goals = GetAllGoals();

  // reformat data for SectionList consumption
  var sections = [];

  for (var key in goals) {
    var names = [];
    for (var i = 0; i < goals[key].length; i++) {
      names.push(goals[key][i]["Goal Name"]);
    }
    sections.push({
      title: key,
      data: names
    });
  }

  console.log(sections[0].data)

  // define the actual component to return
  return (
    <View style={ss.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={ss.item}>
            <Text style={ss.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={ss.header}>
            <Text style={ss.header.header_title}>{title}</Text>
          </View>
        )}
      />
      <TouchableHighlight style={ss.newGoalButton} onPress={() => navigation.navigate('MCII Introduction')}>
        <Text style={ss.newGoalButton.text}>+</Text>
      </TouchableHighlight>
    </View>
  )
};

export default GoalList;
