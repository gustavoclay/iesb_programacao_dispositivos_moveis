
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home'
import ListaCarros from '../screens/ListaCarros/ListaCarros'
import ListaCarrosAsyncStorage from '../screens/ListaCarrosAsyncStorage/ListaCarros'
import StackPessoas from '../screens/Pessoas/StackPessoas'
import StackPessoasAsyncStorage from '../screens/PessoasAsyncStorage/StackPessoasAsyncStorage'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='PessoasAsyncStorage'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={ListaCarros} />
            <Drawer.Screen name="CarrosAsyncStorage" component={ListaCarrosAsyncStorage} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />
            <Drawer.Screen name="PessoasAsyncStorage" component={StackPessoasAsyncStorage} />

        </Drawer.Navigator>

    )
}