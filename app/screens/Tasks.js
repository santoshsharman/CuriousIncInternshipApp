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
import { Card, Button, FormLabel, FormInput, Icon, Header } from "react-native-elements";

const images = [
  {
    key: 1,
    name: "Robin",
    image: require("../images/8.jpg"),
    task: "Investigate bank robbery"
    
  },
  {
    key: 2,
    name: "Superman",
    image: require("../images/8.jpg"),
    task: "Dispose of Kryptonite"
    
  },
  {
    key: 3,
    name: "Alfred",
    image: require("../images/8.jpg"),
    task: "Test drive Batmobile"
  
  },
  {
    key: 4,
    name: "Wayne Enterprises",
    image: require("../images/8.jpg"),
    task: "Press Conference"
  
  },
   {
    key: 5,
    name: "Joker",
    image: require("../images/8.jpg"),
    task: "Why so serious?"
  
  }
];
export default class Tasks extends React.Component{

	static navigationOptions ={
		tabBarLabel: 'tasks',
		tabBarIcon: () => (
        <Icon
          name= 'home'
          />)

	}

	state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


	render() {
   const {navigate} = this.props.navigation;

		return <View style={{paddingTop: 10, backgroundColor:'mintcream'}}>

<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{padding: 20, backgroundColor:'mintcream', flex: 1}}>
          <View> 
          <Text style={{fontSize: 30, color: "black"}}>Task</Text> 
          <Image style={{width: 300, height: 300}}
          source={require('../images/8.jpg')}
        />
            <Text style={{fontSize: 30, color: "black"}}>Description:</Text>
            <Text style={{fontSize: 15
            }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>

<Icon name = "add"
		onPress={() =>
			Alert.alert('Task Added')}/>
            

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{padding: 40, color: "black"}}>Hide Details</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

		       <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, image, url, key, task }) => (
        <Card title={`Task by ${name}`} image={image} key={key} containerStyle={{backgroundColor:'antiquewhite', borderColor: 'antiquewhite'}}>
          <Text style={{ marginBottom: 10 }}>
           {task}
          </Text>
          <Button
            rounded
            backgroundColor="plum"
            title="View Details"
            color= "black"
            onPress={() => {this.setModalVisible(true)}}
          />
        </Card>
      ))}
    </ScrollView> 
              </View>
	}
}

