import { View, Text, TouchableOpacity} from "react-native";
import { styleCriaTarefa } from "./styleTarefa";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Itarefa } from "../../../global/types/Itarefa";

interface propNovaTarefa{
 setTarefas:(valor:string)=>void
 //React.Dispatch<React.SetStateAction<Itarefa[]>>
}
export default function novaTarefa(prop:propNovaTarefa){
    const {setTarefas} = prop
const [tarefa, setTarefa] = useState({
    nome: "",
    descricao:""
})

    return(
        <View style={styleCriaTarefa.container}> 
        
<View style={styleCriaTarefa.Containerinputs}> 
    <TextInput style={styleCriaTarefa.inputs} placeholder="Nome da tarefa" value={tarefa.nome} onChangeText={(v) => setTarefa({...tarefa, nome: v})}></TextInput> 
<MaterialIcons name="edit" size={20}/>
</View>

<View style={styleCriaTarefa.Containerinputs}>
 <TextInput style={styleCriaTarefa.inputs} placeholder="Nome da tarefa" value={tarefa.descricao} onChangeText={v => setTarefa({...tarefa, descricao:v})}></TextInput>
     <MaterialIcons name="edit"size={20}/>
     </View>

<TouchableOpacity style={styleCriaTarefa.button}><Text style={styleCriaTarefa.textButton}>Adicionar</Text></TouchableOpacity>
        </View> 
    )
}