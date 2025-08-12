import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styleInput = StyleSheet.create({
    boxInput: {
        width: "90%",
        height: 45,
        borderColor: themas.colors.lightGray,
        marginTop: 5,
        paddingLeft: 10,
        alignItems:"center",
        flexDirection: "row",
    backgroundColor: themas.colors.lightGray,
    borderRadius:40,
   margin:20
    },
    iconeInput: {
        width:60,
        height:50,
   
      borderColor:"transparent",
   textAlign:"center",
   paddingTop:12,
    },
     Input: {
        borderColor: "black",
        flexDirection: "row-reverse",
        width: "80%",
        
        justifyContent: "space-between",
        borderRadius: 40,
        alignItems: "center",
        color:"black",
      
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.gray,


    },
    pressIcon:{
        
        width:50,
        
        
       
    }

})