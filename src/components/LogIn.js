import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconEmail from 'react-native-vector-icons/Entypo';
import IconPassword from 'react-native-vector-icons/Foundation';

const LogIn = () => {
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");

    console.log("Email", email);
    console.log("password", password);

    const buttonPressed = () => {
        Alert.alert("something")
    }

    // const signupBtnHandle = () => {
    //     Alert.alert("Button clicked");
    // }

    return (
        <View style={styles.container}>

            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../assets/Logo-23.png")} />
            </View>

            {/* Logo */}
            <Text style={styles.logoText}>
                Nimusoft Technologys Ltd.
            </Text>

            {/* input fields */}
            <View style={styles.inputView}>
                <IconEmail name="mail" size={25} color="#818181" style={styles.email_icon} />
                <TextInput
                    style={styles.inputText}
                    value={email}
                    onChangeText={setEamil}
                    placeholder='Email...'
                    placeholderTextColor={"black"}
                />
            </View>

            <View style={styles.inputView}>
                <IconPassword name="key" size={25} color="#818181" style={styles.email_icon} />
                <TextInput
                    style={styles.inputText}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder='Password...'
                    placeholderTextColor={"black"} />
            </View>


            <TouchableOpacity>
                <Text style={styles.forgot}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
                <Text style={styles.loginText} onPress={signupBtnHandle}>
                    Signup
                </Text>
            </TouchableOpacity> */}


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f7fa",
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo_container: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 8
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#2169b5",
        marginTop: 20,
        marginBottom: 50
    },

    email_icon: {
        marginRight: 10,
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
        marginBottom: 20,
    },

    // inputView: {
    //     width: "80%", 
    //     backgroundColor: "white",
    //     borderRadius: 25,
    //     height: 50,
    //     marginBottom: 20,
    //     justifyContent: "center",
    //     padding: 20,
    //     borderWidth: 1,
    // },

    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "gray",
        fontSize: 13
    },
    loginBtn: {
        width: "80%",
        // backgroundColor: "#fb5b5b",
        backgroundColor: "#2169b5",
        borderRadius: 25,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 10
    },
    loginText: {
        color: "white",
    }
});



export default LogIn;