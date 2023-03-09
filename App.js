import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import goal stack into app
import GoalStackController from './goals/GoalStackController.js';

const App = () => {
  return (
      <NavigationContainer>
        <GoalStackController/>
      </NavigationContainer>
  );
}

export default App;
