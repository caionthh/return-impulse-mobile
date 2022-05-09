/* eslint-disable react/style-prop-object */
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { theme } from "./src/theme";
import { WidgetHOC } from "./src/components/Widget";
import { styles } from "./AppStyle";

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return (
      <>
        <AppLoading />
      </>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <WidgetHOC />
    </View>
  );
};

export default App;
