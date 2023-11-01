import { createStackNavigator } from '@react-navigation/stack'
import FormPessoasFormularioAltoNivel from './FormPessoasFormularioAltoNivel.js'
import ListaPessoasFormularioAltoNivel from './ListaPessoasFormularioAltoNivel.js'

const Stack = createStackNavigator()

export default function StackPessoasFormularioAltoNivel() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaPessoasFormularioAltoNivel'
        >

            <Stack.Screen name='ListaPessoasFormularioAltoNivel' component={ListaPessoasFormularioAltoNivel} />

            <Stack.Screen name='FormPessoasFormularioAltoNivel' component={FormPessoasFormularioAltoNivel} />

        </Stack.Navigator>

    )
}
