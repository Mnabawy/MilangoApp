import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Pressable, View} from 'react-native';

import Text from '../../Components/Text';
import {styles} from './styles';
import Input from '../../Components/Input';
import Item from '../../Components/Item';
import Button from '../../Components/Button';
import {COLORS} from '../../Utils/colors';
import {getGithubRepos} from '../../Api';
import {ItemType} from '../../Utils/types/item';
import FilterIcon from '../../Assets/Icons/Filter';

const ReposScreen = () => {
  const [name, setName] = useState<string>('');
  const [selectedId, setSelectedId] = useState<string>('');
  const [data, setData] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  // pagination
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // filter
  const [filter, setFilter] = useState<string>('');
  const [isFilter, setIsFiltter] = useState<boolean>(false);

  const onChangeHandler = (val: string) => {
    setName(val);
    // setHasMore(true);
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    setError('');
    const res = await getGithubRepos(name, page);
    if (typeof res === 'string') {
      setError(res);
      setData([]);
    } else {
      // Append new data to existing data
      setData([...data, ...res]);
      // Increment page number for next API call
      setPage(page + 1);
      // Check if there are more pages to load
      setHasMore(res.length > 0);
    }
    setLoading(false);
  };

  const loadMoreHandler = () => {
    if (!loading && hasMore) {
      onSubmitHandler();
    }
  };

  const renderItem = ({item}: {item: ItemType}) => {
    return (
      <Item
        item={item}
        selected={item?.id === selectedId}
        onPress={() => setSelectedId(item?.id)}
      />
    );
  };

  // filtration
  const onPressToggleFilter = () => {
    setIsFiltter(val => !val);
  };
  const onFilterChangeHandler = (val: string) => {
    setFilter(val);
  };

  const filterData = () => {
    return data.filter(item =>
      item?.language?.toLowerCase().includes(filter?.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <Text>Please Enter Github User Name</Text>

      {isFilter ? (
        <Input
          value={filter}
          onChangeText={onFilterChangeHandler}
          onBlur={() => {}}
          placeholder="Filter List"
          style={{
            borderColor: filter.length > 0 ? COLORS.primary : COLORS.secondary,
          }}
        />
      ) : (
        <Input
          value={name}
          onChangeText={onChangeHandler}
          placeholder="Enter Github User Name"
          style={{
            borderColor: name.length > 0 ? COLORS.primary : COLORS.secondary,
          }}
        />
      )}

      <View style={styles.btnBox}>
        <Pressable
          style={styles.filterBtn}
          onPress={onPressToggleFilter}
          disabled={data.length <= 0}>
          <FilterIcon color={COLORS.white} />
        </Pressable>
        <Button
          onPress={loadMoreHandler}
          title={data?.length === 0 ? 'Fetch Repos' : 'Load More'}
          disabled={!hasMore || name.length === 0}
          style={[
            styles.fetchBtn,
            {
              backgroundColor:
                name?.length > 0 ? COLORS.primary : COLORS.secondary,
            },
          ]}
          loading={loading}
        />
      </View>

      <View style={styles.listBox}>
        {loading ? (
          <ActivityIndicator style={styles.activity} />
        ) : (
          <View style={styles.listBox}>
            {error ? (
              <Text style={styles.error}>{error}</Text>
            ) : (
              <FlatList data={filterData()} renderItem={renderItem} />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default ReposScreen;
