import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import goal stack into app
import GoalStack from './goals/controllers/GoalStack.js';

const App = () => {
  return (
      <NavigationContainer>
        <GoalStack/>
      </NavigationContainer>
  );
}



export default App;
