import {ScaledSheet} from 'react-native-size-matters';
import {COLORS} from '../../Utils/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: '5@mvs',
    borderRadius: '8@s',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: '7@vs',
    alignItems: 'center',
  },
  text: {
    fontSize: '11@s',
    textAlign: 'left',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '13@s',
  },
  descBox: {
    maxWidth: '95%',
  },
  checkbox: {
    marginHorizontal: '7@s',
    justifyContent: 'center',
  },
  txtBox: {
    justifyContent: 'center',
    marginStart: '5@s',
  },
});
