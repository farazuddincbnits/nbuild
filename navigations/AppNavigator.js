import React, { useRef } from "react";
import { Dimensions } from "react-native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
// import PostDetailsScreen from '../screens/PostDetailsScreen'
// import HeaderRight from '../components/HeaderRight';
// import CliksProfileScreen from "../screens/CliksProfileScreen";
// import TopicScreen from '../screens/TopicScreen';
// import ProfileScreen from "../screens/ProfileScreen";
// import SearchInputWeb from '../components/SearchInputWeb';
// import ExternalFeedScreen from "../screens/ExternalFeedScreen";
// import CreateClikScreen from '../screens/CreateClikScreen';
// import TopicHierarchyScreen from '../screens/TopicHierarchyScreen'
// import NotificationScreen from '../screens/NotificationScreen'
// import AddFeedScreen from '../screens/AddFeedScreen';
// import SettingsScreen from '../screens/SettingsScreen';
// import CreatePostScreen from '../screens/CreatePostScreen';
// import Layout from '../components/Layout';
// import EditClikScreen from '../screens/EditClikScreen'
// import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
// import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
// import FAQScreen from '../screens/FAQScreen';
// import CreateTopicScreen from '../screens/CreateTopicScreen';
// import RelatedPostScreen from '../screens/RelatedPostScreen';
// import SearchScreen from '../screens/SerachScreen';
// import EditPostScreen from '../screens/EditPostScreen';
// import FloatingFooter from '../components/FloatingFooter'
// import 'react-native-gesture-handler';
// import CreateCommentCard from "../components/CreateCommentCard";

const Stack = createStackNavigator();


const AppNavigator = (props) => {
    const navigationRef = useRef(null);

    // console.log(navigationRef, 'navigationRef==============')

    return (
        <NavigationContainer ref={navigationRef} >
            {/* <Layout
                navigationRef={navigationRef}
            /> */}
            <Stack.Navigator>
                <Stack.Screen name="home"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={DashboardScreen}
                />

                {/* <Stack.Screen name="PostDetailScreen"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={PostDetailsScreen}
                />
                <Stack.Screen name="TermsAndConditionsScreen"
                    options={{ headerShown: false, title: "TermsAndConditionsScreen" }}
                    component={TermsAndConditionsScreen}
                />
                <Stack.Screen name="PrivacyPolicyScreen"
                    options={{ headerShown: false, title: "PrivacyPolicyScreen" }}
                    component={PrivacyPolicyScreen}
                />
                <Stack.Screen name="FAQScreen"
                    options={{ headerShown: false, title: "FAQScreen" }}
                    component={FAQScreen}
                />


                <Stack.Screen name="clikProfile"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={CliksProfileScreen}
                />
                <Stack.Screen name="topicProfile"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={TopicScreen}
                />
                <Stack.Screen name="userProfile"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={ProfileScreen}
                />
                <Stack.Screen name="feedProfile"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={ExternalFeedScreen}
                />
             
                <Stack.Screen name="createClik"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={CreateClikScreen}
                />
                <Stack.Screen name="createTopic"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={CreateTopicScreen}
                />

                <Stack.Screen name="comment"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={CreateCommentCard}
                />



                <Stack.Screen name="topichierarchy"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={TopicHierarchyScreen}
                />
                <Stack.Screen name="notification"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={NotificationScreen}
                />

                <Stack.Screen name="addFeed"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={AddFeedScreen}
                />
                <Stack.Screen name="settings"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={SettingsScreen}
                />
                <Stack.Screen name="createPost"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={CreatePostScreen}
                />
                <Stack.Screen name="editClik"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={EditClikScreen}
                />
                <Stack.Screen name="termsandconditions"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={TermsAndConditionsScreen}
                /><Stack.Screen name="privacyPolicy"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={PrivacyPolicyScreen}
                /><Stack.Screen name="relatedPost"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={RelatedPostScreen}
                /><Stack.Screen name="search"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={SearchScreen}
                /><Stack.Screen name="editPost"
                    options={{ headerShown: false, title: "Weclikd" }}
                    component={EditPostScreen}
                /> */}

                {/* </Stack.Navigator> */}

            </Stack.Navigator>
            {/* {Dimensions.get('window').width <= 750 ?
                <FloatingFooter navigationRef={navigationRef} /> : null} */}
        </NavigationContainer>
    )
}

export default AppNavigator;