import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// ROTAS
import Home from '../screens/home/Home'
import Posts from '../screens/posts/Posts'
import Usuario from '../screens/usuario/Usuario'


const Stack = createStackNavigator()

export default function Router() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Usuário' component={Usuario} />
                <Stack.Screen name='Posts' component={Posts} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
