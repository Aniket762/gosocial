import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';


const PostCard = () =>
{
    return (<Container>
               <Card>
                <UserInfo>
                    <UserImg source={require('../assets/aniket-circle.png')} ></UserImg>
                    <UserInfoText>
                    <UserName>Aniket Pal</UserName>
                    <PostTime>2 hours ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Hell lot of errors debugging 10 hrs for a minutes code. Don't know when I will end! Looking forward</PostText>
                <PostImg source={require('../assets/cool-profile.png')}></PostImg>
                <InteractionWrapper>
                    <Interaction active>
                        <Ionicons name="heart-outline" size={25} />
                        <InteractionText active>32 Likes</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25} />
                        <InteractionText>Comments</InteractionText>
                    </Interaction>
                </InteractionWrapper>
                <UserInfo>
                    <UserImg source={require('../assets/aniket-circle.png')} ></UserImg>
                    <UserInfoText>
                    <UserName>Aniket Pal</UserName>
                    <PostTime>2 hours ago</PostTime>
                    </UserInfoText>
                </UserInfo>
                <PostText>Hell lot of errors debugging 10 hrs for a minutes code. Don't know when I will end! Looking forward</PostText>
                <Divider />
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name="heart-outline" size={25} />
                        <InteractionText>Like</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25} />
                        <InteractionText>Comments</InteractionText>
                    </Interaction>
                </InteractionWrapper>
        </Card>
        </Container>
                
    );
}