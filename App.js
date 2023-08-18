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
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <JournalProvider>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
    name="Home" 
    component={Home} 
    options={{ 
      headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>My</Text>
              <View style={{ 
                  backgroundColor: '#FFF', 
                  borderRadius: 8, // Adjust this value to your liking
                  paddingLeft: 5, 
                  paddingRight: 5, 
                  marginLeft: 1,
                  overflow: 'hidden' // This ensures the Text component respects the rounded borders
                  
              }}>
                  <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Grind</Text>
              </View>
          </View>
      ),
      headerTransparent: true,   
      headerTintColor: '#FFF',
      headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
      },
  }}
   
/>


          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen 
    name="Equipment" 
    component={Equipment} 
    options={{ 
        headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>My</Text>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, paddingLeft: 5, paddingRight: 5, marginLeft: 1 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Grind</Text>
                </View>
            </View>
        ),
        headerTransparent: true,   
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
        },
    }} 
/>

<Stack.Screen 
    name="Clothing" 
    component={Clothing} 
    options={{ 
        headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>My</Text>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, paddingLeft: 5, paddingRight: 5, marginLeft: 1 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Grind</Text>
                </View>
            </View>
        ),
        headerTransparent: true,   
        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
        },
    }} 
/>

<Stack.Screen 
    name="WorkoutJournal" 
    component={WorkoutJournal}
    options={{ 
        headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 24 }}>My</Text>
                <View style={{ backgroundColor: '#FFF', borderRadius: 8, paddingLeft: 5, paddingRight: 5, marginLeft: 1 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24 }}>Grind</Text>
                </View>
            </View>
        ),
        headerTransparent: true,   
        headerTintColor: '#FFF',
    }} 
  />
          <Stack.Screen name="JournalDetail" component={JournalDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </JournalProvider>
  );
}


