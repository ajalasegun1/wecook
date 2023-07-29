import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';

type Props = {
  data: {img: any; username: string; comment: string};
};
const CommentItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.commentItem}>
      <View style={styles.imageContainer}>
        <Image source={data.img} style={styles.img} />
      </View>
      <View>
        <Text style={{color: '#fff', fontWeight: '600'}}>{data.username}</Text>
        <Text style={{color: '#fff', fontSize: 12}}>{data.comment}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  imageContainer: {
    backgroundColor: '#f1f1f1',
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
});
