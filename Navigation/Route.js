import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../src/LoginScreen";
import RegisterScreen from "../src/RegisterScreen";
import SplashScreen from "../src/SplashScreen";
import MainNavigation from "./MainNavigation";

const FirstNavigator = createStackNavigator({
    First: {screen: SplashScreen}
});

const LoginNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen}
});

export const MainNavigator = createSwitchNavigator({
    Welcome: {screen: FirstNavigator},
    Login: {screen: LoginNavigator},
    Home: { screen: MainNavigation, },
});

export default createAppContainer(MainNavigator);
