import { Dimensions, Platform } from "react-native"
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard';

export const OpenWindow = (link) => {
    if (Platform.OS == 'web') {
        window.open(link)
    } else {
        Linking.openURL(link)
    }
}

export const WriteToClipboard = async (item, pageName) => {
    let Domain = window.location.href
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(/[/?#]/)[0];

    if (pageName == 'comment') {
        let commentId = "/comment/" + item.replace("Comment:", "");
        console.log(commentId, 'commentId=====')
        await Clipboard.setStringAsync(
            Domain.startsWith("localhost") == true
                ? "http://" + Domain + commentId
                : "https://" + Domain + commentId
        );
    } else {
        let PostId = "/post/" + item.replace("Post:", "");
        await Clipboard.setStringAsync(
            Domain.startsWith("localhost") == true
                ? "http://" + Domain + PostId
                : "https://" + Domain + PostId
        );
    }
};

