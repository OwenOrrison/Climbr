import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import io from "socket.io-client"

class Climbr extends Component {
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        const socket= io("http://192.168.0.7:3000")
      }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>Climbr</Text>
                    <Image 
                    style={styles.logoPicture}
                    source={require('../images/mountain.jpg')} 
                    />
                    <Text style={styles.title}>An app for connecting with other Climbers.</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.navigate('Create')}
                    style={styles.buttonText}
                    >CREATE USER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.navigate('LogIn')}
                    style={styles.buttonText}
                    >LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: "Merriweather-Italic",
        fontSize: 30,
        textAlign: "center",
        color: "#FFF",
        // flexGrow: 1,
    },
    container: {
        backgroundColor: "#3498db",
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent:'center'
    },
    logoPicture:{
        width: 200,
        height: 200,
        borderRadius: 20
    },
    button: {
        backgroundColor: "white",
        color: "white",
        width: 20 + "%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 40+ "%"

    },
    title:{
        color: '#FFF',
        marginTop: 10
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        paddingVertical: 15
    },
    buttonText: {
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '700'
    }
})

export default Climbr