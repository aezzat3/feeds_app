//import liraries
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {activities} from '../../../mock/data';
import {FeedCard} from '../../FeedCard';

let HomeTemp = () => {
  const renderItem = (item, index) => {
    return <FeedCard data={item.item} key={index} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

HomeTemp = React.memo(HomeTemp);

export {HomeTemp};
