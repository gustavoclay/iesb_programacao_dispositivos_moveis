import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import Citacoes from "../screens/Citacoes/Citacoes";
import Posts from "../screens/Posts/Posts";
import Usuarios from "../screens/Usuarios/Usuarios";


const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
    return (
        <NavigationContainer>

            <Drawer.Navigator>

                <Drawer.Screen name='Usuarios' component={Usuarios} />
                <Drawer.Screen name='Posts' component={Posts} />
                <Drawer.Screen name='Citacoes' component={Citacoes} />

            </Drawer.Navigator>

        </NavigationContainer>
    )
}
