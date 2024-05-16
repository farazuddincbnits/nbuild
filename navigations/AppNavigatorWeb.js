import React, { useEffect, useState, useRef } from "react";
import {
    Dimensions,
    TouchableOpacity,

    Text,
    View,
    Image
} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from "../screens/DashboardScreen";
import { connect } from "react-redux";
import { compose } from "react-recompose";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
// import { windowResize } from '../reducers/windowResizeReducer';
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
// import AnalyticsScreen from '../screens/AnalyticsScreen';
// import HeaderRightDashboard from '../components/HeaderRightDashboard';
// import { leftPanelModalFunc } from '../reducers/AdminTrueFalseReducer';
// import SearchSuggestion from '../components/SearchSuggestion'
// import PostDetailsScreen from '../screens/PostDetailsScreen';
// import CreateCommentCard from "../components/CreateCommentCard";
// import FloatingFooter from '../components/FloatingFooter';
// import 'react-native-gesture-handler';
// import EditFeedScreen from "../screens/EditFeedScreen";




const Stack = createStackNavigator();


// const logo = require("../assets/image/logolastOne.png")
const logo=""

const linking = {
    prefixes: [
        /* your linking prefixes */
    ],
    config: {
        /* configuration for matching screens with paths */
        screens: {
            home: {
                path: '',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            clikProfile: {
                path: 'clik/:id/feed/:postId',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            topicProfile: {
                path: 'topic/:id',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            userProfile: {
                path: 'user/:id',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            feedProfile: {
                path: 'feed/:id',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            relatedPost: {
                path: 'post/:id',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            commentPost: {
                path: 'comment/:id',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            },
            search: {
                path: 'search',
                parse: {
                    //   id: (id) => `user-${id}`,
                },

            }, editPost: {
                path: 'editPost',
                parse: {
                    //   id: (id) => `user-${id}`,
                },


            }, editFeed: {
                path: 'editFeed',
                parse: {
                    //   id: (id) => `user-${id}`,
                },


            }, invite: {
                path: 'invite/:username',
                parse: {
                    //   id: (id) => `user-${id}`,
                },
            },
            analytics: {
                path: 'analytics',
                parse: {
                    //   id: (id) => `user-${id}`,
                },
            },


        }
    },
};

const AppNavigatorWeb = (props) => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    const navigationRef = useRef(null);
    // const nameInput = React.createRef();


    useEffect(() => {

        // console.log(navigationRef, 'navigationRef');
        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            // props.windowResize({
            //     width: window.innerWidth,
            //     height: window.innerHeight
            // })
        }


        window.addEventListener("resize", handleResize);


        handleResize();


        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#fff'
        },
    };
    return (
        <>


            <NavigationContainer theme={MyTheme} ref={navigationRef} linking={linking}>
                {/* <Layout navigationRef={navigationRef} /> */}
                {
                    Dimensions.get("window").width > 750 &&


                    <View
                        style={{

                            flexDirection: "row",
                            width: '100%',
                            justifyContent: Dimensions.get("window").width > 1200 ? 'center' : 'space-between',

                            height: 50,
                            marginLeft: Dimensions.get("window").width > 1200 ? 'auto' : 0,
                            backgroundColor: '#000',
                            paddingHorizontal: Dimensions.get("window").width > 1200 ? 0 : '6%',
                        }}

                    >

                        <TouchableOpacity
                            testID="HomeLogo"
                            onPress={() => {
                                if (props.screenName != 'home' && Dimensions.get("window").width > 750) {
                                    // navigation.navigate("home")

                                    // props.screen('home')
                                    // props.setTermWeb('');
                                    // props.setTerm('');
                                    // props.get404(false)
                                    navigationRef.current?.navigate("home")

                                }


                            }}
                            style={{
                                flexDirection: "row",
                                justifyContent: 'flex-start',

                                alignItems: "center",
                                width: 310,
                                //  Dimensions.get("window").width <= 750 ? Dimensions.get("window").width :
                                //     Dimensions.get("window").width > 1600 ? 310 :
                                //         Dimensions.get("window").width > 750 && Dimensions.get("window").width < 1600 ? '5%' : 310,

                                backgroundColor: 'transparent',

                                marginRight: 0,

                            }}
                        >
                            <Image
                                source={logo}
                                style={{
                                    height: 30,
                                    width: 25,
                                    borderRadius: 5,
                                    marginRight: 5
                                }}
                            />

                        </TouchableOpacity>


                        <View style={{
                            flexDirection: 'row', width: Dimensions.get("window").width > 1200 && Dimensions.get("window").width < 1600 ? 900 :
                                Dimensions.get("window").width > 1600 ? 1200 : (Dimensions.get("window").width - 310),
                        }}>
                            <View
                                style={{

                                    width: Dimensions.get("window").width > 1200 && Dimensions.get("window").width < 1600 ? 450 :
                                        Dimensions.get("window").width > 1600 ? 600 : (Dimensions.get("window").width - 310) / 2,
                                }}
                            >
                                {Dimensions.get("window").width >= 1200 &&

                                    <View style={{ alignSelf: 'center', width: '100%' }}>
                                        {/* <SearchInputWeb
                                            navigation={navigationRef.current}
                                            displayType={"web"}
                                            press={status => {
                                                // setState({ showSearchIcon: status });
                                            }}
                                            nameInput={null}
                                        /> */}

                                    </View>
                                }

                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    width: Dimensions.get("window").width > 1200 && Dimensions.get("window").width < 1600 ? 450 :
                                        Dimensions.get("window").width > 1600 ? 600 : (Dimensions.get("window").width - 310) / 2,

                                }}
                            >

                                {/* <HeaderRight navigationRef={navigationRef}
                                /> */}

                            </View>
                        </View>
                    </View>

                }

                {Dimensions.get('window').width <= 750 && props.screenName == "home" &&
                    <View style={{
                        width: Dimensions.get('window').width,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: '#000',
                        height: 50,
                        alignItems: 'center',


                    }}>

                        <TouchableOpacity
                            onPress={() => {
                                props.leftPanelModalFunc(true)
                            }}
                        >
                            <Image
                                source={''}
                                // source={require("../assets/image/logolastOne.png")}
                                style={{
                                    marginRight: 5,
                                    //   alignSelf: "center",
                                    height: 35,
                                    width: 35,
                                    marginLeft:15,
                                    borderRadius:5
                                    // borderRadius: 8
                                }}
                                resizeMode={"contain"}
                            />

                        </TouchableOpacity>

                        <View style={{
                            width: (props.screenName == "home" && Dimensions.get('window').width) > 750 ? '90%' :
                                props.screenName == "home" && Dimensions.get('window').width <= 750 ? '85%' : '20%',

                        }}


                        >
                            <HeaderRightDashboard
                                navigation={navigationRef.current}


                            /></View>
                    </View>
                }
                <Stack.Navigator>
                    <Stack.Screen name="home"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={DashboardScreen}
                    />
                    {/* <Stack.Screen name="clikProfile"
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

                    <Stack.Screen name="comment"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={CreateCommentCard}
                    />


                    <Stack.Screen name="editClik"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={EditClikScreen}
                    />
                    <Stack.Screen name="editFeed"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={EditFeedScreen}
                    />
                    
                    <Stack.Screen name="termsandconditions"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={TermsAndConditionsScreen}
                    /><Stack.Screen name="privacyPolicy"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={PrivacyPolicyScreen}
                    /><Stack.Screen name="faq"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={FAQScreen}
                    /><Stack.Screen name="relatedPost"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={RelatedPostScreen}

                    /><Stack.Screen name="commentPost"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={RelatedPostScreen} />
                    <Stack.Screen name="search"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={SearchScreen}
                    /><Stack.Screen name="editPost"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={EditPostScreen}
                    /><Stack.Screen name="invite"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={DashboardScreen}
                    />
                    <Stack.Screen name="analytics"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={AnalyticsScreen}
                    />
                    <Stack.Screen name="PostDetailScreen"
                        options={{ headerShown: false, title: "Weclikd" }}
                        component={PostDetailsScreen}
                    /> */}


                </Stack.Navigator>

                {/* {Dimensions.get('window').width <= 750 ?
                <FloatingFooter navigationRef={navigationRef} /> : null} */}

            </NavigationContainer>
        </>
    )
}

const mapStateToProps = state => ({
    // loginStatus: state.UserReducer.loginStatus,
    // isAdmin: state.AdminTrueFalseReducer.isAdmin,
    // isAdminView: state.AdminTrueFalseReducer.isAdminView,
    // windowSize: state.windowResizeReducer.windowResize,
    // screenName: state.screenNameReducer.screen,

});

const mapDispatchToProps = dispatch => ({
    // changeLoginStatus: payload => dispatch(setLoginStatus(payload)),
    // windowResize: (payload) => dispatch(windowResize(payload)),
    // leftPanelModalFunc: (payload) => dispatch(leftPanelModalFunc(payload)),

});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    AppNavigatorWeb
);