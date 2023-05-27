//import liraries
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconEmail from 'react-native-vector-icons/Entypo';
import IconPassword from 'react-native-vector-icons/Foundation';
import { styles } from '../components/BasicStyles';

// create a component
const ForgotPassword = ({ navigation }) => {
    const [email, setEamil] = useState("");


    const submitButtonHandle = () => {
        if (email.length === 0) {
            Alert.alert("Email is required.");
        } else {
            Alert.alert("Please Check you email to reset your password..");
        }
    }

    const handleBack = () => {
        navigation.navigate("LogIn page");
    }

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

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={submitButtonHandle}>
                    Submit
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={handleBack}>
                    Back
                </Text>
            </TouchableOpacity>

        </View>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#f5f7fa",
//         // backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     logo_container: {
//         borderWidth: 1,
//         borderColor: 'gray',
//         borderRadius: 10,
//         padding: 8
//     },
//     logo: {
//         width: 100,
//         height: 100,
//     },
//     logoText: {
//         fontWeight: "bold",
//         fontSize: 20,
//         color: "#2169b5",
//         marginTop: 20,
//         marginBottom: 50
//     },

//     email_icon: {
//         marginRight: 10,
//     },
//     inputView: {
//         width: "80%",
//         backgroundColor: "white",
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderRadius: 25,
//         borderColor: 'black',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         height: 50,
//         marginBottom: 20,
//     },

//     inputText: {
//         height: 50,
//         color: "black"
//     },
//     forgot: {
//         color: "gray",
//         fontSize: 13
//     },
//     loginBtn: {
//         width: "80%",
//         // backgroundColor: "#fb5b5b",
//         backgroundColor: "#2169b5",
//         borderRadius: 25,
//         height: 45,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 15,
//         marginBottom: 10
//     },
//     loginText: {
//         color: "white",
//     }
// });


//make this component available to the app
export default ForgotPassword;
