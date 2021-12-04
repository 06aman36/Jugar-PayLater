import {Textarea} from 'native-base';
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
  ScrollView,
} from 'react-native';
import {bg, like, share} from '../../constants/Image';
import {ListItem, Avatar} from 'react-native-elements';
const customData = require('../../constants/customData.json');

export default class HomeScreen extends React.Component {
  componentDidMount() {}
  state = {
    value: null,
    liked: false,
    count: 0,
    players: {},
    comment: '',
    list: [
      {
        name: 'Sample',
        comment: 'sample Comment',
      },
    ],
  };

  onclickLike() {
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });
  }
  postComment = () => {
    if (this.state.comment !== '') {
      const players = this.state.list.slice(0);

      this.state.list.push({
        name: customData.name,
        comment: this.state.comment,
      });

      this.setState({
        players: players,
      });
    } else {
      alert('Please Enter Comment');
    }
  };
  handleComment = text => {
    this.setState({comment: text});
  };
  sharing() {
    Share.share({
      //diclare variable and store anything and share from Message
      message: 'https://www.linkedin.com/in/aman-kumar-8b834874/',
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  }
  render() {
    return (
      <View style={{flex: 1, padding: 20, backgroundColor: '#cedbed'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddPost')}
          style={{
            alignSelf: 'flex-end',
            borderRadius: 10,
            backgroundColor: 'gray',
            bottom: 5,
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            {customData.Home.Addpost}
          </Text>
        </TouchableOpacity>
        <Image
          source={bg}
          style={{
            width: Dimensions.get('screen').width / 1.2,
            height: '30%',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            paddingTop: 5,
          }}>
          {customData.Home.about}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 15,
          }}>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              onPress={() => this.onclickLike()}
              style={{backgroundColorL: '#fff'}}>
              <Image
                source={like}
                style={{
                  width: 60,
                  height: 60,
                }}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>{this.state.count}</Text>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => this.sharing()}
              style={{backgroundColorL: '#fff', top: 8}}>
              <Image
                source={share}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            {customData.Home.cmnt}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                marginVertical: 10,
                marginHorizontal: 7,
                height: 40,
                borderColor: '#7a42f4',
                borderWidth: 1,
                width: '80%',
              }}
              underlineColorAndroid="transparent"
              placeholder=" Enter Comments"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleComment}
            />
            <TouchableOpacity
              onPress={() => this.postComment()}
              style={{
                backgroundColor: '#9a73ef',
                alignSelf: 'center',
                justifyContent: 'center',
                padding: 9,
                borderRadius: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{
            backgroundColor: '#fff',
            opacity: 0.9,
          }}>
          <View>
            {this.state.list.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <View
                  style={{height: 35, width: 35, backgroundColor: 'gray',borderRadius:50}}
                />
                <ListItem.Content>
                  {/* <ListItem.Title>{l.name}</ListItem.Title> */}
                  <ListItem.Subtitle>{l.comment}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </ScrollView>
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
