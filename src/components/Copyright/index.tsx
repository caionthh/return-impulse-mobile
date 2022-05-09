import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Feito por Caio Oliveira</Text>
    </View>
  );
};
