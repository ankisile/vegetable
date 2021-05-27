import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

// constants
import { images, theme } from "../../constants";
<<<<<<< HEAD
const { onboarding1, onboarding2, onboarding3 } = images;
=======
const { onboarding1, onboarding2, onboarding3,onboarding4 } = images;
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

// theme
const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
    {
<<<<<<< HEAD
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
=======
        title: "채식의 유형",
        subtitle:"다양한 채식의 세계",
        description: "가끔 육식을 하는 플렉시테리언부터 페스토, 폴로, 락토 오보 락토, 오보, 채소만 먹는 비건까지 채식의 세계는 다양합니다. ",
        subdescription:"채식 입문자부터 비건 지향까지\n QVECO를 통해 건강한 채식 라이프를 즐겨보세요!",
        img: onboarding1
    },
    {
        title: "퀘스트",
        subtitle:"퀘스트를 통해\n 함께 실천해 나가는 채식 라이프",
        description: "퀘스트를 통해 생각만 하고 실천하지 못했던 것들을 함께 수행하면서 이루어갈 수 있습니다.",
        subdescription:"건강한 채식 라이프에 대한 정보를 공유하고, 함께 배워나가요!",
        img: onboarding2
    },
    {
        title: "포인트",
        subtitle:"포인트로 얻는 다양한 보상",
        description: "포인트를 통해 기부도 하고, 기프티콘 구매도 하며 다양한 보상을 얻을 수 있습니다.",
        subdescription:"지속적인 동기 부여가 될 거에요.",
        img: onboarding3
    },
    {
        title: "캐릭터",
        subtitle:"각양각색 매력만점 캐릭터",
        description: "다양한 매력의 캐릭터를 취향에 맞게 선택할 수 있습니다.",
        subdescription:"나만의 캐릭터를 통해 나를 표현해봐요.",
        img: onboarding4
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
    }
];

const Tutorial = ({navigation}) => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
<<<<<<< HEAD
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
=======
                        <View style={{ flex: 2, alignItems: 'center', marginBottom:'30%',justifyContent: 'center' }}>
                            <Image
                                source={item.img}
                                resizeMode="contain"
                                
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
<<<<<<< HEAD
                                bottom: '10%',
=======
                                bottom: '12%',
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                                left: 40,
                                right: 40
                            }}
                        >
                            <Text style={{
                                ...FONTS.h1,
<<<<<<< HEAD
                                color: COLORS.gray,
                                textAlign: 'center',
=======
                                color: COLORS.black,
                                textAlign: 'right',
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                            }}
                            >
                                {item.title}
                            </Text>
<<<<<<< HEAD

                            <Text style={{
                                ...FONTS.body3,
                                textAlign: 'center',
                                marginTop: SIZES.base,
=======
                            <Text style={{
                                ...FONTS.h4,
                                color: COLORS.black,
                                textAlign: 'right',
                            }}
                            >
                                {item.subtitle}
                            </Text>

                            <Text style={{
                                ...FONTS.body5,
                                textAlign: 'right',
                                marginTop: SIZES.base*2,
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                                color: COLORS.gray,
                            }}
                            >
                                {item.description}
                            </Text>
<<<<<<< HEAD
=======
                            <Text style={{
                                ...FONTS.body5,
                                textAlign: 'right',
                                marginTop: SIZES.base*2,
                                color: COLORS.gray,
                            }}
                            >
                                {item.subdescription}
                            </Text>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                        </View>
                        {/* Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
<<<<<<< HEAD
                                right: 0,
                                bottom: 0,
=======
                                left: 0,
                                top: 50,
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                                width: 150,
                                height: 60,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
<<<<<<< HEAD
                                backgroundColor: COLORS.blue
                            }}
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Text style={{ ...FONTS.h1, color: COLORS.white }}>{completed ? "Let's Go" : "Skip"}</Text>
=======
                            }}
                            onPress={() => navigation.navigate("QuestMain")}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.black }}>{completed ? "Let's Go" : "Skip"}</Text>
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

<<<<<<< HEAD
    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    }); 

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }
=======
    
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
<<<<<<< HEAD
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
=======
            
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2
    }
});

<<<<<<< HEAD
export default Tutorial;
=======
export default Tutorial;
>>>>>>> eb10f73ff0de6513d29ea88302dac870a2fed6c3
