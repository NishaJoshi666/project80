import * as React from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';

export default class SettingScreen extends React.Component{
    render(){
        return(
            <View style = {{backgroundColor:'yellow',height:1000}}>
                <Text style = {{textAlign:'center',fontSize:40,marginTop:350}}>SettingScreen</Text>
            </View>
        )
    }
}