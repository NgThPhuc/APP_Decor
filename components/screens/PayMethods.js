import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../constants/color";

const PayMethods = ({ navigation }) => {
    const checkOut = async () => {
        try {
            await AsyncStorage.removeItem("cartItems");
        } catch (error) {
            return error;
        }

        ToastAndroid.show("Đặt hàng thành công", ToastAndroid.SHORT);
        
        navigation.navigate("Home");
    };

    const [selectRadio, setSelectRadio] = useState(1);

    return (
        <View style={{ flex: 1 , backgroundColor: COLORS.white}}>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingTop: 16,
                    paddingHorizontal: 16,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                    name="chevron-left"
                    style={{
                        fontSize: 18,
                        color: COLORS.backgroundDark,
                        padding: 12,
                        backgroundColor: COLORS.backgroundLight,
                        borderRadius: 12,
                    }}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 18,
                        color: COLORS.black,
                        fontWeight: "400",
                    }}
                >
                    Chọn phương thức thanh toán
                </Text>
                <View></View>
            </View>
            <View style={{ top: 50, marginHorizontal: 22 }}>
            <TouchableOpacity onPress={() => setSelectRadio(1)}>
                <View style={{
                        width: "100%",
                        height: 60,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        flexDirection: 'row'
                    }}>
                            <View>
                                <Image
                                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGQHlp-HkseyHBMhryT3eNmYuK1fS8lVaaQ&usqp=CAU'}}
                                    style={{
                                        left: -10,
                                        height: 30,
                                        width: 120
                                    }}
                                />
                            </View>
                            <View style={{ width: 30, height: 30, borderColor: 'black', borderRadius: 20, borderWidth:3, margin: 12 }}>
                                {selectRadio == 1 ? <View style={{ backgroundColor: 'black', height: 18, width: 18, margin: 3, borderRadius: 20 }}></View> : null}
                            </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectRadio(2)}>
                <View style={{
                        width: "100%",
                        height: 60,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                            <View>
                                <Image
                                    source={{uri: 'https://t4.ftcdn.net/jpg/04/83/78/61/240_F_483786173_bYTWCy4mZXJ9Ja9f2kVHIuokif3MMy01.jpg'}}
                                    style={{
                                        left: -10,
                                        height: 30,
                                        width: 120
                                    }}
                                />
                            </View>
                            <View style={{ width: 30, height: 30, borderColor: 'black', borderRadius: 20, borderWidth:3, margin: 12 }}>
                                {selectRadio == 2 ? <View style={{ backgroundColor: 'black', height: 18, width: 18, margin: 3, borderRadius: 20 }}></View> : null}
                            </View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectRadio(3)}>
                <View style={{
                        width: "100%",
                        height: 60,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                            <View>
                                <Image
                                    source={{uri: 'https://t3.ftcdn.net/jpg/06/09/85/44/240_F_609854451_UGMRGvw49bRO7lEjZhxAnmsctbsnXZuO.jpg'}}
                                    style={{
                                        left: -10,
                                        height: 30,
                                        width: 120
                                    }}
                                />
                            </View>
                            <View style={{ width: 30, height: 30, borderColor: 'black', borderRadius: 20, borderWidth:3, margin: 12 }}>
                                {selectRadio == 3 ? <View style={{ backgroundColor: 'black', height: 18, width: 18, margin: 3, borderRadius: 20 }}></View> : null}
                            </View>
                    </View>
            </TouchableOpacity>
        </View>
            <View
                style={{
                position: "absolute",
                bottom: 10,
                height: "8%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <TouchableOpacity
                    style={{
                        width: "86%",
                        height: "90%",
                        backgroundColor: COLORS.primary,
                        borderRadius: 12,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onPress={() => (checkOut())}
                    >
                    <Text
                        style={{
                        fontSize: 18,
                        fontWeight: "500",
                        letterSpacing: 1,
                        color: 'white',
                        textTransform: "uppercase",
                        }}
                        
                    >
                        Đặt hàng
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PayMethods;