import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 12,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium,
  },
});
