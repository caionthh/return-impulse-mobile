import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { styles } from "./style";

interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export const Option = ({ title, image, ...rest }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
