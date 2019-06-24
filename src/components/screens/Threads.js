import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import io from "socket.io-client"

class Threads extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const { navigation } = this.props;
        const username = navigation.getParam('username', 'climber');
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>Climbr</Text>
                    <Image 
                    style={styles.logoPicture}
                    source={require('../images/mountain.jpg')} 
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('PRGChat', {username})}
                    style={styles.buttonText}
                    >PORTLAND ROCK GYM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('PGChat', {username})}
                    style={styles.buttonText}
                    >PLANET GRANITE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('TCEChat', {username})}
                    style={styles.buttonText}
                    >THE CIRCUIT - EAST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('TCSChat', {username})}
                    style={styles.buttonText}
                    >THE CIRCUIT - SOUTH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('TCTChat', {username})}
                    style={styles.buttonText}
                    >THE CIRCUIT - TIGARD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                    onPress={()=>this.props.navigation.push('Home')}
                    style={styles.buttonText}
                    >LOG OUT</Text>
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
        paddingVertical: 25,
        marginBottom: 10,
    },
    buttonText: {
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: '700'
    }
})

export default Threads