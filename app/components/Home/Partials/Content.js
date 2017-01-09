'use strict'

import React from 'react';
import {
	ScrollView,
	StyleSheet,
	View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Catalogue from '../Sections/Catalog';
import CustomTabBar from '../Partials/CustomTabBar';
import Coupons from '../Sections/Coupons';

import ContentContainer from '../../Containers/ContentContainer';

import { Col, Grid } from "react-native-easy-grid";

import { Text } from 'native-base';

export default ( props ) => <ContentContainer>
	<View style={ styles.summarySection }>
		<Grid style={ styles.boxwrapper }>
			<Col>
				<View style={ styles.box }>
					<Text style={ styles.boxValue }>{ props.session.user.pointsCode }</Text>
					<Text style={ styles.boxLabel }>Soles</Text>
				</View>
			</Col>
			<Col>
				<View style={ [ styles.box ,  styles.centerbox ]  }>
					<Text style={ styles.boxValue }>{ props.session.user.currentBalance }</Text>
					<Text style={ styles.boxLabel }>Puntos</Text>
				</View>
			</Col>
			<Col>
				<View style={ styles.box }>
					<Text style={ styles.boxValue }>{ props.session.user.accountAutCnj }</Text>
					<Text style={ styles.boxLabel }>Cupones</Text>
				</View>
			</Col>
		</Grid>
	</View>
	<ScrollableTabView 
		renderTabBar=			{() => <CustomTabBar />}
		style=					{ styles.scrollableTabView } 
		tabBarUnderlineStyle=	{ styles.tabBarUnderlineStyle }
		tabBarTextStyle=		{ styles.tabBarTextStyle }
		tabBarActiveTextColor=	{ styles.tabBarActiveTextColor.color }
		tabBarInactiveTextColor={ styles.tabBarInactiveTextColor.color }
	>
		<Catalogue 	tabLabel="CATÁLOGO" 	{ ...props }/>
		<Text 		tabLabel="PROMOCIONES" 	{ ...props } style={{flex: 1, textAlign: 'center', paddingTop: 40, fontWeight: 'bold', fontFamily: 'Varela Round'}}>NO HAY PROMOCIONES EN ESTE MOMENTO</Text>
		<Coupons 	tabLabel="CUPONES" 		{ ...props }/>
	</ScrollableTabView>
</ContentContainer>;

let styles = StyleSheet.create({
	boxwrapper:{
		borderColor: 'rgba(0,0,0,.15)',
		borderWidth: 1,
		borderRadius: 40,
		height: 60,
		flex: 0
	},
	box: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft:16,
		paddingRight: 16,
	},
	boxLabel: {
		textAlign: 'center',
		color: 'rgba(0,0,0,.3)', 
		fontSize: 13,
		fontFamily: 'Varela Round'
	},
	boxValue: {
		textAlign: 'center',
		fontWeight: 'bold',
		paddingBottom:3,
		fontSize:16
	},
	centerbox:{
		borderLeftColor: 'rgba(0,0,0,.15)',
		borderRightColor: 'rgba(0,0,0,.15)',
		borderLeftWidth: 1,
		borderRightWidth: 1,
	},
	scrollableTabView: {
		backgroundColor: '#FFF',
		paddingTop: 0,
		flex: 1
	},
	summarySection: {
		height: 100,
		backgroundColor: '#FFF',
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 26
	},
	tabBarUnderlineStyle: {
		height: 2,
		backgroundColor: 'rgb(31,75,164)'
	},
	tabBarTextStyle: {
		fontSize: 12,
		fontFamily: 'Oswald'
	},
	tabBarActiveTextColor: {
		color: 'black'
	},
	tabBarInactiveTextColor: {
		color: 'rgba(0,0,0,.4)'
	},
});