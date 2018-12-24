import {createStackNavigator, createAppContainer} from 'react-navigation';
import React,{Component} from 'react'
import Home from './js/components/home/Home';
import Find from './js/components/find/Find';

const cNavigator = createStackNavigator({
        Home: {screen: Home},
        Page: {screen: Find}
    },{
        initialRouteName: 'Home', // 默认显示界面
    }
);
export default createAppContainer(cNavigator)