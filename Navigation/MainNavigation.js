import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../src/HomeScreen';
import Screen3 from '../src/ProfileDetails';
import Screen2 from '../src/Notification';
import Screen4 from '../src/CompanyInfo';

class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={require('../src/component/assets/menu.png')}
                        style={{width: 25, height: 25, marginLeft: 25}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const FirstActivity_StackNavigator = createStackNavigator({
    First: {
        screen: Screen1,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#283f78',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen2_StackNavigator = createStackNavigator({
    Second: {
        screen: Screen2,
        navigationOptions: ({navigation}) => ({
            title: 'Profile',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#283f78',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen3_StackNavigator = createStackNavigator({
    Third: {
        screen: Screen3,
        navigationOptions: ({navigation}) => ({
            title: 'Notification',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#283f78',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen4_StackNavigator = createStackNavigator({
    Fourth: {
        screen: Screen4,
        navigationOptions: ({navigation}) => ({
            title: 'Company Info',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
            headerStyle: {
                backgroundColor: '#283f78',
            },
            headerTintColor: '#fff',
        }),
    },
});


const MainNavigation = createDrawerNavigator({
    Screen1: {
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
    Screen2: {
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Profile',
        },
    },
    Screen3: {
        screen: Screen3_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Notification',
        },
    },
    Screen4: {
        screen: Screen4_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Company Info',
        },
    },
});

export default createAppContainer(MainNavigation);
