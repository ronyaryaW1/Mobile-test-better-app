import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import MoreButton from '../Components/MoreButton';
import {data, handleDownvote, handleUpvote} from '../Helper';

function FeedScreen() {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [heightImg, setHeightImg] = useState(20);
  const [feed, setFeed] = useState(data);

  const onTextLayout = (e: any) => {
    const {
      layout: {height},
    } = e.nativeEvent;
    const lineHeight = 20;
    setHeightImg(height);
    const numLines = Math.floor(height / lineHeight);
    if (numLines >= 3) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {feed.map((x, i) => {
          return (
            <View key={i.toString()}>
              <Pressable
                onPress={() =>
                  navigation.navigate('post-detail', {
                    data: x,
                    index: i,
                    setFeed,
                    feed,
                  })
                }>
                <View style={{height: 547}}>
                  <View
                    style={{
                      height: 64,
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <Image
                      source={{
                        uri: 'https://picsum.photos/200',
                      }}
                      width={48}
                      height={48}
                      style={{borderRadius: 24, marginLeft: 24}}
                    />
                    <View style={{marginLeft: 16}}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 14,
                          lineHeight: 16.94,
                        }}>
                        {x.username}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 12,
                          lineHeight: 18,
                        }}>
                        {x.date}
                      </Text>
                    </View>
                  </View>
                  <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
                  <View>
                    <Text
                      numberOfLines={3}
                      ellipsizeMode="tail"
                      onLayout={onTextLayout}
                      style={{
                        marginHorizontal: 24,
                        marginTop: 24,
                        lineHeight: 20,
                      }}>
                      {x.text}
                    </Text>
                    {showMore && <MoreButton />}
                    <Image
                      source={{
                        uri: 'https://picsum.photos/200',
                      }}
                      height={heightImg}
                    />
                  </View>
                  <View
                    style={{
                      height: 52,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        source={IconShare}
                        height={18}
                        width={18}
                        style={{marginLeft: 22}}
                      />
                      <Image
                        source={IconComment}
                        height={18}
                        width={18}
                        style={{marginLeft: 24}}
                      />
                      <Text
                        style={{
                          width: 24,
                          marginHorizontal: 4,
                          textAlign: 'center',
                        }}>
                        {x.comment?.length}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={IconBlock}
                        height={18}
                        width={18}
                        style={{marginLeft: 22}}
                      />
                      <Pressable
                        onPress={() => handleDownvote(i, feed, setFeed)}>
                        <Image
                          source={IconDownvoteInactive}
                          height={18}
                          width={18}
                          style={{marginLeft: 24}}
                        />
                      </Pressable>
                      <Text
                        style={{
                          width: 24,
                          marginHorizontal: 11,
                          textAlign: 'center',
                        }}>
                        {x.voters}
                      </Text>
                      <Pressable onPress={() => handleUpvote(i, feed, setFeed)}>
                        <Image
                          source={IconUpvoteInactive}
                          height={18}
                          width={18}
                          style={{marginRight: 22}}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
