import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FormPessoas from './FormPessoas';
import ListaPessoas from './ListaPessoas';

const Stack = createStackNavigator();


export default function StackPessoas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="ListaPessoas" component={ListaPessoas} />
                <Stack.Screen name="FormPessoas" component={FormPessoas} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
