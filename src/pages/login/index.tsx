import { View, Image, Text, TextInput, Pressable, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { styleLogin } from './style'
import Logo from '../../assets/logo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from '../../global/themes'
import { useState } from 'react'
import { Input } from '../../components/input'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
const navigation = useNavigation();

    const [email, setEmail] = useState('ROOT')
    const [password, setPassword] = useState('root')

    const [loading, setLoading] = useState(false)
const [secure, setSecure] = useState(true)

function setarSecure(){
   setSecure(valor => !valor)
}
    async function getLogin() {
        try {

            if (!email || !password) {
                return Alert.alert("Atenção", "Informe o email e a senha!")
            }
            setLoading(true)
            setTimeout(() => {
                if (email === "ROOT" && password === "root") {
                    Alert.alert("Sucesso", "Usuario logado!") 
                   navigation.navigate('Layout' as never)
                } else {
                    alert("Email ou senha incorreto!")
                }
            }, 2000);

        } catch (error) {
            alert("erro")
        }
        finally {
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }

        setEmail("")
        setPassword("")
    }
    function criarConta() {
         navigation.navigate('CadastroLogin' as never)
    }
    return (
        <View style={styleLogin.containerLogin}>

            <View style={styleLogin.contexTop}>
                <Image source={Logo} style={styleLogin.logo}
                    resizeMode='contain' />
                <Text style={styleLogin.text}>Olá, Seja bem vindo! </Text>
            </View>

            <View style={styleLogin.contexMid}>


                <Input title={"E-mail:"} placeholder='Email' icon='email'  setState={setEmail} state={email} secureTextEntre={false} setSecureTextEntre={()=> false} />



                <Input title={"Senha:"} placeholder='Senha' icon='password' setState={setPassword} state={password} secureTextEntre={secure} setSecureTextEntre={setarSecure} />
        

            </View>
            <View style={styleLogin.contexFooter}>
                <TouchableOpacity style={styleLogin.button} onPress={() => getLogin()}>
                    {loading ? <ActivityIndicator color={'#fff'} size={'small'} /> : <Text style={styleLogin.textButton}>Entrar</Text>}

                </TouchableOpacity>
            </View>

            <Text style={styleLogin.textCriarConta}>Crie sua conta. <TouchableOpacity onPress={() => criarConta()} style={{ marginTop: 10 }}><Text style={{ color: themas.colors.primary, fontSize: 16 }}>Criar conta </Text></TouchableOpacity> </Text>
        </View>
    )
}