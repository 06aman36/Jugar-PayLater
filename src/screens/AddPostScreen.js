import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet,
  Share,
  TextInput,
} from 'react-native';
import {Button} from 'native-base';

import {bg, like, back, upload} from '../../constants/Image';
import LinearGradient from 'react-native-linear-gradient';
const customData = require('../../constants/customData.json');

export default class AddPostScreen extends React.Component {
  componentDidMount() {}
  state = {
    Caption: '',
    players: {},
    list: [
      {
        name: 'Sample',
        Caption: 'sample Caption',
      },
    ],
  };
  

  handleCaption = text => {
    this.setState({Caption: text});
  };

  postCaption = () => {
    if (this.state.Caption !== '') {
      const players = this.state.list.slice(0);

      this.state.list.push({
        name: customData.name,
        Caption: this.state.Caption,
      });

      this.setState({
        players: players,
      });
      alert('Post Save Successfully')
      this.props.navigation.navigate('Home',{
        Caption: this.state.Caption
      
      })
    } else {
      alert('Please Enter Caption');
    }
  };
  render() {
    return (
      <View style={{flex: 1, padding: 20, backgroundColor: '#cedbed'}}>
        <View style={{flexDirection: 'row', bottom: 10}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{}}>
            <Image
              source={back}
              style={{height: 30, width: 40, borderRadius: 30}}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: '4%',
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {customData.PostScreen.title}
          </Text>
        </View>

        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}
          style={{
            borderWidth: 0,
            borderRadius: 10,
            height: 200,
            width: Dimensions.get('screen').width / 1.2,
            alignSelf: 'center',
            top: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              backgroundColor: 'white',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {customData.PostScreen.sel}
          </Text>

          <TouchableOpacity
            onPress={() => alert('upload photo')}
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'center',
              height: 65,
              width: 70,
              backgroundColor: '#42A5F5',
              borderRadius: 50,
              top: '15%',
            }}>
            <Image
              source={upload}
              style={{height: 40, width: 40, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </LinearGradient>
        <View style={{height: '5%'}} />
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Caption :{' '}
          </Text>

          <TextInput
            style={{
              marginVertical: 10,
              marginHorizontal: 7,
              height: 40,
              borderColor: '#7a42f4',
              borderWidth: 1,
              width: '90%',
            }}
            underlineColorAndroid="transparent"
            placeholder="Enter Caption"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleCaption}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.postCaption()}
          style={styles.buttonText1}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 20,
            }}>
            Post
          </Text>
        </TouchableOpacity>
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
  buttonText1: {
    backgroundColor: '#42A5F5',
    alignSelf: 'center',
    top: Dimensions.get('screen').height / 6,
    width: '70%',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },
});
