import ConstantFontFamily from "../../constants/FontFamily";
import { Dimensions, Platform } from "react-native";
import Colors from '../../constants/Colors';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


const textInputStyle = {
    minHeight: 175,
    maxHeight: hp('55%'),
    fontSize: 20,
    color: "#000",
    fontWeight: '200',
    fontFamily: ConstantFontFamily.defaultFont,
    textAlign: 'left',
    width: "100%",
    outline: "none",
    paddingHorizontal: 10
}

const tagsDropdownStyle = {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: "100%",
    borderWidth: 1,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: '#d3d3d3',
    paddingLeft: 10,
}
const tagsMainView = {
    borderColor: '#d3d3d3',
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 6,
    width: '85%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding:12
}
const tagWrapView = {
    marginLeft: 10,
    width: '85%',
    flexDirection: "row",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap:'wrap'   
}
export default
    {
        textInputStyle,
        tagsDropdownStyle,
        tagsMainView,
        tagWrapView

    }