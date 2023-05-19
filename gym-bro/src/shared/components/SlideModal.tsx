import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { FC, ReactNode } from "react";
import colors from "../variables/colors";

interface SlideModalProps {
  isVisible: boolean;
  onClose: () => void;
  headerText: string;
  children: ReactNode | ReactNode[];
}

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const SlideModal: FC<SlideModalProps> = ({
  isVisible,
  onClose,
  headerText,
  children,
}) => {
  return (
    <KeyboardAvoidingView >
      <Modal animationType="slide" visible={isVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>{headerText}</Text>
          </View>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </Pressable>
          {children}
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SlideModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: deviceWidth,
    height: deviceHeight - deviceHeight * 0.15,
    position: "absolute",
    backgroundColor: colors.white,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    marginTop: 15,
    height: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "700",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    left: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    fontSize: 16,
    color: colors.lightPrimary,
    fontWeight: "600",
  },
});
