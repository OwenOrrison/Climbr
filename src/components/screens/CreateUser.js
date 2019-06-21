import React, { Component } from "react";
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, Dimensions, Button, TouchableHighlight, Alert } from "react-native";
import CreateUserForm from './CreateUserForm';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class CreateUser extends Component {
    static navigationOptions = {
        header: null
      }
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logoPicture}
                    source={require('../images/mountain.jpg')} 
                    />
                    <Text style={styles.title}>Connect Today</Text>
                </View>
                <View style={styles.formContainer}>
                    <CreateUserForm 
                    navigation={this.props.navigation}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
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
        width: 150,
        height: 150,
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
})

export default CreateUser