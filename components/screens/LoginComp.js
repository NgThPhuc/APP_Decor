import {
  View,
  Text,
  TextInput,
  Alert,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import COLORS from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";
import Button from "../Button";

const LoginComp = (props) => {
  // Đăng nhập
  const [username, setusername] = useState("");
  const [passwd, setpasswd] = useState("");
  const doLogin = () => {
    // kiểm tra hợp lệ dữ liệu
    if (username.length == 0) {
      Alert.alert("Thông báo", "Vui lòng nhập Username");
      return;
    }
    if (passwd.length == 0) {
      Alert.alert("Thông báo", "Vui lòng nhập Password");
      return; // lệnh return để thoát hàm login
    }

    // thực hiện fetch để lấy dữ liệu về
    let url_check_login =
      "http://192.168.23.103:3000/tb_users?username=" + username;

    fetch(url_check_login)
      .then((res) => {
        return res.json();
      })
      .then(async (res_login) => {
        if (res_login.length != 1) {
          Alert.alert("Thông báo", "Sai username");
          return;
        } else {
          // số lượng lấy được 1 bản ghi ==> kiểm tra password
          let objU = res_login[0];
          if (objU.passwd != passwd) {
            Alert.alert("Thông báo", "Sai Password");
            return;
          } else {
            // đúng password: lưu thông tin vào storage
            try {
              await AsyncStorage.setItem("loginInfo", JSON.stringify(objU));
              // chuyển màn hình sang màn hình home
              ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
              props.navigation.navigate("Home");
            } catch (e) {
              // saving error
              console.log(e);
            }
          }
        }
      });
  };
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  // Giao diện
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            Đăng nhập
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Username
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your username"
              placeholderTextColor={COLORS.black}
              onChangeText={(txt) => {
                setusername(txt);
              }}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              onChangeText={(txt) => {
                setpasswd(txt);
              }}
              style={{
                width: "100%",
              }}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == false ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Đăng nhập"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          onPress={doLogin}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Chưa có tài khoản ?{" "}
          </Text>
          <Pressable onPress={() => props.navigation.navigate("SignUp")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Đăng kí
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginComp;
