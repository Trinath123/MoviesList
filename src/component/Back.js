import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import bgSrc from './assets/homebng.png';

export default class Homebackground extends Component {
    render() {
        return (
            <ImageBackground style={styles.picture} source={bgSrc}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
