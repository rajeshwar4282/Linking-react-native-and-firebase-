import React, { Component ,useState} from 'react';
import { StyleSheet, View, Text, Button ,Image} from 'react-native';
import firebase, { db } from '../config/Firebase';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
      pancard:'',
      aadhar:'',
      phone:'',
      image:'',
      username:''
    }
  }
componentDidMount  ()  {
  
const userId= firebase.auth().currentUser.uid;
   db.collection('users')
  .doc(userId)
  .get().then(doc => {
    if (doc.exists) {
      this.setState({pancard:doc.data().pancard,
      aadhar:doc.data().aadhar,
    phone:doc.data().phone,
  username:doc.data().username,
image:doc.data().image,
     image1:doc.data().image1 ,
     email:doc.data().emailId
      })
  }
  })
   
} 
signOut = () => {
  firebase.auth().signOut().then(() => {
    this.props.navigation.navigate('Login')
  })
  .catch(error => this.setState({ errorMessage: error.message }))
}  
  render() {
    
    var img=this.state.image;
    return (
      <View style={styles.container}>
        <SimpleLineIcons style={{alignSelf:'flex-end'}} name="logout" size={24} color="black" onPress={()=>this.signOut()} />
        <Text style={{ fontSize:12,alignSelf:'flex-end'}}>log-out</Text>
       <Image
       style={{height:100,width:100,marginBottom:20}}
      source={{
      uri:
      'https://cdn2.vectorstock.com/i/1000x1000/08/56/user-profile-login-or-access-authentication-icon-vector-28920856.jpg',
       }}
      />
        <Text style={{alignSelf:'flex-start',fontSize:12}}>USERNAME:</Text>
      <Text  style={styles.inputStyle}>
        {this.state.username}
        </Text>
       <Text style={{alignSelf:'flex-start',fontSize:12}}>PANCARD:</Text>
      <Text  style={styles.inputStyle}>
        {this.state.pancard}
        </Text>
        <Text style={{alignSelf:'flex-start',fontSize:12}}>AADHAR:</Text>
        <Text  style={styles.inputStyle}>
        {this.state.aadhar}
        </Text>
      <Text style={{alignSelf:'flex-start',fontSize:12}}>PHONE:</Text>
      <Text  style={styles.inputStyle}>
        {this.state.phone}
        </Text>
        <Text style={{alignSelf:'flex-start',fontSize:12}}>EMAIL-ID:</Text>
      <Text  style={styles.inputStyle}>
        {this.state.email}
        </Text>
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
    fontSize:15,
    marginBottom: 15,
    marginTop:8,
    paddingBottom: 0,
    alignSelf: 'center',
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