import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Información from './screens/informacion';
import Comidas from './screens/comidas';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Información') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Comidas favoritas') {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Información" component={Información} />
        <Tab.Screen name="Comidas favoritas" component={Comidas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;