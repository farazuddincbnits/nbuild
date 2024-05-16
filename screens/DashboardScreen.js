import * as React from 'react';
import { lazy, createRef, Suspense } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,

} from "react-native";
import { Icon } from "react-native-elements";
import {
  Menu,
  MenuTrigger, MenuOption, MenuOptions
} from "react-native-popup-menu";
import { connect } from "react-redux";
import { compose } from "react-recompose";
import { setLOGINMODALACTION } from "../actionCreator/LoginModalAction";
// import ShadowSkeleton from "../components/ShadowSkeleton";
import ConstantFontFamily from "../constants/FontFamily";
import ButtonStyle from "../constants/ButtonStyle";
// import { screen } from '../reducers/ScreenNameReducer'
import Colors from "../constants/Colors";
import {
  saveUserLoginDaitails,
  setLoginStatus
} from "../actionCreator/UserAction";
// import { showDiscussionReducer } from '../reducers/AdminTrueFalseReducer';
import TrendingHomeFeed from '../components/TrendingHomeFeed'
import NewHomeFeed from '../components/NewHomeFeed';
import DiscussionHomeFeed from '../components/DiscussionHomeFeed';
// import LeftPanel from '../components/LeftPanel';
// import Modal from "react-native-modal";
// import CommentDetailScreen from './CommentDetailScreen';
// import { setTermWeb, setTerm } from '../reducers/ScreenLoadingReducer';
// import { setInviteLinkStatus } from '../reducers/AdminTrueFalseReducer';
import { setSIGNUPMODALACTION } from '../actionCreator/SignUpModalAction';
// import { setUSERNAMEMODALACTION } from "../reducers/AdminTrueFalseReducer";
// import { leftPanelModalFunc } from '../reducers/AdminTrueFalseReducer';
// import {setTabView,searchOpenBarStatus} from '../reducers/AdminTrueFalseReducer';





const initRoutes = [
  {
    key: "second",
    title: "New",
    icon: "fire",
    type: "simple-line-icon"
  },
  { key: "first", title: "Trending", icon: "clock-o", type: "font-awesome" },
  {
    key: "third",
    title: "Bookmarks",
    icon: "bookmark",
    type: "font-awesome",
  }
];



let lastTap = null;
class DashboardScreen extends React.PureComponent {
  state = {
    commentDelay: false,
    routes: [...initRoutes],
    ViewMode: "Default",
    prevFeedList: {
      trending: {},
      discussion: {},
      new: {}
    },
    feedY: 0,
    UnreadNotifications: 0,
    showSearchIcon: true,
    tabPost: false,
    indexStatus: false,
    setHeaderIcon: 'Trending',
    login: "1",
    modalVisible: false,
    focused: "Trending",
  };

  constructor(props) {
    super(props);
    this.Pagescrollview = null;
    this.flatListRefNew = createRef();
    this.flatListRefDiscussion = createRef();
    this.flatListRefTrending = createRef();
    this.nameInput = createRef()
    this.commentRef = createRef()
  }

  componentDidMount = async () => {
    // // this.props.searchOpenBarStatus(false)
    // if (!this.props.profileData?.data?.user) {
    //   // this.props.changeLoginStatus(0)
    // }
    // // console.log(this.props.loginStatus, 'check')
    // // trueDiscussion(false)
    // this.setState({ focused: "Trending" })

    // this.props.setTermWeb('');
    // this.props.setTerm('');

    // if (window.location.href.toString().includes('invite') == true) {
    //   this.props.setInviteModal(true)
    //   this.props.setUsernameModalStatus(true)
    // }


    // let Domain = window.location.href
    //   .replace("http://", "")
    //   .replace("https://", "")
    //   .replace("www.", "")
    //   .split(/[/?#]/)[1];

   

    // this.props.screen("home")

  };


  selectTab = (tabName) => {
    this.setState({ setHeaderIcon: tabName })
  }

