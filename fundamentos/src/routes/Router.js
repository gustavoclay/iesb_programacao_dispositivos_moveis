import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';



import TelaA from "../screens/TelaA/TelaA";
import TelaB from "../screens/TelaB/TelaB";
import TelaC from "../screens/TelaC/TelaC";


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export default function Router() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="TelaB"
      >

        <Tab.Screen
          name="TelaA"
          component={TelaA}
          options={{
            tabBarLabel: 'TELA A',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="home" size={size} color={color} />
            }
          }} />

        <Tab.Screen
          name="TelaB"
          component={TelaB}
          options={{
            tabBarLabel: 'TELA B',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="cog" size={size} color={color} />
            }
          }} />

        <Tab.Screen
          name="TelaC"
          component={TelaC}
          options={{
            tabBarLabel: 'TELA C',
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="brush" size={size} color={color} />
            }
          }} />


      </Tab.Navigator>

    </NavigationContainer>
  )
}
