import React, { useCallback } from "react";
import appolloClient from "../client";
// import { HomeFeedMutation } from "../graphqlSchema/FeedMutation";
import {
    // Animated,
    // AsyncStorage,
    Dimensions,
    FlatList,
    Platform,
    Text,
    View,
    // YellowBox,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { compose } from "react-recompose";
import FeedList from "./FeedList";
// import { feedFluctuation } from '../reducers/AdminTrueFalseReducer';
// import { setNewHomeFeed } from '../reducers/HomeFeedReducer';
import { setPostCommentDetails } from '../actionCreator/PostCommentDetailsAction';
import {
    ClikFeed,
    TopicFeed,
} from "../graphqlSchema/TrendingMutation";
import {
    ExternalFeedMutation,
    HomeFeedMutation,
} from "../graphqlSchema/FeedMutation";
import {
    UserFeedMutation,
} from "../graphqlSchema/PostMutation";

import ConstantFontFamily from "../constants/FontFamily";
import { Hoverable } from "react-native-web-hooks";
// import { deletePostAction } from '../reducers/AdminTrueFalseReducer';



class NewHomeFeed extends React.PureComponent {
    state = {
        modalVisible: false,
        showsVerticalScrollIndicatorView: false,
        currentScreentWidth: 0,
        data: [],
        page: 1,
        loading: true,
        loadingMore: false,
        refreshing: false,
        pageInfo: null,
        error: null,
        apiCall: true,
        routes: [
            { key: "first", title: "Trending" },
            { key: "second", title: "New" },
            { key: "third", title: "Discussing" },
        ],
        index: 0,
        activeFeed: -1,
        HomeFeedError: false,
        showEmptyIcon: false,
        activeId: "",
        activeTitle: "",
        loadSkeleton: false,
    };

    componentDidMount() {
        this.props.deletePostAction(false);

        if (this.props.listType == "Home") {


            if (Platform.OS == "web" && Dimensions.get("window").width > 750) {
                var id1 = window.location.href.toString().split("/");

                let newId = id1[id1.length - 1];
                let newId1 = newId.replace("#", "")


                //   console.log(sessionStorage.getItem("counter"), 'trending');

                // if (window.location.href.includes(newId1)) {
                //     this.props.feedFluctuation(false);
                // } else {
                //     this.props.feedFluctuation(true);
                // }


            }
            //  else {
            //     this.props.feedFluctuation(true);
            // }
            this._fetchAllHomeFeeds();
        } else if (this.props.listType == "Clik") {
            this._fetchAllClikFeeds();
        } else if (this.props.listType == "Topic") {
            this._fetchAllTopicFeeds();
        } else if (this.props.listType == "User") {
            this._fetchAllUserFeeds();
        } else if (this.props.listType == "Feed") {
            this._fetchAllExternalFeeds();
        }
        // if (this.props.listType == "Clik") {
        //     this._fetchAllClikFeeds()
        // } else if (this.props.listType == "Home") {
        //     // this.props.setPostCommentDetails({
        //     //     id: "",
        //     //     title: "",
        //     //     loading: false,
        //     // });
        //     this._fetchAllHomeFeeds()
        // } else if (this.props.listType == "Topic") {
        //     this._fetchAllTopicFeeds();
        // } else if (this.props.listType == "User") {
        //     this._fetchAllUserFeeds();
        // } else if (this.props.listType == "Feed") {
        //     this._fetchAllExternalFeeds();
        // }



    }

    componentDidUpdate = async (prevProps) => {
        if (this.props.listType == "Topic" && prevProps.data != this.props.data) {
            //   await this.setState(this.baseState);
            this._fetchAllTopicFeeds();
        } else if (
            this.props.listType == "Clik" &&
            prevProps.data != this.props.data
        ) {
            //   this.props.feedFluctuation(true);
            //   await this.setState(this.baseState);
            this._fetchAllClikFeeds();
        } else if (
            this.props.listType == "User" &&
            prevProps.data != this.props.data
        ) {
            //   await this.setState(this.baseState);
            this._fetchAllUserFeeds();
        } else if (
            this.props.listType == "Feed" &&
            prevProps.data != this.props.data
        ) {
            //   await this.setState(this.baseState);
            this._fetchAllExternalFeeds();
        }
        else if (
            (prevProps.postDeleteStatus != this.props.postDeleteStatus)
        ) {
            //   await this.setState(this.baseState);
            this._fetchAllHomeFeeds();
        }



    };

    _fetchAllHomeFeeds = () => {
        let __self = this;
        const { page, pageInfo } = this.state;
        if (pageInfo == null) {
            appolloClient
                .query({
                    query:
                        HomeFeedMutation,
                    variables: {
                        first: 12,
                        after: null,
                        sort_type: "NEW",
                        type: 'Post'
                    },
                    fetchPolicy: "no-cache",
                })
                .then(async (response) => {
                    this.props.setNewHomeFeed(response.data.node_list.edges);
                    this.props.setPostCommentDetails({
                        id:
                            "Post:" +
                            response.data.node_list.edges[0].node.id.replace(
                                "Post:",
                                ""
                            ),
                        title: response.data.node_list.edges[0].node.title,
                        loading: false,
                    });


                    //   } else {

                    let uri = window.location.href.toString().search('post')
                    if (uri != -1) {
                        var id11 = window.location.href.toString().split("/");
                        let newId1 = id11[id11.length - 1];
                        // this.props.setPostCommentReset({
                        //   payload: [],
                        //   postId: "",
                        //   title: "",
                        //   loading: true,
                        // });


                        // this.props.setPostCommentDetails({
                        //     id: "Post:" + newId1,
                        //     title: '',
                        //     loading: false,
                        // });

                        // } else {
                        //   if (Platform.OS == "web" && Dimensions.get("window").width > 750) {

                        //     var id1 = window.location.href.toString().split("/");
                        //     let newId = id1[id1.length - 1];

                        //     appolloClient
                        //       .query({
                        //         query:
                        //           getCommentPost,
                        //         variables: {
                        //           id: "Comment:" + newId,
                        //           depth: 10,
                        //           sort_type: "NEW"
                        //         },
                        //         fetchPolicy: "no-cache",
                        //       }).then(e => {
                        //         // console.log(e, 'eeeeee');

                        //         // this.props.setPostCommentReset({
                        //         //   payload: [],
                        //         //   postId: "",
                        //         //   title: "",
                        //         //   loading: true,
                        //         // });

                        //         this.props.setPostCommentDetails({
                        //           id: "Post:" + e.data?.node?.post?.id?.replace("Post:", ""),
                        //           title: e.data?.node?.post?.title,
                        //           loading: e.data?.node?.post?.num_comments > 0 ? true : false,
                        //         });
                        //         this.props.setUpdatedPostId(e.data?.node?.post?.id);
                        //       })



                        //   }
                        // }

                    }


                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: response.data.node_list.edges,
                        pageInfo: response.data.node_list.pageInfo,
                        page: page + 1,
                        apiCall: true,
                        loadingMore: false,
                        HomeFeedError: false,
                        showEmptyIcon:
                            response.data.node_list.edges.length == 0 ? true : false,
                        loadSkeleton: false,
                    });

                })
                .catch((e) => {
                    console.log(e);
                    __self.setState({
                        // isLoading: false,
                        data: [],
                        loading: false,
                        loadingMore: false,
                        HomeFeedError: true,
                        loadSkeleton: false,
                    });
                });
        }
        else if (pageInfo != null && pageInfo.hasNextPage == true) {
            this.setState({
                loadingMore: true,
                loading: true,
                // isLoading: true,
            });
            appolloClient
                .query({
                    query: HomeFeedMutation,
                    variables: {
                        first: 12,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                        type: 'Post'
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: this.state.data.concat(response.data.node_list.edges),
                        pageInfo: response.data.node_list.pageInfo,
                        apiCall: true,
                        loadingMore: false,
                        HomeFeedError: false,
                        showEmptyIcon:
                            response.data.node_list.edges.length == 0 ? true : false,
                    });
                    this.props.setNewHomeFeed(
                        this.state.data.concat(response.data.node_list.edges)
                    );

                })
                .catch((e) => {
                    console.log(e);
                    __self.setState({
                        // isLoading: false,
                        data: [],
                        loading: false,
                        loadingMore: false,
                        HomeFeedError: true,
                    });
                });
        }
    };

    _fetchAllTopicFeeds = () => {
        let __self = this;
        const { page, pageInfo } = this.state;
        if (pageInfo == null) {

            appolloClient
                .query({
                    query: TopicFeed,
                    variables: {
                        id: "Topic:" + __self.props.data,
                        first: 24,
                        after: null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    // this.props.setTrendingTopicHomeFeed(response.data.node.posts.edges);
                    // this.props.setPostCommentReset({
                    //   payload: [],
                    //   postId: "",
                    //   title: "",
                    //   loading: true,
                    // });
                    if (response.data.node.posts.edges.length) {
                        this.props.setPostCommentDetails({
                            id:
                                "Post:" +
                                response.data.node.posts.edges[0].node.id.replace("Post:", ""),
                            title: response.data.node.posts.edges[0].node.title,
                            loading: false,
                        });

                        this.props.navigation.navigate("topicProfile", {
                            id: response.data.node.posts.edges[0].node.id.replace("Post:", "")
                        })
                    }
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: Array.from(response.data.node.posts.edges),
                        pageInfo: null,
                        // response.data.node.posts.pageInfo,
                        page: page + 1,
                        apiCall: true,
                        loadingMore:
                            response.data.node.posts.pageInfo != null &&
                                response.data.node.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.node.posts.edges.length == 0 ? true : false,
                        loadSkeleton: false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        } else if (pageInfo != null) {

            appolloClient
                .query({
                    query: TopicFeed,
                    variables: {
                        id: "Topic:" + __self.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: this.state.data.concat(response.data.topic.posts.edges),
                        pageInfo: null,
                        // response.data.topic.posts.pageInfo,
                        apiCall: true,
                        loadingMore:
                            response.data.topic.posts.pageInfo != null &&
                                response.data.topic.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.topic.posts.edges.length == 0 ? true : false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        }
    };


    _fetchAllClikFeeds = () => {
        let __self = this;
        const { page, pageInfo } = this.state;

        if (pageInfo == null) {

            appolloClient
                .query({
                    query: ClikFeed,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    // this.props.setTrendingClikHomeFeed(response.data.node.posts.edges);

                    // this.props.setPostCommentReset({
                    //   payload: [],
                    //   postId: "",
                    //   title: "",
                    //   loading: true,
                    // });
                    this.props.setPostCommentDetails({
                        id: response.data.node.posts.edges.length > 0 &&
                            "Post:" +
                            response.data.node.posts.edges[0].node.id.replace("Post:", ""),
                        title: response.data.node.posts.edges.length > 0 && response.data.node.posts.edges[0].node.title,
                        loading: false,
                    });
                    // console.log(response.data.node, 'response.data.node.posts=======')

                    if (response.data.node.posts.edges.length > 0) {
                        this.props.navigation.navigate("clikProfile", {
                            id: response.data.node.name,
                            postId: response.data.node.posts.edges[0]?.node?.id.replace("Post:", "")
                        })
                    } else {
                        this.props.navigation.navigate("clikProfile", {
                            id: response.data.node.name,
                            postId: ''
                        })
                    }

                    // this.props.navigation.setParams({
                    //     query:response.data.node.posts.edges[0].node.id.replace("Post:", "")
                    // })
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: Array.from(response.data.node.posts.edges),
                        pageInfo: null,
                        // response.data.node.posts.pageInfo,
                        page: page + 1,
                        apiCall: true,
                        loadingMore:
                            response.data.node.posts.pageInfo != null &&
                                response.data.node.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.node.posts.edges.length == 0 ? true : false,
                        loadSkeleton: false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        } else if (pageInfo != null) {

            appolloClient
                .query({
                    query: ClikFeed,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: this.state.data.concat(response.data.clik.posts.edges),
                        pageInfo: null,
                        // response.data.clik.posts.pageInfo,
                        apiCall: true,
                        loadingMore:
                            response.data.clik.posts.pageInfo != null &&
                                response.data.clik.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.clik.posts.edges.length == 0 ? true : false,
                    });

                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        }
    };


    _fetchAllUserFeeds = () => {
        let __self = this;
        const { page, pageInfo } = this.state;
        if (pageInfo == null) {

            appolloClient
                .query({
                    query: UserFeedMutation,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    // this.props.setTrendingUserHomeFeed(response.data.node.posts.edges);
                    // this.props.setPostCommentReset({
                    //   payload: [],
                    //   postId: "",
                    //   title: "",
                    //   loading: true,
                    // });
                    if (response.data.node.posts.edges.length > 0) {
                        this.props.setPostCommentDetails({
                            id:
                                "Post:" +
                                response.data.node.posts.edges[0].node.id.replace("Post:", ""),
                            title: response.data.node.posts.edges[0].node.title,
                            loading: false,
                        });

                        this.props.navigation.navigate("userProfile", {
                            id: response.data.node.posts.edges[0].node.id.replace("Post:", "")
                        })
                    } else {
                        this.props.setPostCommentDetails({
                            id: "",
                            title: "",
                            loading: false,
                        });
                    }
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: Array.from(response.data.node.posts.edges),
                        pageInfo: null,
                        // response.data.node.posts.pageInfo,
                        page: page + 1,
                        apiCall: true,
                        loadingMore: false,
                        showEmptyIcon:
                            response.data.node.posts.edges.length == 0 ? true : false,
                        loadSkeleton: false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        } else if (pageInfo != null) {

            appolloClient
                .query({
                    query: UserFeedMutation,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: this.state.data.concat(response.data.user.posts.edges),
                        pageInfo: null,
                        // response.data.user.posts.pageInfo,
                        apiCall: true,
                        loadingMore: false,
                        showEmptyIcon:
                            response.data.user.posts.edges.length == 0 ? true : false,
                    });
                })

                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        }
    };


    _fetchAllExternalFeeds = () => {
        let __self = this;
        const { page, pageInfo } = this.state;
        // console.log(pageInfo,'pageInfopageInfopageInfo');
        if (pageInfo == null) {

            appolloClient
                .query({
                    query: ExternalFeedMutation,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    // this.props.setTrendingExternalHomeFeed(
                    //   response.data.node.posts.edges
                    // );
                    // this.props.setPostCommentReset({
                    //   payload: [],
                    //   postId: "",
                    //   title: "",
                    //   loading: true,
                    // });
                    if (response.data.node.posts.edges.length > 0) {
                        this.props.setPostCommentDetails({
                            id:
                                "Post:" +
                                response.data.node.posts.edges[0].node.id.replace(
                                    "Post:",
                                    ""
                                ),
                            title: response.data.node.posts.edges[0].node.title,
                            loading: false,
                        })

                        this.props.navigation.navigate("feedProfile", {
                            id: response.data.node.posts.edges[0].node.id.replace("Post:", "")
                        })
                    }
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: Array.from(response.data.node.posts.edges),
                        pageInfo: null,
                        // response.data.node.posts.pageInfo,
                        page: page + 1,
                        apiCall: true,
                        loadingMore:
                            response.data.node.posts.pageInfo != null &&
                                response.data.node.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.node.posts.edges.length == 0
                                ? true
                                : false,
                        loadSkeleton: false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        } else if (pageInfo != null) {

            appolloClient
                .query({
                    query: ExternalFeedMutation,
                    variables: {
                        id: this.props.data,
                        first: 24,
                        after: pageInfo ? pageInfo.endCursor : null,
                        sort_type: "NEW",
                    },
                    fetchPolicy: "no-cache",
                })
                .then((response) => {
                    __self.setState({
                        // isLoading: false,
                        loading: false,
                        data: this.state.data.concat(
                            response.data.node.posts.edges
                        ),
                        pageInfo: null,
                        // response.data.node.posts.pageInfo,
                        apiCall: true,
                        loadingMore:
                            response.data.node.posts.pageInfo != null &&
                                response.data.node.posts.pageInfo.hasNextPage == true
                                ? true
                                : false,
                        showEmptyIcon:
                            response.data.node.posts.edges.length == 0
                                ? true
                                : false,
                    });
                })
                .catch((e) => {
                    // this.setState({ isLoading: false });
                    console.log(e);
                });
        }
    };

    deleteData = (id) => {

        let leftData=this.state.data.filter(e=>e.node.id!=id)
        this.setState({data:leftData})
    
      }

    _renderItem = (item) => {
        return (
            <FeedList
                // loginModalStatusEventParent={this.handleModal}
                item={item}
                // navigation={this.props.navigation}
                // ViewMode={this.props.ViewMode}
                // highlight={this.makeHighlight}
                // tabPost={this.props.tabPost}
                // changeTabStatus={this.props.changeTabStatus}
                // onLoadingComment={this.props.onLoadingComment}
                ActiveTab="New"
                // deleteItem={this.deleteItemById}
                data={this.state.data}
                navigation={this.props.navigation}
                deleteData={this.deleteData}

            // index={this.props.index}
            // listType={this.props.listType}
            />)
    }


    _renderFooter = () => {
        if (!this.state.loadingMore)
            return (
                <View
                    style={{
                        // borderWidth: this.props.noPost == true ? 0 : 1,
                        borderColor: "#d7d7d7",
                        marginRight: 1,
                        borderBottomWidth: 0,
                        borderTopWidth: 0,
                        // height: Dimensions.get('window').height/5,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: ConstantFontFamily.defaultFont,
                            fontSize: 13,
                            textAlign: "center",
                            paddingVertical: 10,
                            color: "grey",
                        }}
                    >
                        {(this.state.data?.length > 0) || (this.props.isfeed && (!this.state.showEmptyIcon || this.state.data?.length > 1)) || (!this.state.HomeFeedError && this.state.data?.length > 0)
                            ? "No more posts"
                            : null}
                    </Text>
                </View>
            );

        if (this.state.loadingMore)
            return (
                <View style={{ marginVertical: 20 }}>
                    <ActivityIndicator animating size="large" color="#000" />
                </View>
            );
    };


    _renderLogoutFooter = () => {
        return (
            this.state.data.length > 0 && (
                <TouchableOpacity
                    style={{
                        alignContent: "center",
                        alignItems: "center",
                        paddingVertical: 15,
                    }}

                    onPress={() => this.props.setLoginModalStatus(true)}
                >
                    <Hoverable>
                        {(isHovered) => (
                            <Text
                                style={{
                                    color: isHovered == true ? "#009B1A" : "#000",
                                    fontSize: 12,
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontFamily: ConstantFontFamily.defaultFont,
                                }}
                            >
                                <Text
                                    onPress={() => this.props.setLoginModalStatus(true)}
                                    style={{
                                        textDecorationLine: "underline",
                                        fontSize: 12,
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontFamily: ConstantFontFamily.defaultFont,
                                    }}
                                >
                                    Login
                                </Text>{" "}
                                to see more...
                            </Text>
                        )}
                    </Hoverable>
                </TouchableOpacity>
            )
        );
    };


    onViewableItemsChanged = ({ viewableItems, changed }) => {
        let perLoadDataCount = this.props.listType == "Home" ? 12 : 24;
        let halfOfLoadDataCount = perLoadDataCount / 2;
        let lastAddArr = this.state.data.slice(-perLoadDataCount);

        try {
            if (
                lastAddArr[halfOfLoadDataCount] &&
                viewableItems.length > 0 &&
                true == 1
            ) {
                // FlatGrid
                if (Array.isArray(viewableItems[0].item)) {
                    if (
                        viewableItems[0].item.find(
                            (item) => item.node.id === lastAddArr[halfOfLoadDataCount].node.id
                        )
                    ) {
                        this._handleLoadMore(0);
                    }
                }
                //FlatList
                else {
                    if (
                        viewableItems.find(
                            (item) =>
                                item.item.node.id === lastAddArr[halfOfLoadDataCount].node.id
                        )
                    ) {
                        this._handleLoadMore(0);
                    }
                }
            }
        } catch (e) {
            console.log(e, "lastAddArr", lastAddArr[halfOfLoadDataCount]);
        }
    };


    _handleLoadMore = (distanceFromEnd) => {
        this.setState(
            () => {
                if (
                    0 <= distanceFromEnd &&
                    distanceFromEnd <= 5 &&
                    this.state.apiCall == true
                ) {
                    this.setState({
                        apiCall: false,
                    });
                    if (this.props.listType == "Home") {
                        this._fetchAllHomeFeeds();
                    } else if (this.props.listType == "Clik") {
                        this._fetchAllClikFeeds();
                    } else if (this.props.listType == "Topic") {
                        this._fetchAllTopicFeeds();
                    } else if (this.props.listType == "User") {
                        this._fetchAllUserFeeds();
                    } else if (this.props.listType == "Feed") {
                        this._fetchAllExternalFeeds();
                    }
                }
            }
        );
    };


    render() {
        console.log(this.props.postDeleteStatus, 'postDeleteStatus')
        return (
            <View style={{ height: Dimensions.get('window').height - 105 }}>

                <FlatList
                    // ref={this.flatListRef}
                    data={this.state.data}
                    // onScroll={(event) => {
                    //     this.props.listType != "Home"
                    //         ? this.props.listScroll(event.nativeEvent.contentOffset.y)
                    //         : null;
                    // }}
                    scrollEventThrottle={16}
                    keyExtractor={(item, index) => item.node.id}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    // onRefresh={this._handleRefresh}
                    // refreshing={this.state.refreshing}
                    onEndReached={({ distanceFromEnd }) => {
                    }}
                    onEndReachedThreshold={0.2}
                    initialNumToRender={8}
                    ListFooterComponent={
                        true == 1
                            ? this._renderFooter()
                            : this._renderLogoutFooter
                    }
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    // viewabilityConfig={this.viewabilityConfig}
                    removeClippedSubviews={false}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    //   trendingList: state.HomeFeedReducer.get("TrendingHomeFeedList"),
    //   newfeedList: state.HomeFeedReducer.get("NewHomeFeedList"),
    //   discussionList: state.HomeFeedReducer.get("DiscussionHomeFeedList"),

    //   getHasScrollTop: state.HasScrolledReducer.get("hasScrollTop"),
    // loginStatus: state.UserReducer.loginStatus,
    // isAdmin: state.AdminTrueFalseReducer.isAdmin,
    // isAdminView: state.AdminTrueFalseReducer.isAdminView,
    // postDeleteStatus: state.AdminTrueFalseReducer.postDeleteStatus,


    //   PostDetails: state.PostDetailsReducer.get("PostDetails"),
    //   PostCommentDetails: state.PostCommentDetailsReducer.get("PostCommentDetails"),
    //   getsearchBarStatus: state.AdminTrueFalseReducer.get("searchBarOpenStatus"),
    //   getTabView: state.AdminTrueFalseReducer.get("tabType"),
    //   index1: state.FixIndexReducer.index1,
    // isfeed: state.AdminTrueFalseReducer.isfeed,
    //   PostId: state.PostCommentDetailsReducer.get("PostId"),
    //   PostDetails: state.PostDetailsReducer.get("PostDetails"),
    //   show: state.showDiscussionReducer.show,
    //   windowSize: state.windowResizeReducer.windowResize,
    // screenName: state.screenNameReducer.screen,
    //   isLaoding: state.isLoadingReducer.isloading
});

const mapDispatchToProps = dispatch => ({


    //   setHASSCROLLEDACTION: payload => dispatch(setHASSCROLLEDACTION(payload)),
    //   setLoginModalStatus: payload => dispatch(setLOGINMODALACTION(payload)),
    //   setSearchBarStatus: payload =>
    //     dispatch({ type: "SEARCH_BAR_STATUS", payload }),
    //   setPostCommentReset: payload =>
    //     dispatch({ type: "POSTCOMMENTDETAILS_RESET", payload }),
    //   leftPanelModalFunc: payload => dispatch({ type: 'LEFT_PANEL_OPEN', payload }),
    //   searchOpenBarStatus: payload => dispatch({ type: "SEARCHBAR_STATUS", payload }),
    // setPostCommentDetails: payload => dispatch(setPostCommentDetails(payload)),
    // feedFluctuation: payload => dispatch(feedFluctuation(payload)),
    //   fixIndex: payload => dispatch(fixIndex(payload)),
    //   setUpdatedPostId: payload => dispatch({ type: "SET_UPDATED_POSTID", payload }),
    //   setUserr: (payload) => dispatch(userHighlight(payload)),
    //   showDiscussion: (payload) => dispatch(showDiscussion(payload)),
    //   // leftPanelModalFunc: (payload) =>
    //   //   dispatch({ type: "LEFT_PANEL_OPEN", payload }),
    //   screen: (payload) => dispatch(screen(payload)),
    //   setTerm: (payload) => dispatch({ type: "SET_TERM", payload }),
    //   setTermWeb: (payload) => dispatch({ type: "SET_TERM_WEB", payload }),
    // changeLoginStatus: payload => dispatch(setLoginStatus(payload)),
    //   setTabView: (payload) => dispatch({ type: "SET_TAB_VIEW", payload }),
    // setNewHomeFeed: (payload) => dispatch(setNewHomeFeed(payload)),
    // deletePostAction: (payload) => dispatch(deletePostAction(payload)),

});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    NewHomeFeed
);


// export default NewHomeFeed;

