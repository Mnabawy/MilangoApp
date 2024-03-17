import {memo} from 'react';
import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';

const CheckedComponent = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Circle cx={10} cy={10} r={10} fill="#8B52F6" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.362 6.525a1.005 1.005 0 0 0-.704.322L8.83 12.924l-2.552-2.661a1.02 1.02 0 0 0-.332-.232.987.987 0 0 0-1.116.232c-.095.099-.17.216-.222.346a1.107 1.107 0 0 0 .222 1.163l3.276 3.415a.989.989 0 0 0 1.448 0l6.552-6.83c.147-.15.248-.343.29-.554.04-.21.019-.43-.061-.627a1.057 1.057 0 0 0-.39-.483.993.993 0 0 0-.583-.168Z"
      clipRule="evenodd"
    />
  </Svg>
);
const Checked = memo(CheckedComponent);

const UnCheckedComponent = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Circle cx={10} cy={10} r={10} fill="#fff" stroke="#DFE2E6" />
  </Svg>
);
const UnChecked = memo(UnCheckedComponent);

export {Checked, UnChecked};
