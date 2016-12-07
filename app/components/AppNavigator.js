'use strict'

import React from 'react'
import {
	Navigator,
	Text,
  Dimensions
} from 'react-native';

import CatalogContainer from './CatalogContainer';
import HomeContainer from './HomeContainer';
import SessionContainer from './SessionContainer';

export default class AppNavigator extends React.Component
{

	_renderScene( route , navigator ) {

		const globalNavigatorProps = {navigator}

		switch(route.name) {

			case "Catalog":
				return <CatalogContainer navigator={navigator}/>;

			case "Home":
				return <HomeContainer navigator={navigator}/>;

			case "Login":
				return <SessionContainer show="login" navigator={navigator}/>;

			case "Register":
				return <SessionContainer show="register" navigator={navigator}/>;

			default:
				return (
					<Text style={{marginTop:25}}>
						{`Navigator went to undefiend route ${route.name}`}
					</Text>
				);

		}

	}

	render() {

		return(
			<Navigator
				configureScene={(route) => ({...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight})}
				initialRoute={this.props.initialRoute}
        //style={{width:Dimensions.get('window').width}}
				renderScene={(route,navigator) => this._renderScene(route,navigator)}
			/>
		);

	}

}