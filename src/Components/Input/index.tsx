import {TextInput, View} from 'react-native';
import React from 'react';
import {InputProps} from '../../Utils/types/input';
import {styles} from './styles';

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  // onBlur,
  placeholder,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        // onBlur={onBlur}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default Input;
