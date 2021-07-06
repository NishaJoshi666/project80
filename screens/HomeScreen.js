import * as React from 'react';
import {View , Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import MyHeader from '../component/MyHeader';
import db from '../config';
import firebase from 'firebase';
import {ListItem} from 'react-native-elements';

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            allRequest:[]
        }
        this.requestRef = null
    }

    itemRequest = ()=>{
        this.requestRef = db.collection('exchange_requests')
        .onSnapshot((snapShot)=>{
            var itemList = snapShot.docs.map(document=>document.data())
            this.setState({
                allRequest:itemList
            })
        })
    }

    keyExtractor = (item,index)=>index.toString()
    renderItem = ({item,i})=>{
        console.log(item.item_name);
        return(
            <ListItem
            key={i}
            title={item.item_name}
            subtitle={item.description}
            titleStyle={{color:'black',fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text style = {{color:'ffff'}}>Exchange</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }

    componentDidMount(){
        this.itemRequest()
    }
    
    componentWillUnmount(){
        this.requestRef()
    }

    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = 'HomeScreen'/>
                <View style={{flex:1}}>
                    {this.state.allRequest.length===0?(
                    <View style = {styles.subContainer}>
                        <Text style = {{fontSize:20}}>List of All Requested items</Text>
                    </View>):(
                        <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.allRequest}
                        renderItem = {this.renderItem}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })