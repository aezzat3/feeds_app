/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {COLORS, ICONS} from '../../common';
import {AppIcon} from '../AppIcon';
import {AppText} from '../AppText';
import styles from './styles';
let FeedCard = ({data}) => {
  const [like, setlike] = useState(false);

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
      <View style={styles.lineStyle} />
      <View style={styles.footerStyle}>
        <TouchableOpacity
          onPress={() => {
            setlike((prev) => !prev);
          }}>
          <AppIcon
            icomoon
            color={like ? COLORS.watermelon : COLORS.dark}
            name={like ? ICONS.heartP : ICONS.heart}
            size={20}
          />
        </TouchableOpacity>
        <AppText>likes</AppText>
        <TouchableOpacity onPress={() => {}}>
          <AppIcon icomoon name={ICONS.chat} size={20} />
        </TouchableOpacity>
        <AppText>comments</AppText>
        <TouchableOpacity onPress={() => {}}>
          <AppIcon icomoon name={ICONS.share} size={20} />
        </TouchableOpacity>
        <AppText>share</AppText>
      </View>
    </View>
  );
};

FeedCard = React.memo(FeedCard);
export {FeedCard};
