import {ScaledSheet, s} from 'react-native-size-matters';
import {COLORS} from '../../Utils/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '20@s',
    backgroundColor: COLORS.mainBg,
  },
  listBox: {
    flex: 1,
    marginTop: '10@s',
    borderRadius: '8@s',
  },
  activity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: COLORS.error,
    fontSize: '12@s',
  },
  btnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterBtn: {
    flex: 0.25,
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40@s',
    borderRadius: '8@s',
    marginTop: '10@s',
  },
  fetchBtn: {
    flex: 0.72,
  },
});
// backgroundColor: 'red',
