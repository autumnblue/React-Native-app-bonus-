'use strict'

import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Text,
	Image
} from 'react-native';

import {Button, Icon} from 'native-base';

import BackIcon from '../Partials/BackIcon';

export default ( props ) => (

		
		<View style={styles.container}>
				<BackIcon { ...props } />
                <View style={styles.header}>
                	<View style={{width:Dimensions.get('window').width,
                				  flexDirection:'row',
                				  justifyContent:'center'}}>
                		<Image source={require('../../img/bonus-logoBlanco300.png')}
                			   style={{ 
                			   			height: 58/3.7, // 58
                			   			width: 300/3.7, // 300
		                			   	resizeMode: 'contain',
		                			   	top: -5
		                			   	
		                			   }} 	
        				/>
                	</View>
            		<Text style={{

            			fontSize:20,
						color:'#FFF',
						textAlign:'center',
						fontFamily: 'Oswald',
						marginTop: 0,
						top: -10
					}}>
            		MI SALDO
            		</Text>
                </View>               

                <View style={styles.main}>
                	<Text style={styles.balance}>S./ { props.session.user.pointsCode }</Text>
					<Text style={styles.body}>Saldo disponible</Text>
					<View style={{
						paddingTop:25,
						marginLeft:5,
						marginRight:5,
						marginTop: 15,
						marginBottom: 20,
						borderTopWidth:2,
						borderTopColor:'rgba(0,0,0,.15)'
					}}>
 						<Text style={{fontFamily: 'Varela Round',textAlign:'center',fontSize:18,color: 'black',}}>Para pagar con Bonus, necesitas tener saldo en tu cuenta Bonus.</Text>
					</View>
 					<Text style={styles.body}>Si no tienes saldo, puedes recargar saldo con tu tarjeta vinculada,
 					o a través de nuestros establecimientos colaboradores.
 					</Text>
					<Button block rounded style={styles.button}> Añadir Dinero </Button>	
                </View>
        </View>
        

    
);

let styles = StyleSheet.create({
	container:{

		height:Dimensions.get('window').height,
		flexDirection:'column',
		justifyContent:'space-between',
		alignItems:'center'
				
	},
	header:{

		flex:4,
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center'
		
	},	
	main:{
		flex:21,
		flexDirection:'column',
		backgroundColor:'white',		
		alignItems:'center',		
		justifyContent:'flex-start',
		padding:20,		
		alignSelf: 'stretch'
	},
	logo:{
		resizeMode: 'contain',
		alignSelf:'center',
	},
	body:{
		fontSize: 13,
		color: 'rgba(0,0,0,.3)',		
		textAlign:'center',
		justifyContent:'center',
		paddingTop: 10,
		fontFamily: 'Varela Round'
	},
	balance:{
		fontSize: 56,
		color: '#194B7C',
		alignSelf:'center',
		paddingTop:30,
		fontFamily: 'Oswald',
		fontStyle: 'italic',
		fontWeight: '300'
		
	},
	button:{		
		backgroundColor: 'rgb(32,76,165)', 
		borderRadius: 20,
		shadowColor: 'transparent',		
		width: Dimensions.get('window').width*0.8,
		alignSelf:'center',
		top: 130,
	}
});

 // 				   <Button transparent>
 //                    	<BackIcon/> 
 //                    </Button>	                   	                    
 //                    <Thumbnail square source={ require( '../../img/bonus-logoBlanco300.png' ) } style={ styles.logo }/>                
 //                    <Button transparent>
 //                        <Icon name='ios-refresh' color='white'/>
 //                    </Button>