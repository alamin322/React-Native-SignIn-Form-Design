//import liraries
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// create a component
const SplashScreen = ({ navigation }) => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.navigate("LogIn page")
    //     }, 2000)
    // }, []);

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("../assets/Logo-20.png")} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    logo: {
        width: 300,
        height: 80,
        resizeMode: 'stretch'
    }
});

//make this component available to the app
export default SplashScreen;
