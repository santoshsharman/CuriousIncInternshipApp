import React, {Component} from 'react';
import {
	ScrollView,
	StyleSheet,
	
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
import { Card, Button, Text, Avatar, Header, SearchBar, Icon } from "react-native-elements";
import MapView from 'react-native-maps';


export default class map extends React.Component{

	static navigationOptions ={
		drawerLabel: 'Map',
 drawerIcon: () => (
        <Icon
          name= 'map'
          />)

	}


	render() {
     const {navigate} = this.props.navigation;

  return  <View style={styles.container}>
   <MapView
   region={{
                latitude: 52.3015493,
                longitude: 4.6939769,
                latitudeDelta: 3,
                longitudeDelta: 4,
              }}
   style={styles.map}
   liteMode={true}
   showsUserLocation={false}
   userLocationAnnotationTitle={'You are here'}
   showsTraffic={true}
   maxZoomLevel={15}
   loadingEnabled={true}
   loadingIndicatorColor={'goldenrod'}
   loadingBackgroundColor={'ivory'}
  />
  </View>
}
}

const styles = StyleSheet.create({

  container: {
   position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
})
