import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Wallpaper from "./component/Wallpaper";
import Logo from './component/Logo';
import {USER_EMAIL, USER_LOGIN, USER_PASSWORD} from './component/Constants';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(() => {
                    resolve('result')
                },
                4000
            )
        )
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this._loadInitialState().done();
        }
    }

    _loadInitialState = async () => {
        const val = false;
        const email = await AsyncStorage.getItem(USER_EMAIL);
        const password = await AsyncStorage.getItem(USER_PASSWORD);
        const isLogin = await AsyncStorage.getItem(USER_LOGIN);
        if (email !== null && password !== null && isLogin !== null) {
            this.props.navigation.navigate('Home');
        } else {
            this.props.navigation.navigate('Login');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#283f78" barStyle="light-content"/>
                <Wallpaper>
                    <Logo/>
                </Wallpaper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

