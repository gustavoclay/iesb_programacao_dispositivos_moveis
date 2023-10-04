import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Detalhes from '../screens/detalhes/Detalhes'
import Restaurantes from '../screens/restaurantes/Restaurantes'

const Stack = createStackNavigator()

export default function Router() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
