import { View, Text } from "react-native";
import { styleLayout } from "./style";
import { TextInput } from "react-native-gesture-handler";
export function Layout() {
    return (
        <View style={styleLayout.container}>
 

            <View style={styleLayout.top}>
<Text>My<Text>List</Text></Text>
<TextInput placeholder="Digite um texto!"></TextInput>
            </View>

            <View style={styleLayout.med}></View>

            <View style={styleLayout.footer}></View>
           
        </View>
    )
}