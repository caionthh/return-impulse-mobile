import { View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { Camera, Trash } from "phosphor-react-native";
import { styles } from "./styles";
import { theme } from "../../../theme";

interface Props {
  screenshot: string | null;
  isTakingScreenshot: boolean;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export const ScreenshotButton = ({
  screenshot,
  isTakingScreenshot,
  onTakeShot,
  onRemoveShot,
}: Props) => {
  const takingScreenshot = () => {
    if (isTakingScreenshot) {
      return <ActivityIndicator color={theme.colors.text_on_brand_color} />;
    }
    if (screenshot) {
      return (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      );
    }
    return <Camera size={24} color={theme.colors.text_primary} weight="bold" />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {takingScreenshot()}
    </TouchableOpacity>
  );
};
