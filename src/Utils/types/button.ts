import {PressableProps} from 'react-native';

export interface ButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
  style: object;
  loading: boolean;
}
