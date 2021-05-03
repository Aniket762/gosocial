import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import auth from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/core';

const HomeScreen = ({user}) =>
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome ❤ </Text>
            <FormButton buttonTitle="Logout" onPress={() => auth().signOut().then(()=>console.log('User Signed out!'))} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});