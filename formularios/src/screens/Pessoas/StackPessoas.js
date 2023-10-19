import { createStackNavigator } from '@react-navigation/stack'
import FormPessoa from './FormPessoa'
import ListaPessoas from './ListaPessoas'

const Stack = createStackNavigator()

export default function StackPessoas() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaPessoas'
        >

            <Stack.Screen name='ListaPessoas' component={ListaPessoas} />

            <Stack.Screen name='FormPessoa' component={FormPessoa} />

        </Stack.Navigator>

    )
}
