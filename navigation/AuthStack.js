import React,{ useState ,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();


const AuthStack = () =>
{
   return (

          <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen
           name="Signup"
           component={SignupScreen}
           options={({ navigation }) => ({
             title : '',
             headerStyle: {
               backgroundColor: '#f9fafd',
               shadowColor: '#f9fafd',
               elevation:0,
             },
             headerLeft: () =>
             {
               <View>
                 <FontAwesome.Button
                   name="long-arrow-left"
                   size={25}
                   backgroundColor='#f9fafd'
                   color="#333"
                   onPress={()=>navigation.navigate('Login')}
                 />

               </View>
             }
           })}

         />
          </Stack.Navigator>

  )
};

export default AuthStack;





{
  /*export default function App()
{
  return (
   <OnboardingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/}
  

{/*
  import AsyncStorage from '@react-native-async-storage/async-storage';
 // to make the onboardingscreen appear only once add this code segment in the function App
 
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  
  useEffect(() =>
  {
    AsyncStorage.getItem('alreadyLaunched').then(value =>
    {
      if (value == null)
      {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
    });
  }, []);

 if (isFirstLaunch === null)
  {
    return null;
  }
  else if (isFirstLaunch === true)
  {
      return (
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
  else
  {
    return (
      <LoginScreen />
    )
  }


*/}
  
