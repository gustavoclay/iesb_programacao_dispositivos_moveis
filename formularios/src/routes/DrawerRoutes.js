
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../screens/Home'
import ListaCarros from '../screens/ListaCarros/ListaCarros'
import ListaCarrosAsyncStorage from '../screens/ListaCarrosAsyncStorage/ListaCarros'
import StackPessoas from '../screens/Pessoas/StackPessoas'
import StackPessoasAsyncStorage from '../screens/PessoasAsyncStorage/StackPessoasAsyncStorage'
import StackPessoasFormularioAltoNivel from '../screens/PessoasFormularioAltoNivel/StackPessoasFormularioAltoNivel'
import Cadastro from '../screens/Cadastro/Cadastro'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Cadastro'>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={ListaCarros} />
            <Drawer.Screen name="CarrosAsyncStorage" component={ListaCarrosAsyncStorage} />
            <Drawer.Screen name="Pessoas" component={StackPessoas} />
            <Drawer.Screen name="PessoasAsyncStorage" component={StackPessoasAsyncStorage} />
            <Drawer.Screen name="FormularioAltoNivel" component={StackPessoasFormularioAltoNivel} />

            <Drawer.Screen name="Cadastro" component={Cadastro} />

        </Drawer.Navigator>

    )
}