
import { View, Text} from "react-native"
import { styleIten } from "./style"
import { Itarefa } from "../../../../global/types/Itarefa"

export function Iten({nome, descricao}:Itarefa){
    return(
        <View style={styleIten.iten}> 
        <Text>{nome}</Text>
        <Text>{descricao}</Text>
         </View>
   )
}