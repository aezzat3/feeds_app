/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {AppText} from '../AppText';
import styles from './styles';
let FeedCard = ({data}) => {
  return (
    <View style={styles.continer}>
      <View style={styles.cardHeader}>
        <View style={styles.imageWithName}>
          <Image
            style={styles.avatarStyle}
            source={{
              uri: data.author.user_image,
            }}
          />
          <AppText style={styles.nameStyle}>{data.author.name}</AppText>
        </View>
        <AppText style={styles.timeStyle}>{data.timestamp}</AppText>
      </View>

      <View style={styles.postContent}>
        <AppText style={{textAlign: 'left'}}>{data.content}</AppText>
        {data.image !== '' && (
          <Image
            resizeMode={'cover'}
            style={styles.postImage}
            source={{
              uri: data.image,
            }}
          />
        )}
      </View>
    </View>
  );
};

FeedCard = React.memo(FeedCard);
export {FeedCard};
