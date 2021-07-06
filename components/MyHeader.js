import * as React from 'react';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header
        centerComponent = {{text:props.title , style:{color:'red',fontWeight:'bold',fontSize:20}}}
        backgroundColor = 'lightblue'/>
    )
}

export default MyHeader