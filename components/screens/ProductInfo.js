import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, FlatList, Image, Dimensions,Animated, ToastAndroid } from "react-native";
import { Items } from "../../data.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import COLORS from "../../constants/color";

const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  // const addToCart = async (id) => {
  //   let itemArray = await AsyncStorage.getItem("cartItems");
  //   itemArray = JSON.parse(itemArray);
  //   if (itemArray) {
  //     let array = itemArray;
  //     array.push(id);

  //     try {
  //       await AsyncStorage.setItem("cartItems", JSON.stringify(array));
  //       ToastAndroid.show("Đã thêm vào giỏ hàng", ToastAndroid.SHORT);
  //       navigation.navigate("Home");
  //     } catch (error) {
  //       return error;
  //     }
  //   } else {
  //     let array = [];
  //     array.push(id);
  //     try {
  //       await AsyncStorage.setItem("cartItems", JSON.stringify(array));
  //       ToastAndroid.show("Đã thêm vào giỏ hàng", ToastAndroid.SHORT);
  //       navigation.navigate("Home");
  //     } catch (error) {
  //       return error;
  //     }
  //   }
  // };
  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    let array = [];
    if (itemArray) {
      array = JSON.parse(itemArray);
    }
    array.push(id);
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(array));
      ToastAndroid.show("Đã thêm vào giỏ hàng", ToastAndroid.SHORT);
      navigation.navigate("Home");
    } catch (error) {
      return error;
    }
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 280,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{uri: item}}
          style={{
            width: "140%",
            height: "140%",
            resizeMode: "contain",
            
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
        position: "relative",
      }}
    >
      {/* <StatusBar
        backgroundColor={COLORS.backgroundLight}
        barStyle="dark-content"
      /> */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: COLORS.backgroundMedium,
          paddingLeft: 16,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack("Home")}>
          <Entypo
            name="chevron-left"
            style={{
              fontSize: 18,
              color: COLORS.backgroundMedium,
              padding: 12,
              backgroundColor: COLORS.backgroundLight,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.white,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            marginTop: 18,
          }}
        >
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "18%",
                        height: 2.4,
                        backgroundColor: COLORS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLORS.blue,
                marginRight: 6,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLORS.black,
                maxWidth: "84%",
              }}
            >
              {product.productName}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.black,
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              marginBottom: 18,
            }}
          >
            {product.description}
          </Text>
          {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: COLORS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  color: COLORS.blue,
                  backgroundColor: COLORS.backgroundLight,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: COLORS.blue,
                  }}
                />
              </View>
              <Text> Hà Nội</Text>
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: COLORS.backgroundDark,
              }}
            />
          </View> */}
          <View
            style={{
              right: -250,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "85%",
                color: COLORS.black,
                marginBottom: 50,
                left: 0,
              }}
            >
              Giá: {product.productPrice} 000 đ
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: "86%",
            height: "90%",
            backgroundColor: COLORS.primary,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            {product.isAvailable ? "Thêm vào giỏ hàng" : "Hết hàng"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductInfo;
