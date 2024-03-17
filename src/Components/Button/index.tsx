import {StyleSheet, View, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import Text from '../Text';
import {styles} from './styles';
import {ButtonProps} from '../../Utils/types/button';
import {COLORS} from '../../Utils/colors';

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  disabled,
  loading,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled}>
      {loading ? (
        <ActivityIndicator size={'small'} color={COLORS.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;
