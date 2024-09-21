import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        // backgroundColor:'blue',
        width:'100%',
        paddingHorizontal:37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        // backgroundColor:'green',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'

    },
    boxInput:{
        width:'100%',
        height:40,
        borderRadius:10,
        borderColor:themas.Colors.lightGray,
        backgroundColor:"#ffc000",
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30,
        
    },
    logo:{
        width:'100%',
        marginTop:40
    },
    text:{
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        
        height:'100%',
        width:'100%',
        //borderRadius:15,
        // paddingHorizontal:20
        
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold'
    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray
    },
    textBottomCreate:{
        fontSize:16,
        color:themas.Colors.primary
    }
})