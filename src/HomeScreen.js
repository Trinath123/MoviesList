import React, {Component} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Back from "./component/Back";
import axios from 'axios';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getMovieList();
    }

    getMovieList = () => {
        axios.post(`https://hoblist.com/movieList`, {
            category: "movies",
            language: "telugu",
            genre: "all",
            sort: "voting"
        }).then(response => {
            console.log('Success : ' + response.status);
            if (response.status === 200) {
                console.log(response.data.result);
                this.setState({data: response.data.result});
            }
        }).catch(error => {
            console.log('Error : ' + JSON.stringify(error));
            if (error.response === undefined) {
                Alert.alert('Warning',
                    error,
                    [
                        {
                            text: 'Close',
                            onPress: () => {
                                return null;
                            },
                        },
                    ],
                    {cancelable: false},
                );
            }
        });
    }

    renderGroup1 = (data) => {
        let url = data.item.poster;
        return (
            <View style={styles.catcontainer}>
                <View style={styles.testContain}>
                    <View style={{
                        flex: 0.05,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{height: 25, width: 25}}
                            source={require('./component/assets/up-arrow.png')}
                        />
                        <View style={{marginBottom:30,marginTop:30}}>
                            <Text>{data.item.totalVoted}</Text>
                        </View>
                        <Image
                            style={{height: 25, width: 25}}
                            source={require('./component/assets/down-arrow.png')}
                        />
                    </View>
                    <View style={{flex: 0.25, flexDirection: 'column', paddingLeft: 15}}>
                        <Image
                            style={{height: 200, width: 100}}
                            source={{uri: url}}
                        />
                    </View>
                    <View style={{flex: 0.1}}/>
                    <View style={{flex: 0.6, flexDirection: 'column'}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '98%',

                        }}>
                            <Text style={{fontSize: 20, fontWeight: '500'}}>{data.item.title}</Text>
                            <View style={{flexx: 1, flexDirection: 'row',}}>
                                <Text style={{fontSize: 17, fontWeight: '400', color: '#bdbba9'}}>Genre : </Text>
                                <Text style={{fontSize: 14, fontWeight: '400'}}> {data.item.genre}</Text>
                            </View>
                            <View style={{flexx: 1, flexDirection: 'row',}}>
                                <Text style={{fontSize: 16, fontWeight: '400', color: '#bdbba9'}}>Director : </Text>
                                <Text style={{fontSize: 14, fontWeight: '400'}}>{data.item.director[0]}</Text>
                            </View>
                            <View style={{flexx: 1, flexDirection: 'row',}}>
                                <Text style={{fontSize: 16, fontWeight: '400', color: '#bdbba9'}}>Starring : </Text>
                                <Text style={{fontSize: 14, fontWeight: '400'}}>{data.item.stars[0]}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    render() {
        let i = 1;
        return (
            <View style={styles.Container}>
                <Back>
                    <ScrollView>
                        <FlatList
                            style={{marginLeft: 5, marginRight: 2}}
                            showsVerticalScrollIndicator={false}
                            removeClippedSubviews={false}
                            numColumns={1}
                            data={this.state.data}
                            renderItem={item => this.renderGroup1(item)}
                            keyExtractor={() => i++}
                        />
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
