import ConstantFontFamily from "../../constants/FontFamily";
import { Dimensions, Platform } from "react-native";
import Colors from '../../constants/Colors';

const selectFeedStyleForDashboard = {
  borderColor: Dimensions.get('window').width <= 750 ? "#fff" : Colors.blueColor,
  width: '100%',
  borderRadius: 0,
  backgroundColor: Dimensions.get('window').width <= 750 ? "#fff" : Colors.leftPanelColor,
  paddingHorizontal: Dimensions.get('window').width >= 750 ? 10 : 20,
  alignItems: "center",

}

const normalFeedStyleForDashboard = {
  backgroundColor: '#fff',
  borderColor: Colors.lightGray,
  // borderWidth: 0,
  // borderBottomWidth: 1,
  // marginTop: 10,
  width: '100%',
  // marginLeft: '4%',
  borderRadius: 0,
  paddingHorizontal: Dimensions.get('window').width >= 750 ? 10 : 20,
  alignItems: "center",

}

const summaryTextStyle = {
  color: "#000",
  paddingRight: 5,
  fontFamily: ConstantFontFamily.defaultFont,
  fontSize: 14,
  lineHeight: 20,

  // minHeight: SummaryViewHeight,
  // minHeight: summaryHeight,
  marginVertical: 10,
  overflow: 'hidden',
  textAlign: 'left',
  outline: 'none',
}

export default {
  selectFeedStyleForDashboard,
  normalFeedStyleForDashboard,
  summaryTextStyle,
  
}