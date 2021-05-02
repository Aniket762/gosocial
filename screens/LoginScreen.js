import React, { useState } from 'react';
import { Button, Text, View , StyleSheet, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { TouchableOpacity } from 'react-native-gesture-handler';




const LoginScreen = ({navigation}) =>
{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/app-logo.png')}
                style={styles.logo}
            />
        <Text style={styles.text}></Text>
        <FormInput
          labelValue={email}
          onChangeText = {(userEmail) =>setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          keyboardType={"default"}
          autoCapitalize={'none'}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress = {()=>alert("Signed in")}
        />
        
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
          />
        </View>

        <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',

      },
});