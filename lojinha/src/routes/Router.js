import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// ROTAS
import Categoria from "../screens/Categoria/Categoria";
import Home from '../screens/Home/Home';


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Categoria" component={Categoria} />

            </Stack.Navigator>
        </NavigationContainer>



    )
}
