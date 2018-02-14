import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	
	Image,
	Alert, 
	ActivityIndicator
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import Environment from '../../Environment';
import Secured from './Secured';

export default class Login extends React.Component {
static navigationOptions = {
	header:null
};

render(){

	const {navigate} = this.props.navigation;
	return (
		<View style={{ backgroundColor:'mintcream', flex:1}}>
		<Image style={{padding: 10, height: 120, width: 450}} source={ require("../images/9.jpg")}/>
		<View style={{ backgroundColor:'mintcream', flex:1, padding: 20}}>
          <Card style={{ backgroundColor:'antiquewhite'}}>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

       </Card>
       </View>
    <View style={{ padding: 10}}>
		<Button title = "Login"
		backgroundColor = "plum"
		onPress={() =>
			navigate('Secured')}/>
			</View>
			</View>
			);
}
}
