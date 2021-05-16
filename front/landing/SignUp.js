import React, {Component} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from "react-native"
import {Picker} from '@react-native-picker/picker';
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import firebase from 'firebase'
import "firebase/firestore";


export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email: '',
            password: '',
            nickname:'',
            level:0,
            point:0,

        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name, nickname, level, point } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                        nickname,
                        level,
                        point
                    })
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
                    <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }}
                />
                    <Text style={{ borderBottomWidth:3,
                        borderColor:COLORS.orange, width:100, textAlign:'center',color: COLORS.black, ...FONTS.h4 }}>회원가입</Text>
                    
                </TouchableOpacity>
                
            )
        }
    
        function renderForm() {
            return (
                <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 4,
                    }}
                >
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>이름</Text>
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
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>
    
                    {/* email address */}
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
                                
                                placeholderTextColor={COLORS.black}
                                selectionColor={COLORS.black}
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({ password })}

                            />
                        </View>
                        {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>닉네임</Text>
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
                            onChangeText={(nickname) => this.setState({ nickname })}

                        />
                    </View>
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Level</Text>
                        <Picker
                            style={{height:50,width:250}}
                            selectedValue={this.state.level}
                            onValueChange={(val,idx)=>this.setState({level:val})}
		                    >
                    <Picker.Item label="!!!테리언" value={0}/>
                    <Picker.Item label="~~~테리언" value={1}/>
                    <Picker.Item label="ㅇㅇㅇ테리언" value={2}/>
                    <Picker.Item label="333테리언" value={3}/>
                </Picker>
                    </View>
    
                    
                </View>
            )
        } 
    
        
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
                <View
                    style={{ flex: 1 }}
                >
                    <ScrollView>
                    <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent:"center",
                        marginTop: SIZES.padding * 6,
                        paddingHorizontal: SIZES.padding * 2,
                       
                    }}
                    onPress={() => this.props.navigation.navigate("SignIn")}
                >
                    <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.black
                    }}
                />
                    <Text style={{ borderBottomWidth:3,
                        borderColor:COLORS.orange, width:100, textAlign:'center',color: COLORS.black, ...FONTS.h4 }}>회원가입</Text>
                    
                </TouchableOpacity>
                        <View
                    style={{
                        marginTop: SIZES.padding * 3,
                        marginHorizontal: SIZES.padding * 4,
                    }}
                >
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>이름</Text>
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
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>
    
                    {/* email address */}
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
                                
                                placeholderTextColor={COLORS.black}
                                selectionColor={COLORS.black}
                                secureTextEntry={true}
                                onChangeText={(password) => this.setState({ password })}

                            />
                        </View>
                        {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>닉네임</Text>
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
                            onChangeText={(nickname) => this.setState({ nickname })}

                        />
                    </View>
                    {/* Full Name */}
                    <View style={{ marginTop: SIZES.padding * 3 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Level</Text>
                        <Picker
                            style={{height:50,width:250}}
                            selectedValue={this.state.level}
                            onValueChange={(val,idx)=>this.setState({level:val})}
		                    >
                    <Picker.Item label="!!!테리언" value="0"/>
                    <Picker.Item label="~~~테리언" value="1"/>
                    <Picker.Item label="ㅇㅇㅇ테리언" value="2"/>
                    <Picker.Item label="333테리언" value="3"/>
                </Picker>
                    </View>
    
                    
                </View>
                        <View style={{ margin: SIZES.padding * 3 }}>
                            <TouchableOpacity
                                style={{
                                    height: 60,
                                    backgroundColor: COLORS.orange,
                                    borderRadius: SIZES.radius / 1.5,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => this.onSignUp()}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default SignUp
