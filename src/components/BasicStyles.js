import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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