import { Dimensions, StyleSheet } from "react-native"
import { themas } from "../../global/themes"


export const styleLayout = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  
 } ,  
 top: {
  backgroundColor:themas.colors.gray,
  width:"100%",
  height:Dimensions.get("window").height/4,
  flexDirection:"row"
 },
 med:{
  backgroundColor:themas.colors.gray,
  width:"100%",
  height:Dimensions.get("window").height/2.3
 },
 footer:{
  backgroundColor:themas.colors.primary,
  width:"100%",
  height:Dimensions.get("window").height/3
 }

}
)