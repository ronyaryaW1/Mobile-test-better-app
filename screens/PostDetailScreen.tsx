import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {handleAddComment, handleDownvote, handleUpvote} from '../Helper';

function PostDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {data, index, setFeed, feed} = route.params;
  const {text, voters, comment} = data;
  const [totalVote, setVoters] = useState(voters);
  const [content, setContent] = useState('');
  const [comments, setComments] = useState(comment);

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
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
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                Usup Suparma
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                Mar 27, 2023
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <Text style={{margin: 24}}>{text}</Text>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              height={200}
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
                0
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
                onPress={() => {
                  setVoters(voters - 1);
                  handleDownvote(index, feed, setFeed);
                }}>
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
                {totalVote}
              </Text>
              <Pressable
                onPress={() => {
                  setVoters(voters + 1);
                  handleUpvote(index, feed, setFeed);
                }}>
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
        {comments.map((comments: any, i: number) => {
          return (
            <View key={i.toString()}>
              <View
                style={{
                  flexDirection: 'row',
                  minHeight: 72,
                  paddingVertical: 16,
                  paddingHorizontal: 24,
                }}>
                <Image
                  source={{
                    uri: 'https://picsum.photos/200',
                  }}
                  width={36}
                  height={36}
                  style={{borderRadius: 24, marginRight: 16}}
                />
                <View style={{width: '90%'}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 12,
                      lineHeight: 14.52,
                      color: '#828282',
                    }}>
                    Usup Suparma
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 19.36,
                    }}>
                    {comments.content}
                  </Text>
                </View>
              </View>
              <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          placeholder="Enter Comment"
          style={{flex: 1}}
        />
        <Button
          title="Comment"
          onPress={() => {
            // handleAddComment(index, feed, setFeed, content);
            setComments([...comments, {content: content}]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
