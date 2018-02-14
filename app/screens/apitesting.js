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
import {DrawerNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import { Card, Button, FormLabel, FormInput, Icon } from "react-native-elements";


export default class apitesting extends React.Component{

	static navigationOptions ={
		drawerLabel: 'API Testing',
        drawerIcon: () => (
        <Icon
          name= 'computer'
          />)

	}

 constructor(props) {
        super(props);
        this.state = {
    isLoading: true,
    balance: [],
    joke: []
        }
    }
  
    getGeneralAccountInfo = function() {
        fetch('http://api.icndb.com/jokes/random')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    balance: responseJson.value.joke
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                Alert.alert('Oops no Internet');
            });
    }
   
    componentDidMount() {
        this.getGeneralAccountInfo();
	}
	render(){
        const {navigate} = this.props.navigation;
        const { balance } = this.state;

        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20, backgroundColor: "mintcream"}}>
              <Icon name = "menu"
        onPress={() =>
            this.props.navigation.navigate('DrawerOpen')}/>
                <ActivityIndicator />
              </View>
            );
        }
	return(
            <View style={{ padding: 20, backgroundColor: "mintcream", flex: 1}}>
            <Icon name = "menu"
        onPress={() =>
            this.props.navigation.navigate('DrawerOpen')}/>
                <Text style={{fontSize: 20, paddingTop: 30, paddingBottom: 30, color: 'black'}}>{this.state.balance}</Text>
            

            
            <Button 
            raised
            title = "Refresh"
		onPress={this.getGeneralAccountInfo}/>
			</View>
        )
    
  };
	}


