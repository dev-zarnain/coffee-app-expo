import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Dashboard = ({ navigation }) => {
  return (
    <ImageBackground style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        style={{
          top: 32,
          alignSelf: "center",
          width: 368,
          height: 492,
        }}
        source={require("../assets/HomeBg.png")}
      />
      <View style={{ paddingHorizontal: 28 }}>
        <Text
          style={{
            color: "white",
            fontSize: 38,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Coffee so good, your taste buds will love it.
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 16,
            textAlign: "center",
            marginVertical: 14,
          }}
        >
          The best grain, the finest roast, the powerful flavor.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            marginTop: 18,
            alignItems: "center",
            paddingVertical: 16,
            borderRadius: 12,
            backgroundColor: "#C67C4E",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "white",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
