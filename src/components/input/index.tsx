import React, { forwardRef, LegacyRef } from "react"
import { View, Text, TextInput, TextInputProps } from "react-native"
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
icon?: React.ComponentProps<typeof MaterialIcons>['name'],
setState:(value:string)=> void,
state: string
}
export const Input = forwardRef((Prop: Props, ref: LegacyRef<TextInput> | null) => {

  const {state, setState, icon, placeholder, iconLeft, iconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress } = Prop;
  return (
    <>
    <Text>{title}</Text>
    <View style={styleInput.boxInput}>
      <TextInput placeholder={placeholder} style={styleInput.Input} value={state} onChangeText={(e) => setState(e)}/>
      <Text style={styleInput.iconeInput}><MaterialIcons name={icon} size={20} color={themas.colors.gray}/></Text>
  </View>
 </>
  )
})