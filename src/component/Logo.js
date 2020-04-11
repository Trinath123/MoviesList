import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logoImage}
                    source={require('./assets/logo.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 200,
        height: 150,
    }
});
