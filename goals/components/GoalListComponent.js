import React from 'react';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import { ss } from '../../StyleSheet.js';
import { GetAllGoals } from "./../controllers/DB.js";

const GoalList = ( { navigation } ) => {

  const [goals, setGoals] = React.useState([]);

  const refreshGoals = () => {
    GetAllGoals((rows) => {
      setGoals(rows);
    });
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshGoals();
    });

    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }) => {
    return (
      <View style={ss.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  // define the actual component to return
  return (
    <View style={ss.container}>
      <FlatList
        data={goals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableHighlight style={ss.newGoalButton} onPress={() => navigation.navigate('MCII Introduction')}>
        <Text style={ss.newGoalButton.text}>+</Text>
      </TouchableHighlight>
    </View>
  )
};

export default GoalList;
