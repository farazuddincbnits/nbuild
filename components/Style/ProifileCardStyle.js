import ConstantFontFamily from "../../constants/FontFamily";
import { Dimensions, Platform } from "react-native";
import Colors from '../../constants/Colors';

const mainCardContainer = {
    backgroundColor: "#fff", shadowColor: '#000',
            marginBottom: Dimensions.get('window').width > 750 ? 0 : 10,

            borderBottomWidth: Dimensions.get('window').width > 750 ? 1 : 0,
            borderColor: '#d3d3d3',
            borderLeftWidth: Dimensions.get('window').width > 750 ? 1 : 0,
            width: Dimensions.get('window').width <= 750 ? '100%' : Dimensions.get('window').width > 1200 && Dimensions.get('window').width < 1600 ? 900 :
              Dimensions.get('window').width > 1600 ? 1200 : (Dimensions.get('window').width - 310),
}
export default {
    mainCardContainer
}