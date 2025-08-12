import { View, Text} from "react-native";
import { styleTarefa } from "./styleTarefa";


export default function novaTarefa(){
    return(
        <View style={styleTarefa.container}> 
 

 <Text> Crie uma nova tarefa!</Text>

        </View>
    )
}