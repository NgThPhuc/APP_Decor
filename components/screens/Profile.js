import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../../constants/color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";



const Profile = (props) => {
    const [loginInfo, setloginInfo] = useState({})
    const getLoginInfo = async()=>{
        try {
            const value = await AsyncStorage.getItem('loginInfo')
            if(value !== null) {
                // lấy được dữ liệu
                setloginInfo (   JSON.parse (value)  );


            }
            } catch(e) {
            // error reading value
            console.log(e);
            }
    }

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            // khi màn hình được active thì lệnh trong này hoạt động
            getLoginInfo();
        });
    
        return unsubscribe;
        }, [props.navigation]);

    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordShown(!isPasswordShown);
    };      

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
                <View></View>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons
                    name="chevron-left"
                    style={{
                        fontSize: 18,
                        color: COLORS.backgroundMedium,
                        padding: 12,
                        backgroundColor: COLORS.backgroundLight,
                        borderRadius: 12,
                        transform: [{ rotateY: '180deg' }]
                    }}
                    />
                </TouchableOpacity>
                
            </View>
            <View>
                <Image
                        source={{uri: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833548.jpg?size=626&ext=jpg&ga=GA1.1.1605151739.1702720774&semt=ais'}}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 100,
                            top: 45,
                            left: '50%',
                            marginLeft: -100,
                        }}
                    />
            </View>

            <View style={{ marginTop: 70, marginBottom: 12, marginHorizontal: 22 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>
                        Họ tên
                    </Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <Text>
                            {loginInfo.fullname}
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>
                        Tên đăng nhập
                    </Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <Text>
                            {loginInfo.username}
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>
                        Password
                    </Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <Text>
                            {isPasswordShown ? loginInfo.passwd : '********'}
                        </Text>
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>
                        Số điện thoại
                    </Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <Text>
                            {loginInfo.SDT}
                        </Text>
                    </View>
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
                        onPress={() => {
                            Alert.alert(
                                "Xác nhận đăng xuất",
                                "Bạn có muốn đăng xuất không?",
                                [
                                    {
                                        text: "Không",
                                        style: "cancel"
                                    },
                                    {
                                        text: "Có",
                                        onPress: () => {
                                            props.navigation.navigate("LoginComp");
                                        }
                                    }
                                ]
                            );
                        }}
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
                        Đăng xuất 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;