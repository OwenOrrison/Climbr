import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import io from "socket.io-client"

export default class TCTChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chatMessage: "",
        chatMessages: []
    };
  }
  static navigationOptions = {
    header: null
  }
  componentDidMount() {
    this.socket= io("http://192.168.0.7:3000");
    this.socket.on("chat message", msg => {
        this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });

  }
  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }
  render() {
      const { navigation } = this.props;
      const username = navigation.getParam('username', 'climber');
      const chatMessages = this.state.chatMessages.map(chatMessage => 
      <Text style={styles.chatBox} key={chatMessage}>{chatMessage} <Text style={styles.username}>-{username}</Text></Text>)
    return (
      <View
      style={styles.container}
      >
        <View style={styles.body}>
        <Text style={styles.title}>The Circuit - Tigard</Text>
        <TextInput
        style={styles.textBox} 
        autoCorrect={false}
        value= {this.state.chatMessage} 
        onSubmitEditing={ ()=> this.submitChatMessage()}
        onChangeText={chatMessage => {
            this.setState({ chatMessage });
        }}
        />
        {chatMessages}
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text 
                onPress={()=>this.props.navigation.navigate('Threads', {username})}
                style={styles.buttonText}
            >Threads</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    username: {
      textAlign: "right"
    },
    title:{
      marginTop: 50,
      textAlign: "center",
      color: '#FFF',
      fontSize: 20
    },
    container:{
        backgroundColor: "#3498db",
        flex: 1
    },
    body: {
        backgroundColor: "#3498db",
        flex: 1,
    },
    textBox: {
        marginTop: 10, 
        height: 50,
        borderWidth: 2,
        backgroundColor: "#FFF"
    },
    chatBox: {
      marginTop: 10,
      backgroundColor: "#FFF",
      width: 50 + "%",
      borderWidth: 2,
      padding: 10,
      // borderRadius: 10,

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