  componentDidUpdate() {
    // if (this.props.getHasScrollTop == true && this.Pagescrollview) {
    //   this.Pagescrollview.scrollToOffset({ animated: true, offset: 0 });
    //   this.props.setHASSCROLLEDACTION(false);
    // }
  }

  goToScrollTop = () => {
    this.props.leftPanelModalFunc(true)
    this.setState({ modalVisible: true })
  };


  doScroll = (value, name) => {
    if (name == "new") {
      this.flatListRefNew = value;
    } else if (name == "trending") {
      this.flatListRefTrending = value;
    } else if (name == "discussion") {
      this.flatListRefDiscussion = value;
    }
  };


  handleDoubleTap = () => {
    if (lastTap !== null) {
      clearTimeout(lastTap);
      lastTap = null;
    } else {
      lastTap = setTimeout(() => {
        clearTimeout(lastTap);
        lastTap = null;
      }, 1000);
    }
    this.setState({ tabPost: true })

    this.props.feedFluctuation(true)
  };

  _renderLazyPlaceholder = ({ route }) => <ShadowSkeleton />;

  _handleIndexChange = index => {
    // this.props.fixIndex(index)
    // this.setState({ index });
    // if (index == 1) {
    //   this.setState({ indexStatus: true })
    // } else if (index == 0 && index == 2) {
    //   this.setState({ indexStatus: false })

    // } else {
    //   this.setState({ indexStatus: false })

    // }
    // if (index == 0 && this.props.trendingList && Array.from(this.props.trendingList).length > 0) {
    //   this.props.feedFluctuation(true)
    //   this.props.setUpdatedPostId(Array.from(this.props.trendingList)[0].node.id)
    //   this.props.setPostCommentReset({
    //     payload: [],
    //     postId: '',
    //     title: '',
    //     loading: true
    //   });
    //   this.props.setPostCommentDetails({
    //     id: "Post:" + Array.from(this.props.trendingList)[0].node.id.replace("Post:", ""),
    //     title: Array.from(this.props.trendingList)[0].node.title,
    //     loading: false
    //   });





    // } else if (index == 1 && this.props.newfeedList && Array.from(this.props.newfeedList).length > 0) {

    //   this.props.feedFluctuation(true)
    //   this.props.setUpdatedPostId(Array.from(this.props.newfeedList)[0].node.id)
    //   this.props.setPostCommentReset({
    //     payload: [],
    //     postId: '',
    //     title: '',
    //     loading: true
    //   });

    //   this.props.setPostCommentDetails({
    //     id: "Post:" + Array.from(this.props.newfeedList)[0].node.id.replace("Post:", ""),
    //     title: Array.from(this.props.newfeedList)[0].node.title,
    //     loading: false
    //   });




    // } else if (index == 2 && this.props.discussionList && Array.from(this.props.discussionList).length > 0) {
    //   this.props.feedFluctuation(true)
    //   this.props.setUpdatedPostId(Array.from(this.props.discussionList)[0].node.id)
    //   this.props.setPostCommentReset({
    //     payload: [],
    //     postId: '',
    //     title: '',
    //     loading: true
    //   });

    //   this.props.setPostCommentDetails({
    //     id: "Post:" + Array.from(this.props.discussionList)[0].node.id.replace("Post:", ""),
    //     title: Array.from(this.props.discussionList)[0].node.title,
    //     loading: false
    //   });


    // }

  };

