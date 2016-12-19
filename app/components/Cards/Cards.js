import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';

import {Button} from 'native-base';
import Header   from '../Partials/Header';
import Modal   from '../Partials/Modal';
import CardList from './CardList';

var window = Dimensions.get('window');

export default (props)=>(

		<View style={styles.container}>

					<Header titleView="MIS TARJETAS" {...props}/>              

	                <View style={styles.main}>
	                						
						<View style={{
							paddingTop:0,
							marginLeft:5,
							marginRight:5,
							marginTop: 20,
							marginBottom: 10,
							// borderBottomWidth:2,
							// borderBottomColor:'rgba(0,0,0,.15)'
						}}>
	 						<Text style={{fontFamily: 'Varela Round',textAlign:'left',fontSize:18,color: 'black', paddingBottom: 40}}>Recuerda que no compartimos tu información financiera</Text>
						</View>
	 					<CardList />
						<Button 
						onPress={ ()=>{ console.log("=3") }} 
						textStyle={{color:'rgb(32,76,165)'}} 
						style={{ marginLeft: 20 ,  marginRight: 20 ,  marginTop: 80,borderRadius: 20,shadowColor: 'transparent',borderColor: 'rgb(32,76,165)'}} 
						block bordered transparent>
										Recarga Automática
						</Button>
						<Modal  text="Agregar Tarjeta" message="Some Text"    />
						
	                </View>
	    </View>

);

let styles = StyleSheet.create({
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
		alignSelf: 'stretch'
	},
	container:{

		height:Dimensions.get('window').height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},	
});