import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function CustomButton({
  label,
  onPress,
  disabled = false,
  style = {},
}: ButtonProps) {
  const { width } = useWindowDimensions();
  let labelFontSize = 24;
  if (width < 1280) {
    labelFontSize = 16;
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: '#cccccc' }}
        focusable={true}
        onPress={onPress}
        disabled={disabled}
        style={({ focused, pressed }) => [
          styles.container,
          (focused || pressed) && styles.focused,
          disabled && styles.disabledContainer,
          style,
        ]}
      >
        <Text
          style={[
            styles.label,
            disabled && styles.disabledLabel,
            { fontSize: labelFontSize },
          ]}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#222222',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: 'medium',
  },
  focused: {
    opacity: 0.5,
  },
  disabledContainer: {
    backgroundColor: '#ffffff',
  },
  disabledLabel: {
    color: '#777777',
  },
});
