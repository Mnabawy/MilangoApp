import {ReactNode} from 'react';
import {TextProps} from 'react-native';

export interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: object;
}
