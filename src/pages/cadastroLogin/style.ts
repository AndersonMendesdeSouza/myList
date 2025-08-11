import { Dimensions, StyleSheet } from "react-native"
import { themas } from "../../global/themes"

export const styleSet = StyleSheet.create({
containerCadastro:{
 flex: 1,
justifyContent: "center",
alignItems: "center",
 
},
contexTop:{
    height:Dimensions.get('window').height/3,
    width: "100%",
    justifyContent: "center",
 alignItems: 'center',
 
},
contexMid:{
     height:Dimensions.get('window').height/4,
  width: "100%",
   alignItems: 'center',
   paddingHorizontal: 20, 
},
contexFooter:{
     height:Dimensions.get('window').height/3,
alignItems:"center",
  width: "100%"
},
logo:{
    width:80,
height:80
}
,
text:{
 marginTop:40,
 fontSize:25,
 fontWeight:'800'
},
button:{
    backgroundColor:themas.colors.primary,
    width:240,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:40,
    marginTop:100,
    shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
},
textButton:{
    fontSize:16,
    color:"#fff",
    fontWeight:600
},
textCriarConta:{
    fontSize:16,
    color:themas.colors.gray
}
})