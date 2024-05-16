import React from "react";
import appolloClient from "../client";
import { HomeFeedMutation } from "../graphqlSchema/FeedMutation";
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
import FeedList from "./FeedList";
import { connect } from "react-redux";
import { compose } from "react-recompose";
import { Hoverable } from "react-native-web-hooks";
        // import { feedFluctuation } from '../reducers/AdminTrueFalseReducer';
        // import { setNewHomeFeed } from '../reducers/HomeFeedReducer';
import { setPostCommentDetails } from '../actionCreator/PostCommentDetailsAction';


import ConstantFontFamily from "../constants/FontFamily";

class DiscussionHomeFeed extends React.PureComponent {
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
        appolloClient
            .query({
                query: HomeFeedMutation,
                variables: {
                    //first: 24,
                    first: 24,
                    after: null,
                    sort_type: "DISCUSSING",
                    type: 'Post'
                },
                fetchPolicy: "no-cache",
            }).then(res => {
                console.log(res)
                this.setState({ data: res.data.node_list.edges })

            }).catch(e => console.log(e, '=================================================================================================================>>>>>>>>>>>>>>>>>>>>s'))
    }


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


    render() {
        return (
            <View style={{ height: Dimensions.get('window').height-105}}>

                <FlatList
                    // ref={this.flatListRef}
                    data={this.state.data}
                    // onScroll={(event) => {
                    //     this.props.listType != "Home"
                    //         ? this.props.listScroll(event.nativeEvent.contentOffset.y)
                    //         : null;
                    // }}
                    scrollEventThrottle={16}
                    // keyExtractor={(item, index) => item.node.id}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    // onRefresh={this._handleRefresh}
                    // refreshing={this.state.refreshing}
                    onEndReached={({ distanceFromEnd }) => {
                    }}
                    onEndReachedThreshold={0.2}
                    initialNumToRender={8}
                    // ListFooterComponent={
                    //     true == 1
                    //         ? this._renderFooter
                    //         : this._renderLogoutFooter
                    // }
                    // onViewableItemsChanged={this.onViewableItemsChanged}
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
    //   screenName: state.screenNameReducer.screen,
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
    // setNewHomeFeed: (payload) => dispatch(setNewHomeFeed(payload))

});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    DiscussionHomeFeed
);


// export default DiscussionHomeFeed;

