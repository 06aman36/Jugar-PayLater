import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import {Text, Button} from 'native-base';
import { bg} from '../../constants/Image';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      flag: '1',
      name: '',
      Password:''
    };
  }

  componentDidMount() {}
  login= () =>{
      if (this.state.name == 'aman' && this.state.Password == 12345 ) {
        this.props.navigation.navigate('Home')
      } else {
          alert('Please Type Correct UserName and PassWord!!!')
      }
  }
  handleUserName = text => {
    this.setState({name: text});
  };

  handlePassword = text => {
    this.setState({Password: text});
  }; 

  render() {
    return (
      <ImageBackground
        source={bg}
        style={{resizeMode: 'cover', height: '100%'}}>
        <StatusBar backgroundColor="blue" />

        {this.state.flag == '1' ? (
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}
            style={{
              borderWidth: 0,
              borderRadius: 10,
              height: 200,
              width: 300,
              margin: 50,
              top: '22%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                backgroundColor: 'white',
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              Welcome To LoginPage
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                top: '10%',
              }}>
              <Button
                onPress={() => this.setState({flag: '2'})}
                style={styles.buttonText}>
                <Text>Login</Text>
              </Button>
              <Button
                onPress={() => alert('Coming soon')}
                style={styles.buttonText}>
                <Text>Create Account</Text>
              </Button>
            </View>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}
            style={{
              borderWidth: 0,
              borderRadius: 10,
              height: 200,
              width: 300,
              margin: 50,
              top: '22%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                backgroundColor: 'white',
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              Enter Details Here to login
            </Text>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={this.handleUserName}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={this.handlePassword}
              />
              <Button
                onPress={() => this.login()}
                style={styles.buttonText1}>
                <Text style={{color: '#3b5998', fontWeight: 'bold'}}>
                  Login
                </Text>
              </Button>
            </View>
          </LinearGradient>
        )}
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonText1: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#42A5F5',
    backgroundColor: 'lightgray',
    bottom: 90,
    left: '100%',
    borderTopLeftRadius: 20,
    borderBottomEndRadius: 20,
  },
  input: {
    width: 200,
    height: 35,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
});
