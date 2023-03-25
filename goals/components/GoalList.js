import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TouchableHighlight } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const DATA = [
  {
    title: 'Your Goals',
    description: 'View your goals or create new ones.',
    data: ['Stop criticizing myself', 'Eat more healthy foods', 'Go to the gym more often', 'Get a new job', 'Enjoy life more', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
  }
];

const GoalList = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title, description } }) => (
        <View style={styles.header}>
          <Text style={styles.header.header_title}>{title}</Text>
          <Text style={styles.header.description}>{description}</Text>
        </View>
      )}
    />
    <TouchableHighlight style={styles.newGoalButton} onPress={pressed}>
      <Text style={styles.newGoalButton.text}>+</Text>
    </TouchableHighlight>
  </SafeAreaView>
);


function pressed () {
  console.log('Button pressed!');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    backgroundColor: '#FBFBFB',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    borderRadius: 16,
    borderColor: '#EEEEEE',
    borderWidth: 2,
  },
  header: {
    marginLeft: 4,
    marginBottom: 12,
    
    header_title: {
      fontSize: 32,
      marginBottom: 4,
    },
    description: {
      fontSize: 20
    },
  },
  title: {
    fontSize: 16,
  },
  newGoalButton: {
    backgroundColor: '#7285FF',
    aspectRatio: 1,
    borderRadius: 12,
    position: 'absolute',
    bottom: 16,
    right: 24,
    width: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    text: {
      color: '#FFFFFF',
      fontSize: 40,
      marginBottom: 3,
    }
  },
});

export default GoalList;