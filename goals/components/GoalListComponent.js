import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { ss } from '../../StyleSheet.js';
import { GetAllGoals, DeleteGoal } from "./../controllers/DB.js";

const GoalList = ({ navigation }) => {

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

    function OnDeletePress() {
      Alert.alert(
        'Confirm',
        'Are you sure you want to delete this goal?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              DeleteGoal(item.id);
              refreshGoals();
            },
          },
        ],
        { cancelable: true }
      );
    }

    function ShowItemSummary() {
      const fields = JSON.parse(item.fields)
      const data = { user_input: fields, mode: 'edit', goal_id: item.id};
      navigation.navigate('Summary', data);
    }

    return (
      <TouchableOpacity onPress={ShowItemSummary}
        activeOpacity={.7}>
        <View style={[ss.item, ss.listItem]}>
          {/* <Text style={ss.goalType}>{item.type}</Text> */}
          <Text>{item.name}</Text>
          <Text onPress={OnDeletePress} style={ss.deleteButton}>DEL</Text>
        </View>
      </TouchableOpacity>
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
      <TouchableHighlight style={ss.newGoalButton} onPress={() => navigation.navigate('Create a Goal')}>
        <Text style={ss.newGoalButton.text}>+</Text>
      </TouchableHighlight>
    </View>
  )
};

export default GoalList;
