import { View, Image, Text, TextInput, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { style } from './style'
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from '../../global/themes'
import { useState } from 'react'
export default function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [loading, setLoading] = useState(false)
async function getLogin(){
    try {
       
       if(!email || !password) {
        return Alert.alert("Atenção", "Informe o email e a senha!")
       }
        setLoading(true)
       setTimeout(() => {
        if(email === "andersonmendes2007@gmail.com" && password === "1234"){
   Alert.alert("Sucesso", "Usuario logado!")
        }else{
alert("Email ou senha incorreto!")
        }
       }, 2000);
     
    } catch (error) {
        alert("erro")
    }
    finally{
         setTimeout(() => {
          setLoading(false)
       }, 2000);
    }

    setEmail("")
    setPassword("")
}
    return (
        <View style={style.containerLogin}>

            <View style={style.contexTop}>
                <Image source={Logo} style={style.logo}
                    resizeMode='contain' />
                <Text style={style.text}>Olá, Seja bem vindo! </Text>
            </View>

            <View style={style.contexMid}>
                <Text style={style.titleInput}>E-mail:</Text>
                <View style={style.boxInput}> <TextInput style={style.Input}
                value={email}
                 placeholder='Email' 
                 onChangeText={(e) => setEmail(e)}></TextInput>
                <Text style={style.iconeInput}><MaterialIcons name='email' size={20} color={themas.colors.gray}/></Text>
                 </View>
               
                <Text style={style.titleInput}>Senha:</Text>
                  <View style={style.boxInput}>
                <TextInput style={style.Input} placeholder='Senha' value={password} onChangeText={(e) => setPassword(e)}></TextInput>
                <Text style={style.iconeInput}><MaterialIcons
                name='password' size={20} color={themas.colors.gray}/></Text>
            </View>

</View>
            <View style={style.contexFooter}>
           <TouchableOpacity style={style.button} onPress={()=> getLogin() }>
            {loading ? <ActivityIndicator color={'#fff'} size={'small'}/> : <Text style={style.textButton}>Entrar</Text> }
          
           </TouchableOpacity>
            </View>

<Text style={style.textCriarConta}>Crie sua conta. <Text style={{color:themas.colors.primary}}>Criar conta </Text></Text>
        </View>
    )
}