import React from 'react';
import { Button, Text, View ,Image ,StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) =>
{
    return (
        <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone ={() => navigation.navigate("Login")}
    pages={[
      {
        backgroundColor: '#ffaf7a',
        image: <Image source={require('../assets/ob2.png')} style={styles.image}  />,
        title: 'Screen 1',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#ccb4ff',
        image: <Image source={require('../assets/ob4.png')} style={styles.image} />,
        title: 'Screen 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#ffb4b4',
        image: <Image source={require('../assets/ob5.png')} style={styles.image} />,
        title: 'Screen 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
/>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:350,
        height:350
    }
});