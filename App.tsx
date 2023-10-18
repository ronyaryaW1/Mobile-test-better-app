import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PostDetailScreen from './screens/PostDetailScreen';
import FeedScreen from './screens/FeedScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="feed">
        <Stack.Screen
          name="feed"
          component={FeedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="post-detail"
          component={PostDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
