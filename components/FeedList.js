import React, { useState } from "react";
import { View, Dimensions, Text, TouchableOpacity, Image, Platform, TextInput } from 'react-native'
import HomeStyle from "./Style/HomeStyle";
import ConstantFontFamily from '../constants/FontFamily'
import {
    Menu,
    MenuTrigger, MenuOption, MenuOptions
} from "react-native-popup-menu";
import { connect } from "react-redux";
import { compose } from "react-recompose";
// import { setFEEDREPORTMODALACTION } from "../actionCreator/FeedReportModalAction";
import { setLOGINMODALACTION } from "../actionCreator/LoginModalAction";
import { setPostCommentDetails } from "../actionCreator/PostCommentDetailsAction";
import { setPostDetails } from "../actionCreator/PostDetailsAction";
import ButtonStyle from "../constants/ButtonStyle";
import Colors from "../constants/Colors";
// import CommonTooltipBottomPost from './CommonTooltipBottomPost';
// import { showDiscussionReducer, deletePostAction } from '../reducers/AdminTrueFalseReducer';
import { getCurrentUserProfileDetails } from "../actionCreator/UserProfileDetailsAction";
import { getFeedProfileDetails } from "../actionCreator/FeedProfileAction";
// import CommonBottomSection from './CommonBottomSection';
import { Hoverable } from "react-native-web-hooks";
// import { postEditDetails } from "../reducers/LinkPostReducer";
// import { setPostShareModel } from '../reducers/PostShareReducer';
import { OpenWindow, WriteToClipboard } from '../constants/CommonFunction';
// import { screen } from '../reducers/ScreenNameReducer';
import appolloClient from "../client";
import { DeleteContentMutation } from "../graphqlSchema/FeedMutation";

