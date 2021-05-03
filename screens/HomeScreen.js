import React, { useContext } from 'react';
import { View, Text, StyleSheet , FlatList } from 'react-native';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PostCard from '../components/PostCard';

import {Container} from '../styles/FeedStyles';

const Posts = [
    {
      id: '1',
      userName: 'Aniket Pal',
      userImg: require('../assets/aniket-circle.png'),
      postTime: '4 mins ago',
      post:
        'Hell lot of errors debugging 10 hrs for a minutes code. Dont know when I will end! Looking forward',
      postImg: require('../assets/cool-profile.png'),
      liked: true,
      likes: '14',
      comments: '5',
    },
    {
      id: '2',
      userName: 'Aniket Pal',
      userImg: require('../assets/aniket-circle.png'),
      postTime: '2 hours ago',
      post:
        'Hell lot of errors debugging 10 hrs for a minutes code. Dont know when I will end! Looking forward',
      postImg: 'none',
      liked: false,
      likes: '8',
      comments: '0',
    },
    {
      id: '3',
      userName: 'Aniket Pal',
      userImg: require('../assets/aniket-circle.png'),
      postTime: '1 hours ago',
      post:
        'Hell lot of errors debugging 10 hrs for a minutes code. Dont know when I will end! Looking forward',
      postImg: require('../assets/cool-profile.png'),
      liked: true,
      likes: '1',
      comments: '0',
    },
    {
      id: '4',
      userName: 'Aniket Pal',
      userImg: require('../assets/aniket-circle.png'),
      postTime: '1 day ago',
      post:
        'Hell lot of errors debugging 10 hrs for a minutes code. Dont know when I will end! Looking forward',
      postImg: require('../assets/cool-profile.png'),
      liked: true,
      likes: '22',
      comments: '4',
    },
    {
      id: '5',
      userName: 'Aniket Pal',
      userImg: require('../assets/aniket-circle.png'),
      postTime: '2 days ago',
      post:
        'Hell lot of errors debugging 10 hrs for a minutes code. Dont know when I will end! Looking forward',
      postImg: 'none',
      liked: false,
      likes: '0',
      comments: '0',
    },
  ];
  

const HomeScreen = () =>
{
    return (
        <Container>
            <FlatList
                data={Posts}
                renderItem={({ item }) => <PostCard item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>

    );
}

export default HomeScreen;
