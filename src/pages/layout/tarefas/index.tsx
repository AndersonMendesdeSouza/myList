import { View, Text } from "react-native";
import { styleTarefa } from "./styleTarefas";
import { useState } from "react";
import { Iten } from "./iten";
import { Itarefa } from "../../../global/types/Itarefa";

export default function Tarefas({tarefa}:{tarefa:Itarefa[]}){
    return(
        <View style={styleTarefa.container}> 
           
     {tarefa.map((tarefa, index)=>(
 <Iten 
 key={index}
nome={tarefa.nome}
descricao={tarefa.descricao}
/>
           ))}
        </View>
    )
}