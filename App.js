import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';

const DATA = [
  {
    title: 'Goals',
    description: 'View your goals or create new ones.',
    data: ['Stop criticizing myself', 'Eat more healthy foods', 'Go to the gym more often', 'Get a new job', 'Enjoy life more', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
  }
];

const App = () => (
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
          <Text style={styles.header_title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    />
    <View style={styles.newGoalButton}>
      <Text style={styles.newGoalButton.text}>+</Text>
    </View>
  </SafeAreaView>
);

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
    marginBottom: 8,
  },
  header_title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20
  },
  title: {
    fontSize: 16,
  },
  newGoalButton: {
    backgroundColor: '#7285FF',
    aspectRatio: 1,
    borderRadius: 8,
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

export default App;


// export function App2() {
//   return (
//     <SafeAreaView style={styles_2.container}>
//         <SectionList>

//         </SectionList>
//         <Text style={styles_2.text}>Welcome to goals app!</Text>
//         <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles_2 = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   text: {
//     color: '#000000',
//   }
// });
