import { all, fork } from "redux-saga/effects";
// import CliksFeedMiddleware from "./CliksFeedMiddleware";
// import CreateAccountMiddleware from "./CreateAccountMiddleware";
// import CurrentDeviceWidthMiddleware from "./CurrentDeviceWidthMiddleware";
// import HasScrolledMiddleware from "./HasScrolledMiddleware"; 
// import HomeFeedMiddleware from "./HomeFeedMiddleware";
// import LikeContentMiddleware from "./LikeContentMiddleware";
// import LinkPostMiddleware from "./LinkPostMiddleware";
// import LoginModalMiddleware from "./LoginModalMiddleware";
// import LoginUserDetailsMiddleware from "./LoginUserDetailsMiddleware";
// import PostDetailsMiddleware from "./PostDetailsMiddleware";
// import ResetPasswordModalMiddleware from "./ResetPasswordModalMiddleware";
// import ShareLinkModalMiddleware from "./ShareLinkModalMiddleware";
// import SignUpModalMiddleware from "./SignUpModalMiddleware";
// import TrendingCliksMiddleware from "./TrendingCliksMiddleware";
// import TrendingCliksProfileMiddleware from "./TrendingCliksProfileMiddleware";
// import TrendingUsersMiddleware from "./TrendingUsersMiddleware";
// import UserApproachMiddleware from "./UserApproachMiddleware";
// import UserFeedMiddleware from "./UserFeedMiddleware";
// import UserMiddleware from "./UserMiddleware";
// import UsernameModalMiddleware from "./UsernameModalMiddleware";
// import UserProfileDetailsMiddleware from "./UserProfileDetailsMiddleware";
// import VerifyEmailModalMiddleware from "./VerifyEmailModalMiddleware";
// import FeedReportModalMiddleware from "./FeedReportModalMiddleware";
// import TrendingTopicsMiddleware from "./TrendingTopicsMiddleware";
// import TrendingTopicsProfileMiddleware from "./TrendingTopicsProfileMiddleware";
// import TopicsFeedMiddleware from "./TopicsFeedMiddleware";
// import ClikUserRequestMiddleware from "./ClikUserRequestMiddleware";
// import ClikMembersMiddleware from "./ClikMembersMiddleware";
// import PostCommentMiddleware from "./PostCommentMiddleware";
// import FeedProfileMiddleware from "./FeedProfileMiddleware";
// import InviteSignUpModalMiddleware from "./InviteSignUpModalMiddleware";
// import ScreenLoadingMiddleware from "./ScreenLoadingMiddleware";
// import TrendingExternalFeedsMiddleware from "./TrendingExternalFeedsMiddleware";
// import AdminMiddleware from "./AdminMiddleware";
// import EditTopicMiddleware from "./EditTopicMiddleware";
// import EditFeedMiddleware from "./EditFeedMiddleware";
// import EditClikMiddleware from "./EditClikMiddleware";

export default function* sagas() {
  yield all(
    [
    //   UserMiddleware,
    //   LoginUserDetailsMiddleware,
    //   HomeFeedMiddleware,
      // UserProfileDetailsMiddleware,
    //   TrendingCliksMiddleware,
    //   TrendingUsersMiddleware,
    //   UserFeedMiddleware,
      // LikeContentMiddleware,
      // PostDetailsMiddleware,
      // TrendingCliksProfileMiddleware,
    //   CliksFeedMiddleware,
    //   LinkPostMiddleware,
      // LoginModalMiddleware,
    //   ResetPasswordModalMiddleware,
    //   SignUpModalMiddleware,
    //   UsernameModalMiddleware,
    //   VerifyEmailModalMiddleware,
      // ShareLinkModalMiddleware,
      // HasScrolledMiddleware,
    //   CurrentDeviceWidthMiddleware,
    //   CreateAccountMiddleware,
    //   UserApproachMiddleware,
    //   FeedReportModalMiddleware,
    //   TrendingTopicsMiddleware,
      // TrendingTopicsProfileMiddleware,
    //   TopicsFeedMiddleware,
      // ClikUserRequestMiddleware,
      // ClikMembersMiddleware,
      // PostCommentMiddleware,
      // FeedProfileMiddleware,
    //   InviteSignUpModalMiddleware,
    //   ScreenLoadingMiddleware,
    //   TrendingExternalFeedsMiddleware,
    //   AdminMiddleware,
    //   EditTopicMiddleware,
    //   EditFeedMiddleware,
    //   EditClikMiddleware
    ].map(fork)
  );
}
