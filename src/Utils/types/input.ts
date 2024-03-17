import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  placeholder: string;
}
