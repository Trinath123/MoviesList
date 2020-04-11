import React, {Component} from 'react';
import {
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {showMessage} from "react-native-flash-message";
import Logo from './component/SmallLogo';
import Wallpaper from './component/Wallpaper';
import {USER_EMAIL, USER_PASSWORD,USER_NAME,USER_PHONE,USER_PROFESSION} from "./component/Constants";
import AsyncStorage from '@react-native-community/async-storage';
import {CustomPicker} from 'react-native-custom-picker'

export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            showButton: true,
            isLoading: false,
            UserName: '',
            UserEmail: '',
            UserPassword: '',
            UserPhone: '',
            UserProf: null,
        }
    }

    UserRegistration = () => {
        const {UserName, UserEmail, UserPassword, UserPhone, UserProf} = this.state;
        Keyboard.dismiss();
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (UserName === "") {
            Alert.alert("Warning",
                "Please provide valid UserName.",
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
        } else if (UserEmail === "") {
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
        } else if (reg.test(UserEmail) === false) {
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
            return false;
        } else if (UserPhone === "" && UserPhone !== 10) {
            Alert.alert("Warning",
                "Please provide 10 digit phone Number.",
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
        } else if (UserPassword === "") {
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
        } else if (UserPassword.length < 8) {
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
        } else if (strongRegex.test(UserPassword) === false) {
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
        } else if (UserProf === "") {
            Alert.alert("Warning",
                "Please select Profession",
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
            AsyncStorage.setItem(USER_EMAIL, UserEmail);
            AsyncStorage.setItem(USER_PASSWORD, UserPassword);
            AsyncStorage.setItem(USER_NAME, UserName);
            AsyncStorage.setItem(USER_PHONE, UserPhone);
            AsyncStorage.setItem(USER_PROFESSION, UserProf);
            showMessage({
                message: "Successfully Register Please Login!!",
                type: "success",
            });
            this.props.navigation.navigate("Login");
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const options = ['Software Developer', 'Quality Testing', 'Software Support'];
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#283f78" barStyle="light-content"/>
                <Wallpaper>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.loginArea}>
                            <View style={{marginTop: 30}}/>
                            <Logo/>
                            <View style={{marginTop: 20}}/>
                            <KeyboardAvoidingView behavior="padding">
                                <View style={styles.nameContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Name"
                                        placeholderTextColor='#F5F6F7'
                                        keyboardType="name-phone-pad"
                                        onChangeText={UserName => this.setState({UserName})}
                                    />
                                </View>
                                <View style={styles.emailContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Email"
                                        placeholderTextColor='#F5F6F7'
                                        keyboardType="email-address"
                                        onChangeText={UserEmail => this.setState({UserEmail})}
                                        autoCapitalize='none'
                                    />
                                </View>
                                <View style={styles.nameContainer}>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Phone"
                                        placeholderTextColor='#F5F6F7'
                                        keyboardType="name-phone-pad"
                                        onChangeText={UserPhone => this.setState({UserPhone})}
                                    />
                                </View>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        KeyboardAvoidingView={true}
                                        style={styles.textInput}
                                        placeholder="Password"
                                        placeholderTextColor='#F5F6F7'
                                        secureTextEntry={true}
                                        onChangeText={UserPassword => this.setState({UserPassword})}
                                    />
                                </View>
                                <View style={[styles.nameContainer, {width: '100%', fontSize: 16, color: '#ffffff'}]}>
                                    <CustomPicker
                                        style={{width: '100%', fontSize: 16, color: '#ffffff'}}
                                        showsVerticalScrollIndicator={false}
                                        options={options}
                                        value={this.state.UserProf}
                                        onValueChange={(UserProf) => this.setState({UserProf: UserProf})}
                                    />
                                </View>
                            </KeyboardAvoidingView>
                            {this.state.showButton ? (<TouchableOpacity
                                onPress={this.UserRegistration}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </View>
                            </TouchableOpacity>) : null}
                            <ActivityIndicator size="large" color="#ff3d00" animating={this.state.isLoading}/>
                            <View style={styles.newAccountContainer}>
                                <View style={styles.normalContainer}>
                                    <Text style={styles.normalText}>Do you have an account?</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => navigate('Login')}>
                                    <View style={styles.createAccount}>
                                        <Text style={styles.createText}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
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
    },
    newAccountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
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
        fontSize: 18,
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
        fontSize: 16,
        marginTop: 10,
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
    nameContainer: {
        width: '80%',
        height: 60,
        flexDirection: 'row',
        alignContent: 'center',
        marginStart: 30,
        borderBottomColor: '#F5F6F7',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    emailContainer: {
        width: '80%',
        height: 60,
        marginStart: 30,
        alignContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#F5F6F7',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    passwordContainer: {
        width: '80%',
        height: 60,
        marginStart: 30,
        alignContent: 'center',
        flexDirection: 'row',
        borderBottomColor: '#F5F6F7',
        borderBottomWidth: 1,
    },
    scrollview: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        justifyContent: "space-between",
        padding: 10,
    },
});
