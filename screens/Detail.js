import {
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

const Detail = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f5f5f5" }}>
      <View style={{ paddingHorizontal: 32 }}>
        <View
          style={{
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ width: 20 }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 22, fontWeight: 700 }}>Detail</Text>
          <TouchableOpacity>
            <Octicons name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView>
            <Image
              style={{
                alignSelf: "center",
                marginVertical: 22,
                width: 312,
                height: 226,
                borderRadius: 28,
              }}
              source={require("../assets/Detail1.png")}
            />
            <Text style={{ fontSize: 24, fontWeight: 700 }}>Cappucino</Text>
            <Text style={{ color: "#9B9B9B", marginVertical: 6 }}>
              with Chocolate
            </Text>
            <View
              style={{
                paddingBottom: 20,
                borderBottomWidth: 0.2,
                borderBottomColor: "grey",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>4.8</Text>
                <Text style={{ color: "#9B9B9B" }}> (230)</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ebebeb",
                    padding: 12,
                    borderRadius: 14,
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{ width: 28, height: 28 }}
                    source={require("../assets/Bean.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#ebebeb",
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    borderRadius: 14,
                  }}
                >
                  <Image
                    style={{ width: 14, height: 33 }}
                    source={require("../assets/Milk.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text
                style={{ fontSize: 22, fontWeight: 600, marginVertical: 12 }}
              >
                Description
              </Text>
              <Text style={{ color: "#9B9B9B" }}>
                A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
                ml of espresso coffee and 85ml of fresh milk the fo.. Read More
              </Text>
              <Text
                style={{ fontSize: 22, fontWeight: 600, marginVertical: 12 }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 38,
                    paddingVertical: 8,
                    borderColor: "grey",
                    borderWidth: 0.2,
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 38,
                    paddingVertical: 8,
                    borderColor: "grey",
                    borderWidth: 0.2,
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 38,
                    paddingVertical: 8,
                    borderColor: "grey",
                    borderWidth: 0.2,
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>L</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          marginTop: 18,
          paddingBottom: 12,
          paddingHorizontal: 34,
          borderTopRightRadius: 22,
          borderTopLeftRadius: 22,
          backgroundColor: "#ffff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 100,
        }}
      >
        <View>
          <Text style={{ color: "#9B9B9B", fontSize: 16, fontWeight: 500 }}>
            Price
          </Text>
          <Text style={{ color: "#C67C4E", fontSize: 20, fontWeight: 500 }}>
            $4.53
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={{
            paddingVertical: 22,
            paddingHorizontal: 66,
            backgroundColor: "#C67C4E",
            borderRadius: 18,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
