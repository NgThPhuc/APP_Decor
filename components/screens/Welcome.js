import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../../constants/color';
import Button from '../Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={{uri: 'https://img.freepik.com/premium-psd/3d-icon-cuisine-with-container_23-2150081968.jpg?size=626&ext=jpg&ga=GA1.1.1605151739.1702720774&semt=ais'}}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={{uri: 'https://img.freepik.com/free-psd/3d-icon-furniture-with-kitchen-counter_23-2150092270.jpg?w=826&t=st=1702721086~exp=1702721686~hmac=370ec5f1f1c8ee5b894850b3abcb115d6db8c38b7db9957cf5572e82e1ac309b'}}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={{uri: 'https://img.freepik.com/free-psd/3d-icon-furniture-with-shelf_23-2150092262.jpg?size=626&ext=jpg&ga=GA1.1.1605151739.1702720774&semt=ais'}}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={{uri: 'https://img.freepik.com/free-psd/3d-illustration-potted-plant_23-2149424542.jpg?size=626&ext=jpg&ga=GA1.1.1605151739.1702720774&semt=ais'}}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%",
                    marginTop: -10,
                }}>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.white
                    }}>Chào nừng bạn đến với</Text>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.white, 
                        marginTop: -10,
                    }}>Shop Decor</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white,
                            marginVertical: 4,
                            marginTop: -20, 
                        }}>
                            Đến với thế giới của sự sang trọng và sáng tạo - nơi nội thất trở thành nghệ thuật.
                        </Text>
                    </View>

                    <Button
                        title="Đăng kí"
                        onPress={() => navigation.navigate("SignUp")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Đã có tài khoản ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("LoginComp")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Đăng nhập</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome