import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Image,
	Alert, 
	ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import { Card, Button, FormLabel, FormInput, Icon, List, ListItem } from "react-native-elements";
import SearchBar from 'react-native-searchbar';


const items = [
  [ "Batman", "email: batman@batman.com", "information: information" ],
  [ "Robin", "email: jsjsjjs@jsjsj.com", "information: information" ],
  [ "Alfred", "email: alfie@jd.com", "information: information" ],
  [ "Joker", "email: wss@:D.com", "information: information" ],
  [ "John Doe", "email: jd@jd.com", "information: information" ],
  [ "lois Lane", "email: jd@jd.com", "information: information" ],
  [ "Anything", "email: jd@jd.com", "information: information" ],
  [ "Jon Snow", "email: jd@jd.com", "information: information" ],
];


const list = [
  {
    name: 'Batman',
    email: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    information: 'information'
  },
  {
    name: 'Robin',
    email: 'jsjsjjs@jsjsj.com',
    information: 'information'
  },

  {
    name: 'Alfred',
    email: 'alfie@jd.com',
    information: 'information'
  },
  {
    name: 'Joker',
    email: 'wss@:D.com',
    information: 'information'
  },
  {
    name: 'John Doe',
    email: 'jd@jd.com',
    information: 'information'
  },
  {
    name: 'Lois Lane',
    email: 'jd@jd.com',
    information: 'information'
  },
  {
    name: 'Anything',
    email: 'jd@jd.com',
    information: 'information'
  },
  {
    name: 'Homer',
    email: 'jd@jd.com',
    information: 'information'
  },
  {
    name: 'Jon Snow',
    email: 'jd@jd.com',
    information: 'information'
  },
];


export default class Search extends React.Component{

	static navigationOptions ={
		drawerLabel: 'Search',
        drawerIcon: () => (
        <Icon
          name= 'search'
          />)

	}
constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }
  

	render(){
      return (
      <View style={{flex: 1, backgroundColor:'mintcream'}}>
        <View style={{ marginTop: 110 }}>
          {
            this.state.results.map((result, i) => {
              return (
                <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? 'nothing found' : result.toString()}
                </Text>
              );
            })
          }
          <Button 
          rounded
          containerViewStyle = {{paddingLeft: 80, paddingRight: 80}}
          backgroundColor= "plum"
          title= "Enable Search"
           onPress={() => {this.searchBar.show() ? this.searchBar.hide() : this.searchBar.show()}}
        />
         
        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          placeholder={"Type to search"}
          handleResults={this._handleResults}
          showOnLoad
        />
<ScrollView>
<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
      />
    ))
  }
</List>
</ScrollView>

      </View>
    );
    
  };
	}