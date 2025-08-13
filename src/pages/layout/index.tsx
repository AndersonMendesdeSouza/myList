import { View, Text } from "react-native";
import { styleLayout } from "./style";
import { Pressable, TextInput } from "react-native-gesture-handler";
 import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react";
import  NovaTarefa  from "./criaTarefa";

import Tarefas from "./tarefas";
import { Itarefa } from "../../global/types/Itarefa";

export function Layout() {

    const [tarefaOn, settarefaOn] = useState(false)
    function ativaTarefaOn(){
        settarefaOn(valor => !valor)
    }

const [tarefa, setTarefa] = useState<Itarefa[]>([
    {
nome: "Correr",
descricao: "Correr 10Km hoje"
    },
    {
nome: "Treinar",
descricao: "Treinar"
    },    {
nome: "Treinar",
descricao: "Treinar"
    }, 
])

    return (
        <View style={styleLayout.container}>
            <View style={styleLayout.top}>
<Text style={styleLayout.nome1}>My<Text style={styleLayout.nome2}>List</Text></Text>
<View style={styleLayout.containerInput}><TextInput placeholder="Faça uma pesquisa..." style={styleLayout.barraPesquisa }></TextInput> <MaterialIcons name="search-off" size={30}></MaterialIcons> </View>
            </View>
            <View style={styleLayout.med}> 

         <Tarefas tarefa={tarefa}/>
                    
                <View style={styleLayout.containerCriaTarefa}> { tarefaOn? <NovaTarefa setTarefas={setTarefa}/> : null} </View>

            </View>
            
            
            <View style={styleLayout.footer}>
                <Pressable onPress={()=> ativaTarefaOn()}> <MaterialIcons name="playlist-add" size={50} color={"white"}/> </Pressable>
            </View>
           
        </View>
    )
}