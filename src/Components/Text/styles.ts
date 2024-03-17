import {ScaledSheet, s} from 'react-native-size-matters';
import {COLORS} from '../../Utils/colors';

export const styles = ScaledSheet.create({
  text: {
    fontSize: s(12),
    textAlign: 'center',
    fontWeight: '500',
    color: COLORS.text,
  },
});
