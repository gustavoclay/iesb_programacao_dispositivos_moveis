import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Citacoes from '../screens/Citacoes/Citacoes';
import Profile from '../screens/Profile/Profile';
import TabRoutes from './Tab.Routes';
import StackRoutes from './Stack.Routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Inicio'>

                <Drawer.Screen name='Inicio' component={TabRoutes} />

                <Drawer.Screen name='toProfile' component={StackRoutes} options={{
                    drawerLabel: 'Profile',
                    headerTitle: 'Profile',
                }}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
