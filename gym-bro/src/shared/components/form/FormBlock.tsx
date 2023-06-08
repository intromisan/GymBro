import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { FC, ReactNode } from "react";
import colors from "../../variables/colors";

interface FormBlockProps {
  icon: ReactNode;
  blockHeader: string;
  children: ReactNode | ReactNode[];
}

const deviceWidth = Dimensions.get("window").width;

const FormBlock: FC<FormBlockProps> = ({ icon, children, blockHeader }) => {
  return (
    <View style={styles.formBlockContainer}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.blockContainer}>
        <Text style={styles.formBlockHeader}>{blockHeader}</Text>
        <View style={styles.formBlockContent}>{children}</View>
      </View>
    </View>
  );
};

export default FormBlock;

const styles = StyleSheet.create({
  formBlockContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
  },
  iconContainer: {
    marginRight: 30,
  },
  blockContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightPrimary,
    width: "100%",
  },
  formBlockHeader: {
    padding: 0,
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
    marginBottom: 10,
  },
  formBlockContent: {
    paddingRight: deviceWidth * 0.12,
  },
});
