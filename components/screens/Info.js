import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/color';
import { Ionicons } from "@expo/vector-icons";
import Button from "../Button";


const Info = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 16,
                    marginBottom: -20,
                }}
                >
                <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
                    <Ionicons 
                    name="arrow-back"
                    style={{
                        fontSize: 18,
                        color: COLORS.backgroundMedium,
                        padding: 12,
                        borderRadius: 10,
                        backgroundColor: COLORS.backgroundLight,
                    }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Điền thông tin
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Liên hệ</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Họ và tên'
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginTop: 10,

                    }}>
                        <TextInput
                            placeholder='Số điện thoại'
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Địa chỉ</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Tỉnh/Thành phố, Quận/Huyện, Phường/Xã  '
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        marginTop: 10,

                    }}>
                        <TextInput
                            placeholder='Tên đường, Tòa nhà, Số nhà'
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <Button
                    title="Tiếp"
                    onPress={() => navigation.navigate("PayMethods")}
                    filled
                    style={{
                        marginTop: 290,
                        width: "100%",
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Info