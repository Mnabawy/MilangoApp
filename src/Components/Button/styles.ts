import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../Utils/colors';

export const styles = ScaledSheet.create({
  container: {
    height: '40@s',
    borderRadius: '8@s',
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    marginTop: '10@s',
  },
  text: {
    color: COLORS.white,
  },
});
