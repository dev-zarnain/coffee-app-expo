import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import coffee3 from "../assets/coffee3.png";
import coffee4 from "../assets/coffee4.png";

const Home = ({ navigation }) => {
  const suggestList = [
    {
      name: "Cappuccino",
    },
    {
      name: "Machiato",
    },
    {
      name: "Latte",
    },
    {
      name: "Americano",
    },
  ];

  const categories = [
    {
      img: coffee1,
      rating: 3.2,
      title: "Cappucino",
      desc: "with Chocolate",
      price: 1.2,
    },
    {
      img: coffee2,
      rating: 3.4,
      title: "Cappucino",
      desc: "with Oat Milk",
      price: 4.5,
    },
    {
      img: coffee3,
      rating: 4.4,
      title: "Cappucino",
      desc: "with Chocolate",
      price: 3.1,
    },
    {
      img: coffee4,
      rating: 5.2,
      title: "Cappucino",
      desc: "with Oat Milk",
      price: 4.8,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: "40%",
          backgroundColor: "#131313",
          padding: 26,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#DDDDDD", marginVertical: 4 }}>
              Location
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: 600 }}>
                Bilzen, Tanjungbalai
              </Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/User.png")}
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: 22,
            alignItems: "center",
            backgroundColor: "#313131",
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 16,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign
            style={{ marginLeft: 14 }}
            name="search1"
            size={24}
            color="white"
          />
          <TextInput
            style={{
              paddingHorizontal: 8,
              color: "#DDDDDD",
              width: "78%",
              height: "100%",
            }}
            placeholder="Search Coffee"
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#C67C4E",
              padding: 8,
              borderRadius: 12,
              marginRight: 4,
            }}
          >
            <Ionicons name="list-outline" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: "60%",
        }}
      >
        <FlatList
          style={{ paddingVertical: 12 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={suggestList}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  margin: 12,
                  borderRadius: 12,
                  height: 40,
                  padding: 12,
                }}
              >
                <Text style={{ color: "#2F4B4E" }}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
              style={{
                backgroundColor: "white",
                margin: 12,
                paddingHorizontal: 6,
                paddingVertical: 6,
                borderRadius: 16,
              }}
            >
              <Image style={{ width: 150, height: 140 }} source={item.img} />

              <View style={{ padding: 6 }}>
                <Text style={{ fontWeight: 600, fontSize: 22 }}>
                  {item.title}
                </Text>
                <Text style={{ color: "grey", marginVertical: 4 }}>
                  {item.desc}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontWeight: 600, fontSize: 22 }}>
                    $ {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#C67C4E",
                      paddingVertical: 8,
                      paddingHorizontal: 13,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 12,
                    }}
                  >
                    <Text
                      style={{ color: "white", fontSize: 18, fontWeight: 600 }}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
