import React from "react";
import { Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, StyleSheet, TextInput } from "react-native";

const Register = ({navigation}) => {

    // export const SignupAPI = async (firstName,lastName,email,password ,role = "admin") => {
    //     return await axios({
    //     headers: {
    //     authorization: `Bearer ${process.env.REACT_APP_MASTER_TOKEN}`
    //     },
    //     method: 'POST',
    //     url: `${process.env.REACT_APP_BASE_URL}/user`,
    //     data: { firstName,lastName, email, password , role},
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
                placeholder="First Name"
                
                />
                <TextInput
                style={styles.inputField}
                placeholder="Last Name"
                
                />
                <TextInput
                style={styles.inputField}
                placeholder="Email"
                
                />
                <TextInput 
                style={styles.inputField}
                placeholder="Password"
                secureTextEntry={true}
               
                />
                <View style={styles.buttons}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    
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

export default Register;