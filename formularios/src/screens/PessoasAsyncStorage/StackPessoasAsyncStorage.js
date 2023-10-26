import { createStackNavigator } from '@react-navigation/stack'
import FormPessoaAsyncStorage from './FormPessoaAsyncStorage.js'
import ListaPessoasAsyncStorage from './ListaPessoasAsyncStorage'

const Stack = createStackNavigator()

export default function StackPessoasAsyncStorage() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaPessoasAsyncStorage'
        >

            <Stack.Screen name='ListaPessoasAsyncStorage' component={ListaPessoasAsyncStorage} />

            <Stack.Screen name='FormPessoaAsyncStorage' component={FormPessoaAsyncStorage} />

        </Stack.Navigator>

    )
}
