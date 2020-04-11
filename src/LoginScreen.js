import React, {Component} from 'react';
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard
} from 'react-native';
import Logo from './component/SmallLogo';
import Wallpaper from './component/Wallpaper';
import {showMessage} from "react-native-flash-message";
import AsyncStorage from "@react-native-community/async-storage";
import {USER_LOGIN, USER_NAME, USER_PASSWORD} from "./component/Constants";

export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            screenHeight: 0,
            showButton: true,
            isLoading: false,
            isLoading1: false,
            isClickReset: true,
            userEmail: '',
            userPassword: '',
            isConnected: null,
            sockettoken: null,
            issocketcon: false,
            email: "",
            password: ""

        }
    }

    async componentDidMount() {
        const email = await AsyncStorage.getItem(USER_NAME);
        const password = await AsyncStorage.getItem(USER_PASSWORD);
        this.setState({email: email, password: password});
    }

    login = () => {
        Keyboard.dismiss();
        const {userEmail, userPassword, email, password} = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (userEmail === "") {
            Alert.alert("Warning",
                "Please provide valid email.",
                [
                    {
                        text: "Close",
                        onPress: () => {
                            return null;
                        }
                    }
                ],
                {cancelable: false}
            );
        } else if (userPassword === "") {
            Alert.alert("Warning",
                "Please provide valid password.",
                [
                    {
                        text: "Close",
                        onPress: () => {
                            return null;
                        }
                    }
                ],
                {cancelable: false}
            );
        } else if (userPassword.length < 8) {
            Alert.alert("Warning",
                "Password should be at least 8 characters in length one upper case and one special character.",
                [
                    {
                        text: "Close",
                        onPress: () => {
                            return null;
                        }
                    }
                ],
                {cancelable: false}
            );
        } else if (strongRegex.test(userPassword) === false) {
            Alert.alert("Warning",
                "Password should be at least 8 characters in length one upper case and one special character.",
                [
                    {
                        text: "Close",
                        onPress: () => {
                            return null;
                        }
                    }
                ],
                {cancelable: false}
            );
        } else {
            if (this.state.showButton === true) {
                this.setState({showButton: false});
                this.setState({isLoading: true});
            }

            if (email === userEmail && password === userPassword) {
                AsyncStorage.setItem(USER_LOGIN, "loginDone");
                this.props.navigation.navigate('Home');
            } else {
                Alert.alert("Error",
                    "Invalid Credential",
                    [
                        {
                            text: "Close",
                            onPress: () => {
                                return null;
                            }
                        }
                    ],
                    {cancelable: false}
                );
            }
            showMessage({
                message: "Login SuccessFull !",
                type: "success",
                animationDuration: 255,
            });
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#283f78" barStyle="light-content"/>
                <Wallpaper>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.loginArea}>
                            <View style={{height: 80}}/>
                            <Logo/>
                            <View style={{height: 40}}/>
                            <KeyboardAvoidingView behavior="padding">
                                <View style={styles.emailContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Name"
                                        placeholderTextColor='#F5F6F7'
                                        onChangeText={userEmail => this.setState({userEmail})}
                                        keyboardType="email-address"
                                        autoCapitalize='none'
                                    />
                                </View>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Password"
                                        placeholderTextColor='#F5F6F7'
                                        onChangeText={userPassword => this.setState({userPassword})}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                            <View style={{
                                width: '95%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10,
                                marginBottom: 5,
                                flexDirection: 'row',
                                color: '#F5F6F7'
                            }}>
                                {this.state.isClickReset
                                    ?
                                    <TouchableOpacity
                                        style={{color: '#F5F6F7'}}
                                        onPress={this.resetPassword}>
                                        <Text style={{color: '#F5F6F7', fontSize: 15, fontWeight: '400'}}>
                                            Forgot Password ?
                                        </Text>
                                    </TouchableOpacity>
                                    :
                                    null
                                }
                                <ActivityIndicator size="large" color="#ff3d00" animating={this.state.isLoading1}/>
                            </View>
                            {this.state.showButton
                                ?
                                <TouchableOpacity
                                    onPress={this.login}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>SIGN IN</Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                null
                            }
                            <ActivityIndicator size="large" color="#ff3d00" animating={this.state.isLoading}/>
                        </View>
                        <View style={styles.newAccountContainer}>
                            <View style={styles.normalContainer}>
                                <Text style={styles.normalText}>Do not have account?</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigate('Register')}>
                                <View style={styles.createAccount}>
                                    <Text style={styles.createText}>SIGNUP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Wallpaper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignContent: 'center'
    },
    loginArea: {
        padding: 5,
        flex: 1
    },
    newAccountContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 25,
        height: 25,
        marginTop: 10
    },
    normalText: {
        color: '#FFFFFF',
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },

    createText: {
        color: '#FF7260',
        fontSize: 14,
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
        marginLeft: 20
    },

    forgotText: {
        color: '#ffffff',
        fontSize: 14,
        alignItems: 'flex-end',
        textAlign: 'right',
        width: '100%',
        padding: 5,
    },
    logoContiner: {
        height: 200,
        width: 200,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    welcome: {
        fontSize: 25,
        color: '#5B5A5A',
        letterSpacing: 6
    },
    textInput: {
        width: "100%",
        color: '#F5F6F7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        marginTop: 5,
        marginLeft: 5
    },
    button: {
        width: '80%',
        borderColor: '#129793',
        borderWidth: 1,
        height: 50,
        padding: 7,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: '#129793',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    emailContainer: {
        width: '80%',
        height: 60,
        flexDirection: 'row',
        alignContent: 'center',
        marginStart: 30,
        borderBottomColor: '#F5F6F7',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    passwordContainer: {
        width: '80%',
        height: 50,
        marginStart: 30,
        alignContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#F5F6F7',
        borderBottomWidth: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 10,
    },
});
