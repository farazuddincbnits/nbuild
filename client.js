import { ApolloClient, InMemoryCache, HttpLink, concat } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getEnvVars from "./environment";
import jwt_decode from "jwt-decode";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";



// import { ApolloClient, ApolloLink, InMemoryCache,  } from '@apollo/client';

const apiUrl = getEnvVars();

const customFetch = (uri, options) => {
  const { operationName } = JSON.parse(options.body);

  return fetch(`${apiUrl.GRAPHQL_URL}/${operationName}`, options);
};

const httpLink = new HttpLink({
  fetch: customFetch, fetchOptions: {
    reactNative: { textStreaming: true },
  },
});



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});


const authMiddleware = setContext(async (_, { headers }) => {
  // it will always get unexpired version of the token
  let storetoken = await AsyncStorage.getItem("userIdTokenFirebase");
  if (storetoken && Date.now() < jwt_decode(storetoken).exp * 1000) {
    return {
      headers: {
        ...headers,
        authorization: storetoken ? `Bearer ${storetoken}` : "",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } else {
    const auth = getAuth()
    if (auth.currentUser) {
      return auth.currentUser.getIdToken(true)
        .then((token) => {
          AsyncStorage.setItem("userIdTokenFirebase", token);
          return {
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : "",
              "Access-Control-Allow-Origin": "*",
            },
          };
        });
    } else {
      console.log("state = unknown (until the callback is invoked)")
      await onAuthStateChanged(auth, async user => {
        if (user) {
          console.log("state = definitely signed in")
          return user.getIdToken(true).then((token) => {
            AsyncStorage.setItem("userIdTokenFirebase", token);
            return {
              headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
                "Access-Control-Allow-Origin": "*",
              },
            };
          });
        }
        else {
          if (Platform.OS == "web") {
            await localStorage.clear();
            await signOut(auth);
          }



          // NavigationService.navigate("home"), window.location.reload();



          // if (Platform.OS == "web") {
          //   this.extensionLogout();
          // }
          console.log("state = definitely signed out")
        }
      })
      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     return user.getIdToken(true).then((token) => {
      //       AsyncStorage.setItem("userIdTokenFirebase", token);
      //       return {
      //         headers: {
      //           ...headers,
      //           authorization: token ? `Bearer ${token}` : "",
      //           "Access-Control-Allow-Origin": "*",
      //         },
      //       };
      //     });
      //   }
      // });
    }
  }
});





//   const consoleLink = new ApolloLink((operation, forward) => {
//     console.log(`starting request for ${operation.operationName}`);
//     // return forward(operation).map((data) => {
//     //   console.log(`ending request for ${operation.operationName}`);
//     //   return data;
//     // })
//   })

//   const httpLink = HttpLink({
//     fetch: customFetch,
//   });




const appolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),

});




export default appolloClient
