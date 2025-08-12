import { View, Text, TouchableOpacity, Alert, Image, ActivityIndicator } from "react-native";

import { Input } from "../../components/input";
import { useState } from "react";
 
import { styleSet } from "./style";
import Logo from '../../assets/logo.png'
import { themas } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";
 
export default function cadastroLogin() {
const navigate = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telefone, setTelefone] = useState('')
    const [loading, setLoading] = useState(false)
const [secure, setSecure] = useState(true)

function formatarTelefone(valor:string){
    const numeros = valor.replace(/\D/g,"")

    if(numeros.length <= 10){
        return numeros.replace(/(\d{2}) (\d{4}) (\d{0,4})/,"($1) $2-3");
    } else{
        return numeros.replace(/(\d{2}) (\d{5}) (\d{0,4})/,"($1) $2-3")
        setTelefone(numeros)
    }
}
function setsecure(){
    setSecure(valor => !valor)
}

    function setLogin() {
if(!email || !password || !telefone){
    Alert.alert("Atenção!", 'Informe os compos.')

}else{
    try  {
        
   
   setLoading(true)
setTimeout(() => {
 
    if(email === "andersonmendes@gmail.com" && password === "1234" && telefone.length === 9){
    Alert.alert("Sucesso!", 'Usuário encontrado.')}
    else{
        Alert.alert("Ops", "Usuario não encontrado")
    }
}, 
2000);
 } catch (error) {
        alert("Ops" + error)
    }finally{
     
        setTimeout(() => {
               setEmail("")
        setPassword("")
        setTelefone("")
              setLoading(false)
        }, 2000);
      
    }
}
    }
    function voltar(){
        navigate.navigate('Login' as never)
    }

    return (
        <View style={styleSet.containerCadastro}>

            <View style={styleSet.contexTop}>
                <Image source={Logo} style={styleSet.logo}
                    resizeMode='contain' />
                <Text style={styleSet.text}>Olá, Faça seu Cadastro!</Text>
            </View>

            <View style={styleSet.contexMid}>


                <Input title={"E-mail:"} placeholder='Email' icon='email' setState={setEmail} state={email} secureTextEntre={false} setSecureTextEntre={() => null}/>

                <Input title={"Senha:"} placeholder='Senha' icon={secure ? "visibility-off": "visibility"} setState={setPassword} state={password} secureTextEntre={secure} setSecureTextEntre={setsecure}/>

                <Input title={"Telefonne:"}  Typekeyboard="phone-pad" placeholder='00 00000-0000' icon='phone' setState={setTelefone} state={telefone}  secureTextEntre={false} setSecureTextEntre={() => null}/>


            </View>
            <View style={styleSet.contexFooter}>
                <TouchableOpacity style={styleSet.button} onPress={() => setLogin()}>
                    {loading ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styleSet.textButton}>Entrar</Text>}

                </TouchableOpacity>
            </View>

            <Text style={styleSet.textCriarConta}>Ja tenho uma conta. <TouchableOpacity onPress={() => voltar()} style={{ marginTop: 10 }}><Text style={{ color: themas.colors.primary, fontSize: 16 }}>Voltar </Text></TouchableOpacity> </Text>
        </View>
    )
}