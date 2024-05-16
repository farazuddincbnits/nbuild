import ConstantFontFamily from "./FontFamily";
import { Dimensions, Platform } from "react-native";
import Colors from '../constants/Colors';

const containerStyle = {
  marginTop: 10,
  marginLeft: 5,
  // height: 40,
  alignSelf: "center"
};
const mainContainer = {
  backgroundColor: '#fff',
  width: '100%'
}

const borderStyle = {
  borderColor: "#D7D7D7",
  borderWidth: 1,
  borderRadius: 20
};

const ZeroBorderStyle = {
  borderColor: "#D7D7D7",
  borderWidth: 1,
  borderRadius: 0,
  marginTop: Dimensions.get("window").width <= 750 ? 0 : 10
};
const backgroundStyle = {
  backgroundColor: "#fff",
  borderRadius: 20,
  borderColor: "#000",
  borderWidth: 1,
  paddingVertical: 7,
  paddingHorizontal: 25
};

const titleStyle = {
  fontSize: 14,
  fontWeight: "bold",
  color: "#000",
  fontFamily: ConstantFontFamily.defaultFont
};


const headerTitleStyle = {
  flex: 1,
  backgroundColor: "#f4f4f4",
  alignItems: 'flex-start',
  alignSelf: 'center',
  borderRadius: 6,
  marginRight: 10,
}
const headerBackStyle = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: 'center',
  marginHorizontal: 10,
  alignSelf: 'center',
}

const shadowStyle = {
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 2,
  // },
  // shadowOpacity:0.4,
  // shadowRadius: 6.84,

  elevation: 5,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  width: "98%",
  marginTop: 4,
  borderWidth: 0

}

//for profile tab views
const cardShadowStyle = {
  elevation: 5,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.4,
  shadowRadius: 5,
  width: Dimensions.get("window").width <= 750 ? '97%' : "98%",
  borderWidth: 0,
  borderRadius: 10,
  marginHorizontal: 10
}

const textAreaShadowStyle = {
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 0,
  // },
  // shadowOpacity: 0.3,
  // shadowRadius: 3,
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 0,
  // },
  // shadowOpacity: 0.10,
  // shadowRadius: 4,
  // elevation: 5,
  width: "100%",
  // marginVertical: 5,
  borderRadius: 5,
  outline: 'none',
  borderWidth: 1,
  borderColor: '#d7d7d7'
}


const selectShadowStyle = {
  shadowColor: "#009B1A",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1.5,
  shadowRadius: 7,
  elevation: 9,
  marginTop: 4
}

const selecttextAreaShadowStyle = {
  // shadowColor: '#000', //009B1A
  // shadowOffset: {
  //   width: 0,
  //   height: 0,
  // },
  // shadowOpacity:Platform.OS == 'web' ? 1.5 : 0.5,
  // shadowRadius: 5,
  // elevation: 5,

  // width: "100%",
  // marginVertical: 5,
  // height: 45,
  // borderRadius: 5,
  // outline: 'none',

  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 0,
  // },
  // shadowOpacity: 0.10,
  // shadowRadius: 4,
  // elevation: 5,
  width: "100%",
  // marginVertical: 5,
  borderRadius: 5,
  outline: 'none',
  borderWidth: 1,
  borderColor: '#d7d7d7'
}
const headerRightStyle = {
  alignItems: 'center',
  justifyContent: 'center'
}



const selectTabStyle = {
  borderColor: '#009B1A',
}
const normalTabStyle = {
  borderColor: '#009B1A',
}


const selectFeedStyle = {
  borderWidth: 2,
  borderColor: Dimensions.get("window").width <= 750 ? '#d7d7d7' : '#009B1A',
  marginRight: 0.1,
}

const normalFeedStyle = {
  borderColor: '#e6e6e6',
  borderTopWidth: 0,
  borderBottomWidth: 1,
}

const TabbarBorderStyle = {
  // borderWidth: 1,
  borderTopWidth: 0,
  borderBottomWidth: 1,
  borderColor: '#e6e6e6',
}

const selectFeedStyleForDashboard = {
  borderColor: Dimensions.get('window').width <= 750 ? "#fff" : Colors.blueColor,
  // borderWidth: 2,
  // borderBottomWidth: 1,
  width: '100%',
  // marginLeft: '4%',
  // backgroundColor: '#fff',
  // marginTop: 10,
  borderRadius: 0,
  backgroundColor: Colors.leftPanelColor
  // 15
}

// const normalFeedStyleForDashboard = {  

//   // marginLeft: Dimensions.get('window').width >= 1200 && location.pathname.startsWith("/search") == false ? 5 : location.pathname.startsWith("/search") == true ? 15 : '2%',
// }

const normalFeedStyleForDashboard = {
  backgroundColor: '#fff',
  borderColor: Colors.lightGray,
  marginTop: 10,
  width: '100%',
  borderRadius: 0

}
const discussionBox = {
  borderRadius: 15,
  borderColor: "#d3d3d3",
  width: '100%',
  borderWidth: 1,                  
  height: 100,
  justifyContent: "center",
  marginTop:15

}
const profileShadowStyle = {
  // borderTopWidth: 0,
  // width: "100%",
  // borderWidth: 0,
  // marginTop: Dimensions.get('window').width >= 1200 ? 10 : 0,
  // backgroundColor: '#fff',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.4,
  shadowRadius: 10,
}

