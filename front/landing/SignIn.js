import React, {Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
//import SocialButton from "../../constants/SocialButton"
import firebase from 'firebase'

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignIn = this.onSignIn.bind(this)
    } 

    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        function renderLogo() {
            return (
                <View
                    style={{
                        marginTop: SIZES.padding * 5,
                        height: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={images.wallieLogo}
                        resizeMode="contain"
                        style={{
                            width: "60%"
                        }}
                    />
                </View>
            )
        }
    
        
        /*function renderForm() {
            return (
                <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 4,
                    }}
                >
        
                    
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>
    
                            <TextInput
                                style={{
                                    flex: 1,
                                    marginVertical: SIZES.padding,
                                    borderBottomColor: COLORS.black,
                                    borderBottomWidth: 1,
                                    height: 40,
                                    color: COLORS.black,
                                    ...FONTS.body3
                                }}
                                selectionColor={COLORS.black}
                                onChangeText={(email) => this.setState({ email })}
                            />
                    </View>
    
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Password</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            selectionColor={COLORS.black}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                </View>
            )
        }
    
        */
       
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <View
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderLogo()}
                    {/*{renderForm()}*/}
                    <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 4,
                    }}
                >
        
                    
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>
    
                            <TextInput
                                style={{
                                    flex: 1,
                                    marginVertical: SIZES.padding,
                                    borderBottomColor: COLORS.black,
                                    borderBottomWidth: 1,
                                    height: 40,
                                    color: COLORS.black,
                                    ...FONTS.body3
                                }}
                                selectionColor={COLORS.black}
                                onChangeText={(email) => this.setState({ email })}
                            />
                    </View>
    
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Password</Text>
                        <TextInput
                            style={{
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.black,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.black,
                                ...FONTS.body3
                            }}
                            selectionColor={COLORS.black}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                </View>
                    <View style={{ marginTop: SIZES.padding * 3,
                                    marginHorizontal: SIZES.padding * 4,}}>
                        <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center'
                            
                        }}
                        onPress={() => this.props.navigation.navigate("SignUp")}
                    >
                        <Text style={{ color: COLORS.black, borderColor: COLORS.orange, ...FONTS.h3 }}>회원가입</Text>
                        </TouchableOpacity>
                    </View>                 
                    
{/*}                     <View>
                    <SocialButton
                        buttonTitle="Sign In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        borderColor={COLORS.orange}
                        //onPress={() => fbLogin()}
                    />

                    <SocialButton
                        buttonTitle="Sign In with Google"
                        btnType="google"
                        color="#de4d41"
                        borderColor={COLORS.black}

                        //onPress={() => googleLogin()}
                    />
                    </View> */}
                    <View style={{ marginTop: SIZES.padding * 3,
                                    marginHorizontal: SIZES.padding * 4,}}>
                        <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: COLORS.orange,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                            
                        }}
                        onPress={() => this.onSignIn()}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>LogIn</Text>
                        </TouchableOpacity>
                    </View>                        
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
        )
    }
}

export default SignIn
