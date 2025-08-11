import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
 import CadastroLogin from './src/pages/cadastroLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Layout } from './src/pages/layout';
type Navegacao = {
  Login: undefined,
  CadastroLogin: undefined;
  Layout: undefined

}

const Stack = createNativeStackNavigator<Navegacao>();

export default function App() {

  return (
<GestureHandlerRootView style={{flex:1}}> 
<NavigationContainer>
<Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}} > 
<Stack.Screen name='Login' component={Login}/>
<Stack.Screen name='CadastroLogin' component={CadastroLogin}/>
<Stack.Screen name='Layout' component={Layout}/>
</Stack.Navigator>
</NavigationContainer>
</GestureHandlerRootView> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