  _renderTabBar = props =>
    Dimensions.get("window").width >= 750 ? (

      <View
        style={[
          ButtonStyle.TabbarBorderStyleForDashboard,
          {
            flexDirection: "row",
            height: 55,
            backgroundColor:
              Dimensions.get("window").width <= 750 ? "#000" : "#fff",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderBottomWidth: 1
          }
        ]}
      >

        <TabBar
          onTabPress={() => { this.handleDoubleTap(), this.setState({ activeColor: '#009B1A' }) }}

          {...props}
          indicatorStyle={{
            backgroundColor: "transparent",
            height: 2,
            borderRadius: 6
          }}
          style={{
            backgroundColor: 'transparent',
            width: "100%",
            height: 55,
            shadowColor: "transparent",
            justifyContent: 'center',

          }}

          labelStyle={[ButtonStyle.profileTitleStyle, {
            color: "#000",
            fontSize: 13,
          }]}
         
          renderLabel={({ route, focused, color, isActive }) => (
            <Text
              style={[ButtonStyle.tabbarTitleStyle, {
                color: focused ? Colors.blueColor : isActive ? Colors.blueColor : "#D3D3D3",
                flexWrap: "wrap",
                flex: 1,
                width: "100%",
                fontWeight: focused ? 'bold' : isActive ? 'bold' : '100'
              }]}
            >
              {route.title}
            </Text>
          )}
          renderIndicsator={({ route, focused, color }) => null}
        />

      </View>
    ) : null;

  changeTabStatus = () => {
    this.setState({ tabPost: false })
  }

