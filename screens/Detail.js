import {
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
    <SafeAreaView>
      <View style={{ paddingVertical: 12, paddingHorizontal: 32 }}>
        <View
          style={{
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
          <Octicons name="heart" size={24} color="black" />
        </View>
        <Image
          style={{
            alignSelf: "center",
            marginVertical: 22,
            width: 315,
            height: 226,
          }}
          source={require("../assets/Detail1.png")}
        />
        <Text style={{ fontSize: 24, fontWeight: 700 }}>Cappucino</Text>
        <Text style={{ color: "grey", marginVertical: 6 }}>with Chocolate</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>4.8</Text>
          <Text style={{ color: "grey" }}>(230)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
