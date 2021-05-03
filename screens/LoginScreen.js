import React, { useContext, useState } from 'react';
import { Button, Text, View , StyleSheet, Image, Platform } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';



async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}


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
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress={() =>
            auth()
              .signInWithEmailAndPassword(email, password)
              .then(() =>
              {
                console.log('User logged in!');
              })
              .catch(e => console.log(e))
          
            }
        />
        
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        
        {Platform.OS === 'android' ?(
          
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
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
          />
        </View>
        ): null}

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