  _renderScene = () => {
    if (this.state.focused == "Discussion") {
      return (
        // this.props.loginStatus == 1
        true ? (
          <View style={{ flex: 1 }}>
          
            <DiscussionHomeFeed
              navigation={this.props.navigation}
              listType={"Home"}
              ViewMode={this.state.ViewMode}
              
              prevFeedList={this.state.prevFeedList}
              ActiveTab={''}
              doScroll={this.doScroll}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              color={"#000"}
              iconStyle={{
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
              reverse
              name="sticky-note"
              type="font-awesome"
              size={20}
              containerStyle={{
                alignSelf: "center"
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: ConstantFontFamily.defaultFont,
                color: "#000",
                alignSelf: "center"
              }}
            >
              <Text
                onPress={() => this.loginHandle()}
                style={{
                  textDecorationLine: "underline",
                  fontFamily: ConstantFontFamily.defaultFont
                }}
              >
                Login
              </Text>{" "}
              to see bookmarked posts
            </Text>
          </View>
        ))
    }

    else if (this.state.focused == "New") {
      return (
        <NewHomeFeed
          navigation={this.props.navigation}
          listType={"Home"}
          ViewMode={this.state.ViewMode}
          prevFeedList={this.state.prevFeedList}
          ActiveTab={''}
          doScroll={this.doScroll}
        />


      )

    }
    else if (this.state.focused == "Trending") {
      return (
        <View style={{ flex: 1 }}>
          <TrendingHomeFeed
            navigation={this.props.navigation}
            listType={"Home"}
            ViewMode={this.state.ViewMode}
            prevFeedList={this.state.prevFeedList}
            ActiveTab={''}
            doScroll={this.doScroll}
          />
        </View>
      )
    }
   
  };

  renderTabViewForMobile = () => {
    
    if (this.state.setHeaderIcon == "Bookmarks") {
      return (
        // this.props.loginStatus == 1
        true ? (
          <View >
            <DiscussionHomeFeed
              navigation={this.props.navigation}
              listType={"Home"}
              ViewMode={this.state.ViewMode}
             
              prevFeedList={this.state.prevFeedList}
              ActiveTab={''}
              
              doScroll={this.doScroll}
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              color={"#000"}
              iconStyle={{
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
              reverse
              name="sticky-note"
              type="font-awesome"
              size={20}
              containerStyle={{
                alignSelf: "center"
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: ConstantFontFamily.defaultFont,
                color: "#000",
                alignSelf: "center"
              }}
            >
              <Text
                onPress={() => this.loginHandle()}
                style={{
                  textDecorationLine: "underline",
                  fontFamily: ConstantFontFamily.defaultFont
                }}
              >
                Login
              </Text>{" "}
              to see bookmarked posts
            </Text>
          </View>
        ))
    }

    else if (this.state.setHeaderIcon == "New" ) {

      return (
        <View >
          < NewHomeFeed
            navigation={this.props.navigation}
            listType={"Home"}
            ViewMode={this.state.ViewMode}
           
            prevFeedList={this.state.prevFeedList}
            ActiveTab={''}
           
            doScroll={this.doScroll}
          />
        </View>)

    }
    else if (this.state.setHeaderIcon == "Trending") {

      
      return (
        <View >
          <TrendingHomeFeed
            navigation={this.props.navigation}
            listType={"Home"}
            ViewMode={this.state.ViewMode}
            
            prevFeedList={this.state.prevFeedList}
            ActiveTab={''}
            
            doScroll={this.doScroll}
          />
        </View>
      )
    }
    else {
      return (
        <View >
          <TrendingHomeFeed
            navigation={this.props.navigation}
            listType={"Home"}
            ViewMode={this.state.ViewMode}
           
            prevFeedList={this.state.prevFeedList}
            ActiveTab={''}
           
            doScroll={this.doScroll}
          />
        </View>
      )
    }
  }


  loginHandle = () => {
    // this.props.loginModalStatus(true);
  };

  listScroll = value => {
    this.setState({
      feedY: value
    });
  };


  render() {

    return (
      <View style={[ButtonStyle.mainContainer, {
      }]}>


        {
          Platform.OS != 'web' ? (
            <Animated.View
              style={{
                position: Platform.OS == "web" ? "sticky" : null,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                overflow: "hidden",
                borderRadius: 0,
              }}
            >
              <View
                style={{
                  height: Dimensions.get("window").width <= 750 ? 50 : 42
                }}
              >
                {true ?
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#000'
                  }}>

                    <TouchableOpacity
                      onPress={() => {
                        // this.props.leftPanelModalFunc(true)
                      }}
                      style={{
                        flexDirection: "row",
                        backgroundColor: Dimensions.get("window").width <= 750 ? "f4f4f4" : "#000",
                        height: 50,
                        marginLeft: 5,
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        source={''}
                        // source={require("../assets/image/logolastOne.png")}
                        style={{
                          alignSelf: "center",
                          height: 35,
                          width: 35,
                        }}
                        resizeMode={"contain"}
                      />

                    </TouchableOpacity>

                    <View style={{ width: '75%', marginHorizontal: 5, }}>
                      {/* <Suspense fallback={null}> */}

                        {/* <SearchInputWeb
                          navigation={this.props.navigation}
                          displayType={"web"}
                          press={status => {
                            this.setState({ showSearchIcon: status });
                          }}
                          nameInput={this.nameInput}
                        /> */}
                      {/* </Suspense> */}

                    </View>
                    <Menu>
                      <MenuTrigger >

                        <Icon
                          name={this.state.setHeaderIcon == 'Trending' ? 'clock-o' :
                            this.state.setHeaderIcon == 'New' ? 'fire' :
                              this.state.setHeaderIcon == 'Bookmarks' ? 'bookmark' : 'clock-o'}
                          type={this.state.setHeaderIcon == 'New' ? 'simple-line-icon' : 'font-awesome'}
                          color="#FFF"
                          style={{ width: 40 }}
                        />

                      </MenuTrigger>

                      <MenuOptions
                        optionsContainerStyle={{
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: "#c5c5c5",
                          shadowColor: "transparent",
                         
                        }}

                        customStyles={{
                          optionsContainer: {
                            position: 'absolute',
                            marginTop: 50,
                            
                          },
                          optionWrapper: { padding: 5 },
                        }}
                      >
                        <MenuOption onSelect={() => this.selectTab("Trending")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Icon
                              name='clock-o'
                              type='font-awesome'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>Trending</Text></View>
                        </MenuOption>
                        <MenuOption onSelect={() => this.selectTab("New")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                              name='fire'
                              type='simple-line-icon'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>New</Text>
                          </View>
                        </MenuOption>
                        <MenuOption onSelect={() => this.selectTab("Bookmarks")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                              name='bookmark'
                              type='font-awesome'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>Bookmarks</Text>
                          </View>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>


                  </View>
                  :
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#000'
                  }}>


                    <TouchableOpacity
                      // onPress={this.goToScrollTop}
                      style={{
                    
                        flexDirection: "row",
                        backgroundColor: Dimensions.get("window").width <= 750 ? "f4f4f4" : "#000",
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '10%',
                        marginHorizontal: 10

                      }}
                    >
                      <Image
                        source={''}
                        // source={require("../assets/image/logolastOne.png")}
                        style={{
                          marginRight: 5,
                          alignSelf: "center",
                          height: 35,
                          width: 35,
                        
                        }}
                        resizeMode={"contain"}
                      />

                    </TouchableOpacity>
                    <Menu>
                      <MenuTrigger >
                        <Icon
                          name={this.state.setHeaderIcon == 'Trending' ? 'clock-o' :
                            this.state.setHeaderIcon == 'New' ? 'fire' :
                              this.state.setHeaderIcon == 'Bookmarks' ? 'bookmark' : 'clock-o'}
                          type={this.state.setHeaderIcon == 'New' ? 'simple-line-icon' : 'font-awesome'}
                          color="#FFF"
                          style={{ width: 40 }}
                        />
                        
                      </MenuTrigger>

                      <MenuOptions
                        optionsContainerStyle={{
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: "#c5c5c5",
                          shadowColor: "transparent",
                          
                        }}

                        customStyles={{
                          optionsContainer: {
                            position: 'absolute',
                            marginTop: 50,
                          },
                          optionWrapper: { padding: 5 },
                        }}
                      >
                        <MenuOption onSelect={() => this.selectTab("Trending")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Icon
                              name='clock-o'
                              type='font-awesome'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>Trendingww</Text>
                          </View>
                        </MenuOption>
                        <MenuOption onSelect={() => this.selectTab("New")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                              name='fire'
                              type='simple-line-icon'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>New</Text>
                          </View>
                        </MenuOption>
                        <MenuOption onSelect={() => this.selectTab("Bookmarks")}>
                          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                              name='bookmark'
                              type='font-awesome'
                              color="#000"
                              style={{ marginRight: 10 }}
                            />
                            <Text style={{
                              textAlign: "center",
                              color: "#000",
                              fontFamily: ConstantFontFamily.defaultFont,
                            }}>Bookmarks</Text>
                          </View>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>

                  </View>
                }
              </View>
            </Animated.View>

          ) : null}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: Dimensions.get("window").width > 1200 ? Dimensions.get("window").width : '100%',
            justifyContent: "center",
            height: '100%',
            marginLeft: 'auto'
          }}

        >
          {/* {Platform.OS == "web" && Dimensions.get('window').width > 750 ?
            <LeftPanel
              navigation={this.props.navigation}
            /> : null} */}
          {
            Dimensions.get("window").width <= 750 ?

              <View
                style={{
                  flex: 1,
                }}

              >
                {this.renderTabViewForMobile()}
              </View>

              :
              // !true &&
              <View
                style={[ButtonStyle.DashboardTabViewStyle, {
                  width: Dimensions.get("window").width > 1200 && Dimensions.get("window").width < 1600 ? 450 :
                    Dimensions.get("window").width > 1600 ? 600 : (Dimensions.get("window").width - 310),
                  backgroundColor: Colors.whiteBackground,
                  borderColor: Colors.lightGray,
                  height: Dimensions.get("window").height - 60
                }]}
              >
                <View
                  style={
                    ButtonStyle.TabbarBorderStyleForDashboard}
                >
                  {["Trending", "New", "Discussion"].map((e, index) => {
                    return (
                      <TouchableOpacity key={index} style={{
                        backgroundColor: 'transparent',
                        shadowColor: "transparent",
                      }}
                        onPress={() => {
                          this.setState({
                            focused: e
                          })
                        }}>
                        <Text style={[ButtonStyle.tabbarTitleStyle, {
                          color: this.state.focused == e ? Colors.blueColor : "#D3D3D3",
                          width: "100%",
                          fontWeight: this.state.focused == e ? 'bold' : '100'
                        }]}>{e}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
                {this._renderScene()}
              </View>
          }

          {Dimensions.get("window").width > 1200 ?
          // || true ?

            <View
              style={[

                {
                  width: Dimensions.get("window").width > 1200 && Dimensions.get("window").width < 1600 ? 450 :
                    Dimensions.get("window").width > 1600 ? 600 : (Dimensions.get("window").width - 310),
                  marginBottom: 5,
                  borderLeftColor: Colors.lightGray,
                  borderLeftWidth: 1,
                  height: Dimensions.get('window').height - 45,
                  backgroundColor: Colors.whiteBackground,
                }]}
            >
              <View style={{ width: '92%', marginLeft: '4%', height: Dimensions.get("window").height - 60, }}>
                {Dimensions.get("window").width < 1200?
                //  && true  ?
                  <View style={{
                    height: 55,
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginLeft: 0,
                    width: '100%',
                    borderBottomWidth: 1,
                    borderColor: '#d3d3d3',
                    justifyContent: true ? 'flex-start' : 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    marginBottom: 10,
                  }}>
                    {true == true ?
                      <TouchableOpacity style={[ButtonStyle.headerBackStyle, { width: '20%' }]}
                        onPress={() => trueDiscussion(false)}>
                        <Icon
                          color={"#000"}
                          name="angle-left"
                          type="font-awesome"
                          size={40}

                        />
                      </TouchableOpacity> : null}
                    < Text style={[ButtonStyle.tabbarTitleStyle, { width: true ? '55%' : '100%', textAlign: 'center', }]}> Discussion</Text>
                  </View> : null}


                {/* <CommentDetailScreen
                  type="dashboard"
                  navigation={this.props.navigation}
                  postId={this.props.PostDetails && this.props.PostDetails?.node?.id}
                  listScroll={this.listScroll}
                  commentDelay={this.state.commentDelay}
                  showScrollIntoView={this.showScrollIntoView}
                  ActiveTab={''}
                /> */}
              </View>

            </View> : null
          }
        </View >
      </View >
    );
  }
}

const mapStateToProps = state => ({
  // loginStatus: state.UserReducer.loginStatus,
  // isAdmin: state.AdminTrueFalseReducer.isAdmin,
  // isAdminView: state.AdminTrueFalseReducer.isAdminView,



  // show: state.AdminTrueFalseReducer.showDiscussions,
  // windowSize: state.windowResizeReducer.windowResize,
  // profileData: state.LoginUserDetailsReducer.userLoginDetails,
  // getLeftPanelStatus: state.AdminTrueFalseReducer.leftPanelOpenStatus,


  // screenName: state.screenNameReducer.screen,
  // tabType:state.AdminTrueFalseReducer.tabType
});

const mapDispatchToProps = dispatch => ({
  // loginModalStatus: payload => dispatch(setLOGINMODALACTION(payload)),

  // showDiscussion: (payload) => dispatch(showDiscussionReducer(payload)),

  // screen: (payload) => dispatch(screen(payload)),

  // changeLoginStatus: payload => dispatch(setLoginStatus(payload)),
  // setTerm: (payload) => dispatch(setTerm(payload)),
  // setTermWeb: (payload) => dispatch(setTermWeb(payload)),
  // setInviteModal: (payload) => dispatch(setInviteLinkStatus(payload)),
  // setUsernameModalStatus: (payload) =>
  //   dispatch(setUSERNAMEMODALACTION(payload)),
  // leftPanelModalFunc: (payload) => dispatch(leftPanelModalFunc(payload)),
  // searchOpenBarStatus: (payload) => dispatch(searchOpenBarStatus(payload)),



});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  DashboardScreen
);
