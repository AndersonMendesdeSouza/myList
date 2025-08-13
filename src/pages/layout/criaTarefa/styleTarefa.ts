import { StyleSheet } from "react-native";
import { themas } from "../../../global/themes";

export const styleCriaTarefa = StyleSheet.create({
container:{
    backgroundColor:themas.colors.primary,
    width:"100%",
    height:300,
   marginTop:340,
   borderRadius:20,
   gap:30,
   alignItems:"center",
   paddingTop:40,

},
Containerinputs:{
backgroundColor:themas.colors.secondary ,
width:"85%",
flexDirection:"row",
 alignItems:"center",
 borderRadius:20
},
inputs:{
width: "90%",
   padding:10
},
button:{
backgroundColor:themas.colors.secondary,
paddingHorizontal:50,
paddingVertical:10,
borderRadius:20,
},
textButton:{
     
 fontWeight:800
},
})