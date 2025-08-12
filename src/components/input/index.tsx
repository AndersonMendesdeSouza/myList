import React, { forwardRef, LegacyRef } from "react"
import { View, Text, TextInput, TextInputProps, KeyboardTypeOptions } from "react-native"
import { styleInput } from "./style"
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'
import { themas } from "../../global/themes"
  

type iconComponents = React.ComponentType<React.ComponentType<typeof MaterialIcons>> |
  React.ComponentType<React.ComponentType<typeof FontAwesome>> |
  React.ComponentType<React.ComponentType<typeof Octicons>>;

type Props = TextInputProps & {
  iconLeft?: iconComponents,
  iconRight?: iconComponents,
  iconLeftName?: string,
  iconRightName?: string,
  title?: string,
  onIconLeftPress?: () => void,
  onIconRightPress?: () => void,
  placeholder?: string,
icon?: React.ComponentProps<typeof MaterialIcons>['name'] ,
setState:(value:string)=> void,
state: string,
secureTextEntre: boolean,
setSecureTextEntre:() => void,
Typekeyboard?: KeyboardTypeOptions
}
export const Input = forwardRef((Prop: Props, ref: LegacyRef<TextInput> | null) => {

  const {Typekeyboard, state, setState, icon, placeholder, iconLeft, iconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, secureTextEntre,setSecureTextEntre } = Prop;
  return (
    <>
    <Text>{title}</Text>
    <View style={styleInput.boxInput}>
      <TextInput keyboardType={Typekeyboard} placeholder={placeholder} style={styleInput.Input} value={state} onChangeText={(e) => setState(e)} secureTextEntry={secureTextEntre}/>
      <Text style={styleInput.iconeInput}><MaterialIcons name={icon} size={25} color={themas.colors.gray} onPress={() => setSecureTextEntre()}/></Text>
  </View>
 </>
  )
})