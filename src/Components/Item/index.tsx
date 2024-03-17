import {Pressable, View} from 'react-native';
import React, {useMemo} from 'react';
import Text from '../Text';
import {styles} from './styles';
import {Checked, UnChecked} from '../../Assets/Icons/CheckBox';
import {COLORS} from '../../Utils/colors';
import {ItemType} from '../../Utils/types/item';

interface ItemProps {
  item: ItemType;
  selected: boolean;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({item, selected, onPress}) => {
  // prevent reintialization on every rerender
  const containerStyle = useMemo(() => {
    return [
      styles.container,
      {backgroundColor: selected ? COLORS.primary : COLORS.white},
    ];
  }, [selected]);

  const selectedTextColor = selected ? COLORS.white : COLORS.text;

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <View style={styles.checkbox}>
        {selected ? <Checked /> : <UnChecked />}
      </View>
      <View style={styles.txtBox}>
        <Text style={[styles.text, styles.name, {color: selectedTextColor}]}>
          {item?.name}
        </Text>
        <View style={styles.descBox}>
          <Text style={[styles.text, {color: selectedTextColor}]}>
            {item?.description}
          </Text>
        </View>
        <Text style={[styles.text, {color: selectedTextColor}]}>
          {item?.language}
        </Text>
      </View>
    </Pressable>
  );
};

export default Item;
