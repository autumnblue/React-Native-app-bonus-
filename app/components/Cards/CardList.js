'use strict'

import React, { Component } from 'react';
import {Dimensions,View,Image,StyleSheet,Text,ListView,TouchableOpacity} from 'react-native';
import {Badge} from 'native-base';
export default class CardList extends Component {
    render(props) {
        
        
        var window = Dimensions.get('window');      
      
        return (
                <View style={styles.container}>
                    <TouchableOpacity 
                    style={styles.boxContainer}
                    onPress={(event)=>{

                        props.navigator.push({
                                name: "Card",
                                sceneConfig: Navigator.SceneConfigs.FloatFromRight
                            });

                    }}>
                        

                            <Image source={require('../../img/cards/Visa.png')} style={styles.image}/>
                            <View style={styles.textContainer}>
                                <Text style={styles.title} >Visa </Text>                            
                                <Text style={styles.body}>Tarjeta 2345 </Text>
                            </View>    
                            <Badge backgroundColor="rgb(32,76,165)">></Badge> 
                                                    
                        
                    </TouchableOpacity>    

                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Masterdcard.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Masterdcard </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge backgroundColor="rgb(32,76,165)">></Badge> 
                          
                    </View>
                    <View style={styles.boxContainer}>

                        <Image source={require('../../img/cards/Visa.png')} style={styles.image}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title} >Visa </Text>                            
                            <Text style={styles.body}>Tarjeta 2345 </Text>
                        </View>
                        <Badge backgroundColor="rgb(32,76,165)">></Badge> 
                    </View>

                </View>
        );
    }
}

let styles = StyleSheet.create({
    container:{

        alignSelf:'stretch',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:60,
        marginTop:20,
        padding:20
        
    },
    boxContainer:{

        flexDirection:'row',
        alignSelf:'stretch',
        alignItems:'stretch',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderColor:'#eee',
        marginTop:10
        
    },
    textContainer:{
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'stretch'          

    },
    title:{
   
        color:'black'
    },
    body:{
        fontSize: 11,
        color: '#eee'
    },
    image:{
        resizeMode:'contain',
        height:60,
        width:60,
        alignSelf:'flex-start'
    },
    badge:{

        backgroundColor:'rgb(32,76,165)',
             
    }
});
// <Container>
//                 <Content >
//                     <List dataArray={items}                     
//                         renderRow={(item) =>
//                             <ListItem >
//                                 <Thumbnail style={{resizeMode: 'contain'}} square size={40} source={
//                                     require('../../img/cards/Visa.png')} />
//                                 <Text>{item}</Text>
//                                 <Text note> 4590 </Text>
//                                 <Badge style={{backgroundColor:'rgb(32,76,165)'}}>></Badge>
//                             </ListItem>
//                         }>
//                     </List>
//                 </Content>
//             </Container>