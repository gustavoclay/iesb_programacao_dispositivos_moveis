import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Citacoes from "../screens/Citacoes/Citacoes";
import Posts from "../screens/Posts/Posts";
import Usuarios from "../screens/Usuarios/Usuarios";


const Drawer = createDrawerNavigator();


export default function DrawerRoutes() {
    return (
        <NavigationContainer>

            <Drawer.Navigator>

                <Drawer.Screen
                    name='Usuarios'
                    component={Usuarios}
                    options={{
                        drawerLabel: 'Usuários',
                        drawerIcon: ({ color, size }) => {
                            return <Ionicons name='people-outline' color={color} size={size} />
                        }
                    }}
                />

                <Drawer.Screen
                    name='Posts'
                    component={Posts}
                    options={{
                        drawerLabel: 'Posts',
                        drawerIcon: ({ color, size }) => {
                            return <Ionicons name='newspaper-outline' color={color} size={size} />
                        }
                    }}
                />

                <Drawer.Screen
                    name='Citacoes'
                    component={Citacoes}
                    options={{
                        drawerLabel: 'Citações',
                        drawerIcon: ({ color, size }) => {
                            return <Ionicons name='book-outline' color={color} size={size} />
                        }
                    }}
                />

            </Drawer.Navigator>

        </NavigationContainer>
    )
}
