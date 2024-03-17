import React from 'react';
import {Text} from 'react-native';

import {AppTextProps} from '../../Utils/types/text';
import {styles} from './styles';

const AppText: React.FC<AppTextProps> = ({children, style, ...props}) => (
  <Text
    // numberOfLines={2}
    // ellipsizeMode="tail"
    style={[styles.text, style]}
    {...props}>
    {children}
  </Text>
);

export default AppText;
