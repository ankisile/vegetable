import React, {useState, Component } from "react";
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

        function renderHeader() {
            return (
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent:"center",
                        marginTop: SIZES.padding * 6,
                        paddingHorizontal: SIZES.padding * 2,
                       
                    }}
                    onPress={() => console.log("Sign In")}
                >
                    <Text style={{ borderBottomWidth:3,
                        borderColor:COLORS.orange, width:100, textAlign:'center',color: COLORS.black, ...FONTS.h4 }}>로그인</Text>
                    
                </TouchableOpacity>
                
            )
        }
    
        

    
        /*function renderLogo() {
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
        */
        function renderForm() {
            return (
                <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 3,
                    }}
                >
        

                    {/* Email */}
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Email</Text>
    
                            {/* Email */}
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
                            />
                    </View>
    
                    <View style={{ marginTop: SIZES.padding * 2 }}>
                        <Text style={{ color: COLORS.Gray, ...FONTS.body3 }}>Password</Text>

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
                        />
                        
                    </View>
                </View>
            )
        }
    
        function renderButton() {
            return (
                <View style={{ margin: SIZES.padding * 3 }}>
                    <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: COLORS.orange,

                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => this.props.navigation.navigate("QuestMain")}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>LogIn</Text>

                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient

                colors={[COLORS.white, COLORS.white]}
                style={{ flex: 1 }}
            >
                <ScrollView>
                    {renderHeader()}
                    {renderForm()}
                    <TouchableOpacity                    
                        onPress={() => this.props.navigation.navigate("SignUp")}
                    >
                        <Text>
                        회원가입
                        </Text>
                    </TouchableOpacity>
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
        )
    }
}

export default SignIn

