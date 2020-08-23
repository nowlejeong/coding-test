import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        <FontAwesome name="twitter-square" size={70} color="skyblue" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
