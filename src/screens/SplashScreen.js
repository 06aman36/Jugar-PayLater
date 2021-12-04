import React from 'react';
import {View,Text,StyleSheet,} from 'react-native';

export default class SplashScreen extends React.Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,justifyContent:'center',backgroundColor:'#7a42f4'
        }}>
          <View style={{justifyContent:'center',alignSelf:'center', flexDirection:'row'}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:25}}>Jugar </Text>
            <Text style={{color:'#fdfd',fontWeight:'bold',fontSize:25}}>PayLater</Text>
          </View>
       
      </View>
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
  item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: 'white',
    height: 400,
    width: '95%',
    margin: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'white',
    paddingTop: 25,
    flexDirection: 'row',
  },
});
