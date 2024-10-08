import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
  console.log("inside icontext component");
};
const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default IconText;
