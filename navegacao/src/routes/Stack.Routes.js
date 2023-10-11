
import { createStackNavigator } from '@react-navigation/stack';
import Configuracoes from '../screens/Configuracoes/Configuracoes';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();


export default function StackRoutes() {
    return (

        <Stack.Navigator initialRouteName='Profile'>

            <Stack.Screen name='Profile' component={Profile} />

            <Stack.Screen name='Configuracoes' component={Configuracoes} />

        </Stack.Navigator>

    )
}

