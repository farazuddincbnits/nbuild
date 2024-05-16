export const UserFollowVariables = {
  variables: {
    user_id: "",
    follow_type: "FOLLOW"
  }
};

export const ClikFollowVariables = {
  variables: {
    clik_id: "",
    follow_type: "FOLLOW"
  }
};
export const TopicFollowVariables = {
  variables: {
    topic_id: "",
    follow_type: "FOLLOW"
  }
};
export const TopicUnFollowVariables = {
  variables: {
    topic_id: "",
    follow_type: "FOLLOW"
  }
};


export const FollowVariables = {
  variables: {
    id: "",
    follow_type: "FOLLOW"
  }
};
export const UnFollowVariables = {
  variables: {
    id: ""
  }
};

export const FeedFollowVariables = {
  variables: {
    feed_id: "",
    follow_type: "FOLLOW"
  }
};

export const UserUnfollowVariables = {
  variables: {
    user_id: ""
  }
};

export const ClikUnfollowVariables = {
  variables: {
    clik_id: ""
  }
};


export const ClikLeaveVariables = {
  variables: {
    "clik_id": null
  }
}



export const FeedUnFollowVariables = {
  variables: {
    feed_id: ""
  }
};

export const ClikUserApplicationsVariables = {
  variables: {
    clik_id: "",
    first: null,
    after: null
  }
};

export const ClikJoinVariables = {
  variables: {
    clik_id: "",
    qualification: "",
    known_members: [],
    invite_key: ""
  }
};

export const InviteToClikVariables = {
  variables: {
    clik_id: "",
    invited_users: []
  }
};

export const RejectClikMemberVariables = {
  variables: {
    clik_id: "",
    user_id: ""
  }
};

export const PromoteClikMemberVariables = {
  variables: {
    clik_id: "",
    user_id: "",
    member_type: ""
  }
};

export const KickClikMemberVariables = {
  variables: {
    clik_id: "",
    user_id: ""
  }
};

export const ClikGenerateKeyVariables = {
  variables: {
    clik_id: "",
    member_type: ""
  }
};
