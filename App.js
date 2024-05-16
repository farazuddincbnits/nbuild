import 'react-native-gesture-handler';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { useCallback, useEffect, useState,useRef } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, Animated, AppRegistry, SafeAreaView } from 'react-native';
import { store, persistor } from './initializeStore';
import { PersistGate } from 'redux-persist/integration/react';

import { Provider } from 'react-redux';
// import NavigationComponent from './components/NavigationComponent';
import appolloClient from './client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import AppNavigatorWeb from './navigations/AppNavigatorWeb';
import AppNavigator from './navigations/AppNavigator';
import { MenuProvider } from "react-native-popup-menu";
// import Layout from './components/Layout';

import { useFonts } from 'expo-font';
import getEnvVars from './environment';
import { initializeApp } from "firebase/app";
// import LeftPanel from "./components/LeftPanel";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';





const env = getEnvVars();


// Initialize Firebase
const firebaseConfig = {
  // apiKey: "AIzaSyBPC13eCcUpqblHrQOjnh-T933-jNIP4UM",
  // authDomain: "weclikd-prod.firebaseapp.com",
  // databaseURL: "https://weclikd-prod.firebaseio.com",
  // projectId: "weclikd-prod",
  // storageBucket: "weclikd-prod.appspot.com",
  // messagingSenderId: "1068132403542",
  // appId: "1:1068132403542:web:de68950c45b7fdd4c06ef7",
  // measurementId: "G-6MTSK4CKWL",

  apiKey: env.APIKEY,
  authDomain: env.AUTHDOMAIN,
  databaseURL: env.DATABASEURL,
  projectId: env.PROJECTID,
  storageBucket: env.STORAGEBUCKET,
  messagingSenderId: env.MESSAGINGSENDERID,
  appId: env.APPID,
  measurementId: env.MEASUREMENTID,
};

// console.log(firebaseConfig,'firebaseConfig')

const app = initializeApp(firebaseConfig);







export default function App(props) {

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
  const [fontsLoaded] = useFonts({
    // HelveticaBold: require('./assets/fonts/Helvetica-Bold.ttf'),
    // Helvetica: require('./assets/fonts/Helvetica.ttf'),
  });

  const navigationRef = useRef(null)


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  useEffect(() => {
    // console.log(__dirname,'__dirname__dirname');
    onLayoutRootView()
    animateIn()
    // async function prepare() {
    //   try {
    //     // Pre-load fonts, make any API calls you need to do here
    //     // await Font.loadAsync();
    //     await Font.loadAsync({
    //       HelveticaBold: require('./assets/fonts/Helvetica-Bold.ttf'),
    //       Helvetica: require('./assets/fonts/Helvetica.ttf'),
    //     });
    //     loadResourcesAsync()
    //     // Artificially delay for two seconds to simulate a slow loading
    //     // experience. Please remove this if you copy and paste the code!
    //     await new Promise(resolve => setTimeout(resolve, 2000));
    //   } catch (e) {
    //     console.warn(e);
    //   } finally {
    //     // Tell the application to render
    //     setLoadingComplete(true);
    //   }
    // }

    // prepare();
    // console.log(isLoadingComplete, 'isLoadingComplete');
    // setTimeout(async () => {
    //   // await SplashScreen.hideAsync();
    // }, 200);
  }, []);

  const animateIn = () => {
    Animated.timing(animatePress, {
      toValue: 0.5,
      duration: 500,
      useNativeDriver: true // Add This line
    }).start();
  }
  // async function loadResourcesAsync() {
  //   await Promise.all([
  //     Font.loadAsync({
  //       Avenir: {
  //         uri: require("./assets/fonts/AvenirBook.ttf"),
  //         display: Font.FontDisplay.SWAP
  //       },
  //       AvenirBlack: {
  //         uri: require("./assets/fonts/AvenirBlack.ttf"),
  //         display: Font.FontDisplay.SWAP
  //       },
  //       Helvetica: {
  //         uri: require("./assets/fonts/Helvetica.ttf"),
  //         display: Font.FontDisplay.SWAP
  //       },
  //       HelveticaBold: {
  //         uri: require("./assets/fonts/HelveticaBold.ttf"),
  //         display: Font.FontDisplay.SWAP
  //       },
  //     })
  //   ]);
  // }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ApolloProvider client={appolloClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar backgroundColor={'transparent'} translucent />
            

            {/* <View style={styles.container}> */}
            <MenuProvider>

              {Platform.OS == "web" ?
                // <><LeftPanel />

                  <AppNavigatorWeb />
                  //  </> 
                   :


                <AppNavigator navigationRef={navigationRef} />

              }


              {/* <NavigationComponent />


              <Text>Open up App.js to start working on your app!</Text> */}
            </MenuProvider>

            <StatusBar style="auto" />
            {/* </View> */}

          </PersistGate>
        </Provider>
      </ApolloProvider >
    </SafeAreaView>
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


AppRegistry.registerComponent('main', () => App);
