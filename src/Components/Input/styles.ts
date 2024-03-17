import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../Utils/colors';

export const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    height: '40@s',
    borderRadius: '8@s',
    paddingHorizontal: 5,
    marginTop: '20@s',
  },
  input: {
    width: '100%',
    height: '100%',
  },
});
