import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Citacoes from '../screens/Citacoes/Citacoes';
import Profile from '../screens/Profile/Profile';
import TabRoutes from './Tab.Routes';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Inicio'>

                <Drawer.Screen name='Inicio' component={TabRoutes} />

                <Drawer.Screen name='Profile' component={Profile} />

                <Drawer.Screen name='Citacoes' component={Citacoes} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
