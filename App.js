import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { JournalProvider } from './JournalContext';
import Home from './screens/Home';
import Calendar from './screens/Calendar';
import Equipment from './screens/Equipment';
import Clothing from './screens/Clothing';
import WorkoutJournal from './screens/WorkoutJournal';
import JournalDetail from './screens/JournalDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <JournalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: 'MyGrind' }} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Equipment" component={Equipment} />
          <Stack.Screen name="Clothing" component={Clothing} />
          <Stack.Screen name="WorkoutJournal" component={WorkoutJournal} options={{ title: 'MyGrind' }} />
          <Stack.Screen name="JournalDetail" component={JournalDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </JournalProvider>
  );
}


