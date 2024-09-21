import { style } from "./styles";
import Logo from '../../assets/Logo.png'


import { Text, View, Image, TextInput, } from 'react-native'

export default function Login() {

    return (


        <View style={style.container}>
            {/* ---------------essa View seria do logo------------------ */}

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo} />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            {/* ----------------essas dos inputs------------------------ */}

            <View style={style.boxMid}>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                </View>
            </View>

            {/* ---------------------essa dos botoes- ------------------ */}


            <View style={style.boxBottom}>


            </View>

            {/* ------------------------------------ --------------------- */}


            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}>Crie agora</Text></Text>
        </View>
    )
}








