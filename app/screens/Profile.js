import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  Alert, 
  ActivityIndicator,
  Modal,
  TouchableHighlight
} from 'react-native';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import { Card, Button, FormLabel, FormInput, Icon, Header, Avatar, List, ListItem } from "react-native-elements";

const list =[

{title: 'Personal Information',
icon: 'account-box'
},
{
  title: 'Payments',
  icon: 'monetization-on'
},
{
  title: 'History',
  icon: 'history'
},

{
  title: 'Settings',
  icon: 'settings'
}
];
export default class Profile extends React.Component{

  static navigationOptions ={
    tabBarLabel: 'Profile',
    tabBarIcon: () => (
        <Icon
          name= 'home'
          />)

  }


  render() {
   const {navigate} = this.props.navigation;

    return <View style={{backgroundColor:'mintcream', flex: 1}}>

 <Card title="Bruce Wayne" containerStyle={{backgroundColor:'antiquewhite', borderColor: 'antiquewhite'}}>
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Avatar
  large
  rounded
  source={require('../images/6.jpg')}
  activeOpacity={0.7}
/>
      </View>
      <Button
        rounded
        backgroundColor="plum"
        title="Sign Out"
        color="black"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
<List containerStyle={{backgroundColor:'antiquewhite'}}>
{
  list.map((item,i)=> (
    <ListItem
    hideChevron= {true}
    key={i}
    title={item.title}
    leftIcon={{name: item.icon}}
    />
    ))
}
</List>
              </View>
  }
}

