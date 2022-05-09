import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import successImage from "../../assets/success.png";
import { styles } from "./style";
import { Copyright } from "../Copyright";

interface Props {
  OnSendAnotherFeedback: () => void;
}

export const Success = ({ OnSendAnotherFeedback: onResetFeedback }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={successImage} style={styles.image} />
      <Text style={styles.title}>Agradecemos o Feedback</Text>
      <TouchableOpacity style={styles.button} onPress={onResetFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
};
