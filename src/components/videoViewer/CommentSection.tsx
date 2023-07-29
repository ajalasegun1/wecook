import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  FlatList,
  ListRenderItem,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {neutal, primary} from '../../theme/colors';
import SendIcon from '../../assets/send.svg';
import {COMMENTS} from '../../constants';
import CommentItem from './CommentItem';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
const {height} = Dimensions.get('window');
import person from '../../assets/profiles/66.jpg';

const CommentSection = () => {
  const [comments, setComments] =
    useState<{img: any; username: string; comment: string}[]>(COMMENTS);
  const [text, setText] = useState('');
  const list = useRef<FlatList>(null);
  const renderItem: ListRenderItem<{
    img: string;
    username: string;
    comment: string;
  }> = ({item}) => <CommentItem data={item} />;
  const submit = () => {
    if (!text) return;
    setComments(prev => [
      ...prev,
      {
        comment: text,
        img: person,
        username: 'personally12',
      },
    ]);
    setText('');
    list?.current?.scrollToIndex({animated: true, index: comments.length - 1});
  };
  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <LinearGradient
            colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF']}
            style={{flex: 1}}
          />
        }>
        <FlatList
          ref={list}
          data={comments}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
        />
      </MaskedView>

      <View style={styles.footer}>
        <TextInput
          placeholder="Drop a comment"
          style={styles.input}
          cursorColor={primary.p200}
          value={text}
          onChangeText={val => setText(val)}
        />
        <TouchableWithoutFeedback style={styles.sendContainer} onPress={submit}>
          <SendIcon />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CommentSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 0,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    fontSize: 12,
    color: neutal.n500,
  },
  sendContainer: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: primary.p50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    marginBottom: 10,
    height: height / 2,
  },
});
