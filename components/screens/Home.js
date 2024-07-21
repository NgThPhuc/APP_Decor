import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image, } from "react-native";
import { Items } from "../../data.json";
import { MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import COLORS from "../../constants/color";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  //được gọi lên khi tải màn
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  // lấy dữ liệu từ DB

  const getDataFromDB = () => {
    let productList = [];
    for (let index = 0; index < 6; index++) {
      if (Items[index].category == "product") {
        productList.push(Items[index]);
      } 
    }

    setProducts(productList);
  };

  //create an product reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductInfo", { productID: data.id })
        }
        style={{
          width: "48%",
          marginVertical: 14,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 160,
            borderRadius: 10,
            backgroundColor: COLORS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
            left: 10,
          }}
        >
          <Image
            source={{ uri: data.productImage }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLORS.black,
            fontWeight: "600",
            marginBottom: 2,
            left: 10,
          }}
        >
          {data.productName}
        </Text>
        {data.category == "product" ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                left: 10,
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.green,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.green,
                }}
              >
                Available
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLORS.red,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.red,
                }}
              >
                Unavailable
              </Text>
            </View>
          )
        ) : null}
        <Text style={{ left: 10 }}>Giá: {data.productPrice} 000 đ</Text>
      </TouchableOpacity>
    );
  };
// giao dien
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <AntDesign
              name="user"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLORS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLORS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: COLORS.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Shop Decor
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLORS.black,
              fontWeight: "400",
              letterSpacing: 1,
              lineHeight: 24,
            }}
          >
            Cửa hàng Decor của chúng tôi mang đến cho bạn không gian sống lý
            tưởng với các sản phẩm trang trí sáng tạo, độc đáo và chất lượng.
            Hãy để chúng tôi giúp bạn biến ngôi nhà của bạn thành một nơi thật
            sự phản ánh cá nhân bạn.
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.black,
                  fontWeight: "500",
                  letterSpacing: 1,
                }}
              >
                Sản phẩm
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.blue,
                  fontWeight: "400",
                }}
                onPress={() => navigation.navigate("Product")}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {products.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
