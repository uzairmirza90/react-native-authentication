import React, {useState} from "react";
import { Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet, TextInput } from "react-native";
import { Buffer } from "buffer";
import axios from "axios";

const Login = ({navigation}) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // let url = 'https://vast-castle-68704.herokuapp.com';
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjNlOWU4MzY0NWE1MDAxNjY4YjIwMCIsImlhdCI6MTY0NDg2ODQzMX0.L2qQYRHT9YBb0420NJcx2t_hhxdFTNYKny9UQv7wxOQ';

    // const loginAPI = async (email,password) => {
    //     const authHeader = `Basic ${Buffer.from(`${email}:${password}`).toString('base64')}`; 
    //     console.log(authHeader)
    //     return await axios({
    //     headers : {
    //     Authorization : authHeader
    //     },
    //     method : 'POST',
    //     url : `https://vast-castle-68704.herokuapp.com/auth/signin `,
    //     data : {access_token : `${'Bu41f12eUooPmWq75yIrDjLMjcavrviN'}`}
    //     })
        
    //     }
        
        
    
    
    return (
        <KeyboardAvoidingView 
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TextInput
                style={styles.inputField}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <TextInput 
                style={styles.inputField}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => loginAPI(email, password)}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            <View>
        </View>
    </View>
        
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        flexDirection: 'column'
    },
    inputField: {
        height: '8%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        margin: 10, 
        paddingLeft: 15,
    },
    buttons: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#008080',
        width: '45%',
        alignItems: 'center',
        margin: 20,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Login;