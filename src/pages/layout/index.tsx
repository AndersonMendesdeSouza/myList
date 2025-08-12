import { View, Text } from "react-native";
import { styleLayout } from "./style";
import { Pressable, TextInput } from "react-native-gesture-handler";
 import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react";
import  NovaTarefa  from "../tarefa";

export function Layout() {

    const [tarefaOn, settarefaOn] = useState(false)


    function ativaTarefaOn(){
        settarefaOn(valor => !valor)
    }
    return (
        <View style={styleLayout.container}>
 

            <View style={styleLayout.top}>
<Text style={styleLayout.nome1}>My<Text style={styleLayout.nome2}>List</Text></Text>
<View style={styleLayout.containerInput}><TextInput placeholder="Faça uma pesquisa..." style={styleLayout.barraPesquisa }></TextInput> <MaterialIcons name="search-off" size={30}></MaterialIcons> </View>

            </View>

            <View style={styleLayout.med}> { tarefaOn? <NovaTarefa/> : null}</View>

            <View style={styleLayout.footer}>

              
                <Pressable onPress={()=> ativaTarefaOn()}> <MaterialIcons name="playlist-add" size={50} color={"white"}/> </Pressable>
             
            </View>
           
        </View>
    )
}