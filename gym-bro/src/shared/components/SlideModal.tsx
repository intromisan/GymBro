import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { FC, ReactNode } from "react";
import colors from "../variables/colors";

interface SlideModalProps {
  isVisible: boolean;
  onClose: () => void;
  headerText: string;
  children: ReactNode | ReactNode[];
}

const SlideModal: FC<SlideModalProps> = ({
  isVisible,
  onClose,
  headerText,
  children,
}) => {
  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <SafeAreaView style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>{headerText}</Text>
          </View>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </Pressable>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

export default SlideModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
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
