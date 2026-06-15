import React from "react";
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
} from "react-native";
import { appButtonStyles } from "../styles/appButton.styles";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export default function AppButton({
  title,
  onPress,
  loading = false,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={appButtonStyles.button}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={appButtonStyles.buttonText}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
