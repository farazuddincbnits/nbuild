const actions = [
  "LOGIN_STATUS",
  "LOGIN_USER_DETAILS",
  "HOMEFEED",
  "USER_PROFILE_DETAILS",
  "TRENDINGUSERS",
  "TRENDINGCLICKS",
  "USERFEED",
  "LIKECONTENT",
  "POSTDETAILS",
  "CLIKS_PROFILE_DETAILS",
  "CLIKSFEED",
  "POSTLINK",
  "USERNAMEMODALACTION",
  "SIGNUPMODALACTION",
  "RESETPASSWORDMODALACTION",
  "LOGINMODALACTION",
  "VERIFYEMAILMODALACTION",
  "CURRENTDEVICEWIDTHACTION",
  "SHARELINKMODALACTION",
  "HASSCROLLEDACTION",
  "CREATEACCOUNTACTION",
  "USERAPPROACHACTION",
  "FEEDREPORTMODALACTION",
  "TRENDINGTOPICS",
  "TOPICS_PROFILE_DETAILS",
  "TOPICSFEED",
  "CLIKUSERREQUEST",
  "CLIKMEMBERS",
  "POSTCOMMENTDETAILS",
  "FEED_PROFILE_DETAILS",
  "INVITESIGNUPMODALACTION",
  // "SCREENLOADINGMODALACTION",
  "TRENDINGEXTERNALFEEDS",
  "ADMIN_STATUS",
  "ADMIN_VIEW",
  "EDITTOPIC",
  "POST_EDIT_DETAILS",
  "EDITFEED",
  "EDITCLIK",
  'COMPLETED',
  'FOCUS',
  'ADDTERM',
  'TERMCONCAT',
  "FIXTAB",
  "INDEXTAB",
  "CLIKD",
  "NOPOST",
  "GETFEED",
  "FIXINDEX",
  "GETNEWLIST",
  "SHAREDPOSTID",
  "GET404",
  "SUBSCRIPTIONALERT",
  "TOTAL_COMMENTS",
  "TOTAL_NESTEDCOMMENTS",
  "GET_PARENT_PATH",
  "CHECK_COMMENT__COUNT",
  "HIGHLIGHT_ID",
  "TOOLKIT_OPEN",
  "USER_BOLD",
  "TOOLKIT_OFF",
  "CLIK_HOVER",
  "SHOW_DISCUSSION",
  "WINDOW_RESIZE",
  "SCREEN",
  "ISLOADING",
  "SHOW_COMMENT",
  "ShowCommentReducer",
  "GETTITLE",
  "GETREPLIEDID",
  "POSTCOMMENT",
  "PARENT_CONTENTID",
  "SHOWMORECOMMENT",
  "MINIMIZEID",
  "MOREICONID",
  "SHOWMORENESTED",
  "ADDICON",
  "SHOWMOREID",
  
];

module.exports = actions.reduce((acc, action) => {
  const successAction = `${action}_SUCCESS`;
  const failureAction = `${action}_FAILURE`;
  return {
    ...acc,
    [action]: action,
    [successAction]: successAction,
    [failureAction]: failureAction
  };
}, {});
