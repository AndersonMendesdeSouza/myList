import { Dimensions, StyleSheet } from "react-native"
import { themas } from "../../global/themes"


export const styleLayout = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  
 } , 
 containerCriaTarefa:{
 position:"absolute"
 } ,
 top: {
  backgroundColor:themas.colors.primary,
  width:"100%",
  height:Dimensions.get("window").height/5,
  justifyContent:"center",
alignItems:"center",
gap:20,
paddingTop:50
 },
 barraPesquisa:{
 
width:"87%",
borderRadius:20,
padding:10
 },
  containerInput:{
backgroundColor:themas.colors.lightGray,
width:"80%",
borderRadius:20,
flexDirection:"row",
alignItems:"center"
 },
 nome1:{
fontSize:25,
color:themas.colors.secondary,
fontWeight:800
 },
 nome2:{
fontSize:18,
color:themas.colors.bdScreen,
fontWeight:500
 },
 med:{
  backgroundColor:themas.colors.bdScreen,
  width:"100%",
  height:Dimensions.get("window").height/1.4 ,
  alignItems:"center"
 },
 footer:{
  backgroundColor:themas.colors.primary,
  width:"100%",
  height:Dimensions.get("window").height/7,
  alignItems:"center",
 paddingTop:10
 },


}
)