const FeedList = props => {
    const [titleHeight, settitleHeight] = useState(25)
    const [summaryHeight, setsummaryHeight] = useState()
    let [showMoreOption, setshowMoreOption] = useState(false);


    const handleDoubleTap = async () => {
        // if (Dimensions.get("window").width >= 750 && Platform.OS == 'web') {

        // } else {
        await props.setPostCommentDetails({
            id: "Post:" + props.item.item.node.id.replace("Post:", ""),
            title: props.item.item.node.title,
            loading: false
        })
        if (Dimensions.get('window').width > 750 && Dimensions.get('window').width < 1200) {
            props.showDiscussion12(true)
        }

        if (Dimensions.get('window').width < 750) {

            props.setPostDetails({
                title: props.item.item.node.title,
                id: props.item.item.node.id,
                navigate: true,
                navigation: props.navigation
            });

            props.screen("postDetails")
        }
    }


    const handleDeleteFeed = id => {
        appolloClient
            .query({
                query: DeleteContentMutation,
                variables: {
                    id: id
                },
                fetchPolicy: "no-cache"
            })
            .then(response => {
                if (response.data.node_delete.status.success == true) {
                    props.deleteData(id)
                    props.deletePostAction(true);
                } else {
                    props.deletePostAction(false);
                }
            })
            .catch(e => {
                console.log(e);
            });
    };

    const goToPage = (data) => {
        console.log(data)
        if (data.author != null) {
            console.log('data author', data)
            props.userId({
                username: data.author.username,
                type: "feed",
            });
            props.navigation.navigate('userProfile', { id: "" })
        } else if (data.external_feeds.edges[0].node.profile_pic) {
            console.log('data external_feeds', data)

            props.setFeedDetails({
                id: data.external_feeds.edges[0].node.id.replace("ExternalFeed:", ""),
                type: "feed"
            });

            props.navigation.navigate("feedProfile", { id: "" })
        }
    }

    const handleSharePost = (id) => {
        props.setPostShareModel({ status: true, id: id });

    }

    return (
        // <View style={{backgroundColor:'red', height:500}}></View>
        <>
            {/* {props.isfeed ? */}
            <TouchableOpacity
                // ref={feed}
                // nativeID={props.ActiveTab + props.item.item.node.id}
                style={props.PostId && props.PostId.replace("Post:", "") == props.item.item.node.id.replace("Post:", "") ? HomeStyle.selectFeedStyleForDashboard :
                    HomeStyle.normalFeedStyleForDashboard}
                onPress={async () => {
                    handleDoubleTap();
                }}
                onMouseEnter={() => {
                    setshowMoreOption(true)
                    // props.addIcon(props.item.item.node.id)

                }}
                onMouseLeave={() => {
                    setshowMoreOption(false)
                    // props.addIcon('')
                }}

            >
                <View style={{
                    flexDirection: 'row',
                    width: '98%',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingVertical: Dimensions.get("window").width >= 750 && props?.item?.item?.node?.external_feeds?.edges[0]?.node?.profile_pic != null ? 10 :
                        Dimensions.get("window").width < 750 && props?.item?.item?.node?.external_feeds?.edges[0]?.node?.profile_pic != null ? 10 : 0,

                }}>
                    {/* {console.log(props?.item?.item, 'props?.item?.item?')} */}
                    {props?.item?.item?.node?.author?.profile_pic || props?.item?.item?.node?.external_feeds?.edges?.length > 0 && props?.item?.item?.node?.external_feeds?.edges[0]?.node?.profile_pic != null ?
                        <TouchableOpacity
                            style={{

                                // alignSelf: 'flex-start',
                                // paddingVertical: Dimensions.get("window").width >= 750 ? 10 : 20,
                                marginRight: Dimensions.get('window').width >= 750 ? 20 : 5,
                                width: Dimensions.get('window').width >= 750 ? '5%' : '15%'
                            }}
                            onPress={() => goToPage(props?.item?.item?.node)}
                        >

                            <Image
                                source={props?.item?.item?.node?.author?.profile_pic ? { uri: props?.item?.item?.node?.author?.profile_pic } : props?.item?.item?.node?.external_feeds?.edges?.length > 0 && props?.item?.item?.node?.external_feeds?.edges[0]?.node?.profile_pic != null && { uri: props?.item?.item?.node?.external_feeds?.edges[0]?.node?.profile_pic }}

                                // source={{ uri: 'data:image/png;base64,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' }}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 8
                                }}
                            />
                        </TouchableOpacity> :
                        null}
                    <View style={{ width: Dimensions.get('window').width >= 750 ? '98%' : '85%', }}>
                        {/* <CommonBottomSection
                            props={props}
                            item={props.item.item.node}
                        /> */}
                    </View>

                    {Dimensions.get('window').width > 750 ? <Menu
                        onClose={() => {
                            // console.log('closing');
                            // props.clikHover({ isClik: false, clikId: props.item.item.node.id.replace("Post:", "") })
                            if (props.PostId.replace("Post:", "") == props.item.item.node.id.replace("Post:", "")) {
                                setshowMoreOption(true)
                            }
                        }}
                    >

                        <MenuTrigger
                            onPress={() => {
                                if (props.PostId && props.PostId.replace("Post:", "") == props.item.item.node.id.replace("Post:", "")) {
                                    // props.clikHover({ isClik: true, clikId: props.item.item.node.id.replace("Post:", "") })
                                }
                            }} >
                            {showMoreOption
                                || (props.clikId == props.item.item.node.id.replace("Post:", "")
                                    && props.isClik == true)
                                ?
                                <Image
                                    source={''}
                                    // source={require("../assets/image/menu.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        alignSelf: "flex-end",
                                        transform: [{ rotate: "90deg" }]
                                    }}
                                />
                                : null}
                        </MenuTrigger>
                        <MenuOptions
                            optionsContainerStyle={{
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: '#d3d3d3',
                                shadowColor: "transparent"
                            }}
                            customStyles={{
                                optionsContainer: {
                                    minHeight: 50,
                                    width: 150,
                                    marginTop: Platform.OS != 'web' ? -30 : 15,
                                    marginLeft: Dimensions.get('window').width < 1350 ? -25 : -140,

                                }
                            }}
                        >

                            <MenuOption
                                // onSelect={() => {
                                //     true == 1
                                //         ? handleSharePost(props?.item?.item?.node?.id)
                                //         : props.setLoginModalStatus(true);
                                // }}
                            >
                                <Hoverable>
                                    {isHovered => (
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                color: isHovered == true ? Colors.blueColor : "#000",
                                                fontFamily: ConstantFontFamily.defaultFont
                                            }}
                                        >
                                            Share post
                                        </Text>
                                    )}
                                </Hoverable>
                            </MenuOption>

                            <MenuOption onSelect={() => WriteToClipboard(props.item.item.node.id)}>
                                <Hoverable>
                                    {isHovered => (
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                color: isHovered == true ? Colors.blueColor : "#000",
                                                fontFamily: ConstantFontFamily.defaultFont
                                            }}
                                        >
                                            Copy Link
                                        </Text>
                                    )}
                                </Hoverable>
                            </MenuOption>
                            {props.isAdmin ?
                                <MenuOption
                                    onSelect={() => {
                                        true == 1
                                            ? handleDeleteFeed(props?.item?.item?.node?.id)
                                            : props.setLoginModalStatus(true);
                                    }}
                                >
                                    <Hoverable>
                                        {isHovered => (
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    color: isHovered == true ? Colors.blueColor : "#000",
                                                    fontFamily:
                                                        ConstantFontFamily.defaultFont
                                                }}
                                            >
                                                Delete
                                            </Text>
                                        )}
                                    </Hoverable>
                                </MenuOption> : null
                            }
                            {props.isAdmin ?
                                <MenuOption
                                    onSelect={() => {
                                        props.setPostEditDetails(props?.item?.item?.node)
                                        props.navigation.navigate("editPost")
                                    }
                                    }
                                >
                                    <Hoverable>
                                        {isHovered => (
                                            <Text
                                                style={{
                                                    textAlign: "center",
                                                    color: isHovered == true ? Colors.blueColor : "#000",
                                                    fontFamily:
                                                        ConstantFontFamily.defaultFont
                                                }}
                                            >
                                                Edit
                                            </Text>
                                        )}
                                    </Hoverable>
                                </MenuOption> : null}
                        </MenuOptions>
                    </Menu> : null}

                </View>
                <View style={{ alignItems: 'center', width: '100%', }}>

                    <View
                        style={{
                            width:
                                '100%',
                            paddingHorizontal: Dimensions.get('window').width >= 750 ? 0 : 5,

                        }}


                    >
                        <View style={{ flexDirection: 'row', paddingHorizontal: Dimensions.get('window').width <= 750 ? '2%' : '12%' }}>
                            {Platform.OS == 'web' ?
                                <TextInput
                                    value={props.item.item.node.title}
                                    // {Dimensions.get('window').width > 750 ? props.item.item.node.title
                                    //   : Dimensions.get('window').width <= 750 && props.item.item.node.title.length >= 40 ? props.item.item.node.title.substring(0, 37) + '...' : props.item.item.node.title}
                                    readOnly={true}
                                    style={[ButtonStyle.feedListTitle, {
                                        height: Math.max(25, titleHeight),

                                    }]}
                                    onContentSizeChange={e => {
                                        settitleHeight(e.nativeEvent.contentSize.height);
                                    }}

                                    scrollEnabled={false}
                                    multiline={true}
                                    // editable={false}
                                    contextMenuHidden={true}
                                // numberOfLines={Dimensions.get('window').width <= 750 ? 1 : Dimensions.get('window').width > 750 && props.item.item.node.title.length > 200 ? 3 : Dimensions.get('window').width > 750 && props.item.item.node.title.length > 80 ? 2 : 1}

                                />

                                :

                                <Text selectable

                                    style={{
                                        textAlign: "center",
                                        color: "#000",
                                        fontFamily: ConstantFontFamily.defaultFont,
                                        fontSize: 16,
                                        paddingVertical: 20,
                                        overflow: 'hidden',
                                        fontWeight: 'bold',
                                        width: '100%'

                                    }}
                                >
                                    {props.item.item.node.title}
                                </Text>
                            }


                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 10, marginTop: Dimensions.get("window").width >= 750 ? 0 : 20 }}>

                        {props.item?.item?.node?.cliks?.edges.map((data1, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                                    {/* <Image
                              source={{uri : data1.node?.profile_pic ? data1.node?.profile_pic : require("../assets/image/logolastOne.png")}}
                              style={{
                                width: 20,
                                height: 20,
                                marginRight: 5
                              }}
                            /> */}

                                    <View
                                        style={[ButtonStyle.clikNameBackgroundStyle, {
                                            marginTop: 5,
                                            backgroundColor: "#E8F5FA",
                                            marginLeft: 0
                                        }]}
                                    >
                                        <Text style={[ButtonStyle.clikNameTitleStyle, { fontSize: 11, color: Colors.blueColor }]}>#{data1.node?.name}</Text>
                                    </View>
                                </View>

                            )
                        })}
                        {/* {!showOtherIcon && props.item?.item?.node?.cliks?.edges.length >= 2 ?
                        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setshowOtherIcon(!showOtherIcon)}>
                          <Image
                            source={require("../assets/image/menu.png")}
                            style={{
                              height: 20,
                              width: 20,
                              alignSelf: "flex-end",
                              transform: [{ rotate: "90deg" }]
                            }}
                          />
                        </TouchableOpacity> : null} */}

                        {(props.item?.item?.node?.cliks?.edges.length < 2) ?
                            props.item?.item?.node?.users?.edges.map((data2, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>

                                        <Image
                                            source={data2.node?.profile_pic ? { uri: data2.node?.profile_pic } :null} // require("../assets/image/userDefault.png")}
                                            style={{
                                                width: 20,
                                                height: 20,
                                                marginRight: 5,
                                                marginLeft: 0,
                                                borderRadius: 6

                                            }}
                                        />
                                        <Text style={{ fontSize: 11, fontFamily: ConstantFontFamily.defaultFont, color: '#000' }}>@{data2.node?.username}</Text>

                                    </View>
                                )
                            }) : null}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '98%' }}>

                        <View
                            style={{
                                width:

                                    '100%',
                                paddingRight: 5,
                                alignSelf: 'flex-end',
                                marginBottom: 10,
                                paddingLeft: Dimensions.get('window').width >= 750 ? 0 : 5
                            }}


                        >
                            {Dimensions.get('window').width >= 750 ?
                                <TextInput
                                    value={
                                        Dimensions.get('window').width > 750 && props.item.item.node.summary
                                            ? props.item?.item?.node?.summary : props.item?.item?.node?.summary}
                                    readOnly={true}
                                    style={[HomeStyle.summaryTextStyle, {
                                        height: Math.max(20, summaryHeight),
                                    }]}
                                    scrollEnabled={false}
                                    onContentSizeChange={e => {
                                        // props.item?.item?.node?.summary?.length > 0 ? 
                                        setsummaryHeight(e.nativeEvent.contentSize.height);
                                    }}
                                    multiline={true}
                                />
                                :
                                null}




                            {/* <View style={{ height: 2, backgroundColor: '#efefef', width: '100%', marginVertical: 10 }}></View> */}
                            {/* <CommonTooltipBottomPost
                                props={props}
                                item={props.item.item}
                                //   heartCount={heartCountNum && heartCountNum}
                                type={'post'}
                                //   handleClickComment={handleClickComment}
                                handleDoubleTap={handleDoubleTap}
                                navigation={props.navigation}
                            /> */}
                        </View>
                    </View>
                </View>

                <View style={{ height: 1, width: '94%', marginLeft: '3%', backgroundColor: '#d3d3d3' }}></View>

            </TouchableOpacity>
            {/* // : null} */}
        </>
    )

}
const mapStateToProps = state => ({
    // loginStatus: state.UserReducer.loginStatus,
    // PostId: state.PostCommentDetailsReducer.PostId,
    // isfeed: state.AdminTrueFalseReducer.isfeed,
    // isAdmin: state.AdminTrueFalseReducer.isAdmin,
});

const mapDispatchToProps = dispatch => ({
    // setPostDetails: payload => dispatch(setPostDetails(payload)),
    // userId: (payload) => dispatch(getCurrentUserProfileDetails(payload)),
    // setFeedDetails: payload => dispatch(getFeedProfileDetails(payload)),
    // setLoginModalStatus: (payload) => dispatch(setLOGINMODALACTION(payload)),
    // setPostCommentDetails: payload => dispatch(setPostCommentDetails(payload)),
    // setPostShareModel: (payload) => dispatch(setPostShareModel(payload)),
    // showDiscussion12: (payload) => dispatch(showDiscussionReducer(payload)),
    // setPostEditDetails: payload => dispatch(postEditDetails(payload)),
    // screen: (payload) => dispatch(screen(payload)),
    // deletePostAction: (payload) => dispatch(deletePostAction(payload)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
    React.memo(FeedList)
);

