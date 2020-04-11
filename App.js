import React, {Component} from 'react';
import {View} from 'react-native';
import Routes from "./Navigation/Route";
import FlashMessage from "react-native-flash-message";

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Routes/>
                <FlashMessage position="bottom"/>
            </View>
        );
    }
}
