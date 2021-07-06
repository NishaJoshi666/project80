import * as React from 'react';
import LottieView from 'lottie-react-native'

export default class BarterSystem extends React.Component{
    render(){
        return(
            <LottieView
            source = {require('../assets/Barter.json')}
            style = {{width:'80%',alignSelf:'center'}}
            autoPlay loop/>
        )
    }
}