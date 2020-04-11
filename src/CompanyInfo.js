import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Back from "./component/Back";

export default class CompanyInfo extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Back>
                    <ScrollView>
                        <View style={styles.catcontainer}>
                            <View style={styles.testContain}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: 18, fontWeight: '500'}}>Company:</Text>
                                        <Text style={{fontSize: 16, fontWeight: '400'}}> Geeksynergy Technologies Pvt
                                            Ltd</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: 18, fontWeight: '500'}}> Address: </Text>
                                        <Text style={{fontSize: 16, fontWeight: '400'}}> Sanjayanagar,
                                            Bengaluru-56</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: 18, fontWeight: '500'}}>Phone: </Text>
                                        <Text style={{fontSize: 16, fontWeight: '400'}}> XXXXXXXXX09</Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: 18, fontWeight: '500'}}> Email: </Text>
                                        <Text style={{fontSize: 16, fontWeight: '400'}}> XXXXXX@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Back>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "column"
    },
    catgorytext: {
        fontSize: 16,
        alignSelf: 'flex-start',
        fontWeight: '400',
    },
    testContain: {
        flex: 0.1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 250,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    catcontainer: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 15
    }
});