const TabbarBorderStyleForDashboard = {
  width: '100%',
  // marginLeft: Dimensions.get('window').width >= 1200 ? 5 : 0,
  // borderTopWidth:1,
  borderColor: '#d3d3d3',
  // marginLeft: '4%',
  flexDirection: "row",
  height: 55,
  backgroundColor:
    Dimensions.get('window').width <= 750 ? "#000" : "#fff",
  alignItems: "center",
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  justifyContent: 'space-between'
}


const TabViewStyle = {
  borderWidth: 1,
  borderColor: '#e6e6e6',
  overflow: 'auto',
  borderTopWidth: 0,
  marginTop: 13,
}

const DashboardTabViewStyle = {
  // overflow: 'auto',
  backgroundColor: Colors.whiteBackground,
  borderLeftWidth: 1,
  // borderRightWidth: 1,
  borderColor: '#d3d3d3'
}

const profileTitleStyle = {
  // color: "#4169e1",
  fontSize: 12,
  fontWeight: 'bold',
  fontFamily: ConstantFontFamily.HeaderBoldFont
}

const tabbarTitleStyle = {
  // color: "#4169e1",
  fontSize: 17,
  fontWeight: 'bold',
  fontFamily: ConstantFontFamily.HeaderBoldFont
}
const simpleTextStyle = {
  fontFamily: ConstantFontFamily.defaultFont,
  fontSize: 15
}

const clikNameBackgroundStyle = {
  // alignItems: "center",
  // // backgroundColor: "#E8F5FA",
  // marginVertical: 5,
  // marginTop: 10,
  // borderRadius: 6,
  // justifyContent: "center",
  marginTop: 5,
  height: 30,
  justifyContent: 'center',
  padding: 5,
  borderRadius: 6,
  marginLeft: 10
}

const clikNameTitleStyle = {
  fontSize: 14,
  // fontWeight: 'bold',
  fontFamily: ConstantFontFamily.HeaderBoldFont,
  color: '#000',
}
const userNameTitleStyle = {
  fontSize: 12,
  fontWeight: 'bold',
  fontFamily: ConstantFontFamily.HeaderBoldFont,
  color: "#000",
}

const userNameBackgroundStyle = {
  alignItems: "center",
  backgroundColor: "#fff",
  paddingVertical: 5,
  borderRadius: 6,
  justifyContent: "center",
}

const heartIconBackground = {
  alignItems: "center",
  backgroundColor: "#ECF0FC",
  // paddingHorizontal: 5,
  // paddingVertical:1,
  borderRadius: 10,
  justifyContent: "center",
  borderColor: '#4169e1',
  borderWidth: 1,
  marginRight: 15,
  minWidth: 50,
}

const allButtonbackgroundStyle = {
  backgroundColor: Colors.buttonbackground,
  // paddingHorizontal: 3,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: Colors.blueColor,
  paddingHorizontal: 30,
}

const allButtonTextStyle = {
  borderColor: Colors.blueColor,
  fontSize: 14,
  fontWeight: "bold",
  color: Colors.blueColor,
  fontFamily: ConstantFontFamily.defaultFont,

}
const threeColStruc = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  // marginLeft: this.props.windowSize.width < 1200 && this.props.windowSize.width >= 750 ? 0 : 2,
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#fff'
}
const threeColStrucALL = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: '#fff',
  flexGrow: Dimensions.get("window").width > 750 ? 1 : 0,
  alignItems: Dimensions.get("window").width > 750 ? 'center' : 'normal',
}
const feedListTitle = {
  textAlign: 'center',
  color: "#000",
  fontSize: 16,
  width: '100%',
  fontWeight: 'bold',
  fontFamily: ConstantFontFamily.defaultFont,
  paddingVertical: 5,
  outline: 'none',
}
const dropdownBorder = {
  padding: 5,
  height: 45,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#d3d3d3',
  backgroundColor: '#fff '
}

export default {
  backgroundStyle,
  containerStyle,
  titleStyle,
  borderStyle,
  headerTitleStyle,
  headerBackStyle,
  shadowStyle,
  selectShadowStyle,
  headerRightStyle,
  cardShadowStyle, //for card section
  textAreaShadowStyle,
  selecttextAreaShadowStyle,
  profileShadowStyle,
  selectFeedStyle,
  normalFeedStyle,
  ZeroBorderStyle,
  profileTitleStyle,
  simpleTextStyle,
  TabbarBorderStyle,
  TabViewStyle,
  selectTabStyle,
  normalTabStyle,
  DashboardTabViewStyle,
  normalFeedStyleForDashboard,
  selectFeedStyleForDashboard,
  TabbarBorderStyleForDashboard,
  clikNameBackgroundStyle,
  clikNameTitleStyle,
  userNameTitleStyle,
  userNameBackgroundStyle,
  heartIconBackground,
  tabbarTitleStyle,
  allButtonbackgroundStyle,
  allButtonTextStyle,
  threeColStruc,
  mainContainer,
  threeColStrucALL,
  feedListTitle,
  dropdownBorder,
  discussionBox
};