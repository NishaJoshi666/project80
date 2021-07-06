import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Settings:{
        screen:SettingScreen
    },
    MyBarters:{
        screen:AppTabNavigator
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'MyBarters'

})