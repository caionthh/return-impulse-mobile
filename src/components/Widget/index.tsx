import { ChatTeardropDots } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Success } from "../Success";
import { Form } from "../Form";
import { Options } from "../Options";

export type FeedbackType = keyof typeof feedbackTypes;

const Widget = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };
  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };
  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {/* <Options /> */}
        {/* <Form feedbackType="BUG" /> */}
        {/* <Success /> */}
        {feedbackSent ? (
          <Success OnSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCancel={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackTypeChange={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export const WidgetHOC = gestureHandlerRootHOC(Widget);
