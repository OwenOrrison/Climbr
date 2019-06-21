import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class CreateUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: "",
        password: ""
    }
  }
  createUser = () => {
    fetch('http://192.168.0.7:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          username: this.state.username,
          password:this.state.password,
        })
    })
    .then( (response) => 
    {console.log(response); return response.json()})
    .then((response) => {
        console.log(response)
         var username = response.username;
         AsyncStorage.setItem('username', username)
         this.props.navigation.navigate('Chat', {username})
      })
    .done()
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle="light-content"
        />
        <TextInput
            placeholder="username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType = "email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={(username)=> this.setState({username})}
            value={this.state.username}
        />
         <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            ref={(input)=> this.passwordInput=input}
            onChangeText={(password)=> this.setState({password})}
            value={this.state.password}
        />
        <TouchableOpacity 
        onPress={this.createUser}
        style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CREATE USER</Text>
        </TouchableOpacity>
      </View>
    );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10
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
