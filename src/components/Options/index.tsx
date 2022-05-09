import React from "react";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { styles } from "./style";
import { Option } from "./Option";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export const Options = ({ onFeedbackTypeChange }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChange(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
};
