import React, { Component } from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity } from 'react-native';
import firebase, { db } from '../config/Firebase';
import { TextInput } from 'react-native-gesture-handler';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  func = (userId) =>{
    const user = {
      pancard: this.state.pancard,
      aadhar: this.state.aadhar,
      phone:this.state.phone,
      emailId:this.state.emailId
      }
    db.collection("users")
      .doc(userId)
       .set(user)

    this.props.navigation.navigate('Cardupload')
  }
  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      pancard: this.state.pancard,
      aadhar: this.state.aadhar,
      phone:this.state.phone,
      emailId:this.state.emailId

    }
      const userId =  firebase.auth().currentUser.uid;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="pancard"
          value={this.state.pancard}
          onChangeText={(val) => this.updateInputVal(val, 'pancard')}
        />  
        <TextInput
          style={styles.inputStyle}
          placeholder="Aadhar card"
          value={this.state.aadhar}
          onChangeText={(val) => this.updateInputVal(val, 'aadhar')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Phone number"
          value={this.state.phone}
          onChangeText={(val) => this.updateInputVal(val, 'phone')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="email-id"
          value={this.state.emailId}
          onChangeText={(val) => this.updateInputVal(val, 'emailId')}
        />
        <TouchableOpacity style={styles.button} onPress={()=>this.func(userId)}>
                  <Text style={styles.buttonText}>Submit</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
  marginBottom: 15,
  paddingVertical: 5,
  alignItems: 'center',
  backgroundColor: '#66B2FF',
  borderColor: '#66B2FF',
  borderWidth: 1,
  borderRadius: 5,
  width: 200
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});