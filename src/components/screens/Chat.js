import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import io from "socket.io-client"

export default class Chat extends Component {
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
      const chatMessages = this.state.chatMessages.map(chatMessage => <Text style={styles.chatBox} key={chatMessage}>{chatMessage}</Text>)
    return (
      <View
      style={styles.container}
      >
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
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3498db",
        flex: 1
    },
    textBox: {
        marginTop: 50, 
        height: 50,
        borderWidth: 2,
        backgroundColor: "#FFF"
    },
    chatBox: {
      marginTop: 10,
      backgroundColor: "#FFF",
      width: 50 + "%",
      borderWidth: 2,

    }

})
