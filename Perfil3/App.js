import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Define tus pantallas
function Inicio() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio</Text>
    </View>
  );
}

function Información() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Información</Text>
    </View>
  );
}

function Comidas() {
  const comidasFavoritas = [
    { id: '1', nombre: 'Pizza' },
    { id: '2', nombre: 'Sushi' },
    { id: '3', nombre: 'Tacos' },
    { id: '4', nombre: 'Pasta' },
    { id: '5', nombre: 'Hamburguesa' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Comidas favoritas</Text>
      <FlatList
        data={comidasFavoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Información') {
              iconName = focused
                ? 'school'
                : 'school-outline';
            } else if (route.name === 'Comidas') {
              iconName = focused
                ? 'fast-food'
                : 'fast-food-outline';
            }

            // Puedes devolver cualquier componente aquí
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Información" component={Información} />
        <Tab.Screen name="Comidas favoritas" component={Comidas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
