import { Text, View, SafeAreaView, SectionList, StatusBar, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ss } from '../../StyleSheet.js';

const DATA = [
  {
    title: 'MCII',
    data: ['Stop criticizing myself', 'Eat more healthy foods', 'Go to the gym more often', 'Get a new job', 'Enjoy life more', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
  }
];

const GoalList = ( { navigation } ) => (
  <View style={ss.container}>
    <SectionList
      sections={DATA}
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
);

export default GoalList;
