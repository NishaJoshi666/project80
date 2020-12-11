import React from 'react';
import { createDrawerNavigatior } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import { CostomSideBarMenu } from './customSideBarMenu';

export const AppDrawerNavigation = createDrawerNavigatior({
    Home={screen:AppTabNavigator},
},
{contentComponet:CostomSideBarMenu},
{initialRouteName:'Home'}
)
