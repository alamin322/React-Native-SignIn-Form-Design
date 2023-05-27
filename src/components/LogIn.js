import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import IconEmail from 'react-native-vector-icons/Entypo';
import IconPassword from 'react-native-vector-icons/Foundation';

const LogIn = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    const [email, setEamil] = useState("");

    const [password, setPassword] = useState("");

    // Fetching users data from database
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://10.0.2.2:8000/show/');
                // setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error occurred while fetch users data")
                console.error(error);
            }
        };

        fetchUsers();

    }, []);


    // Creating new users functionality
    const user_logIn = async () => {
        if (email.length > 0 && password.length > 0) {
            try {
                const response = await axios.post(
                    url = "http://10.0.2.2:8000/create/", data = { user_email: email, password: password });
                // console.log("This is response data after created: ", response.data)
                setEamil('');
                setPassword('')
                Alert.alert("Your user name and password incorrect");
            } catch (error) {
                console.log("Error occurred while create new users")
                console.log("This is error: ", error);
            }
        } else {
            if (email.length === 0 && password.length === 0) {
                Alert.alert("You not provided Email and Password!!!");
            } 
            else if (password.length === 0){
                Alert.alert("Password field is empty!!!");
            } else {
                Alert.alert("Email field is empty!!!");
            }
        }
    };



    // Show data on terminal
    console.log("Email", email);
    console.log("Email", email.length);
    console.log("password", password);
    console.log("password", password.length);


    // For naviagte to forgot password page
    const handleForget = () => {
        navigation.navigate("Forgot");
    }

    // Demo button click handler function
    const buttonClick = () => {
        Alert.alert("Something went wrong")
    };


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
                    onChangeText={(text) => { setEamil(text) }}
                    placeholder='Email...'
                    placeholderTextColor={"black"}
                />
            </View>

            <View style={styles.inputView}>
                <IconPassword name="key" size={25} color="#818181" style={styles.email_icon} />
                <TextInput
                    style={styles.inputText}
                    value={password}
                    onChangeText={(pass) => { setPassword(pass) }}
                    secureTextEntry
                    placeholder='Password...'
                    placeholderTextColor={"black"} />
            </View>


            <TouchableOpacity>
                <Text style={styles.forgot} onPress={handleForget}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={user_logIn}>
                    LOGIN
                </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity>
                <Text style={styles.loginText} onPress={signupBtnHandle}>
                    Signup
                </Text>
            </TouchableOpacity> */}


        </View>
    );
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
        color: "black"
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