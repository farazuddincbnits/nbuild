export const PostCreateVariables = {
  variables: {
    title: null,
    summary: null,
    text: "",
    thumbnail_pic: "",
    thumbnail_pic_url: "",
    pictures: [],
    topics: [],
    link: null,
    cliks: [],
    users:[]
  }
};

export const PostQueryVariables = {
  variables: {
    id: "",
    first: 0,
    after: null,
    clik_id: null
  }
};

export const CommentQueryVariables = {
  variables: {
    id: "",
    clik_id: null,
    first: 0,
    after: null
  }
};

export const CreateClikVariables = {
  variables: {
    name: null,
    profile_pic: null,
    websites: null,
    invite_only: null,
    max_members: null,
    qualifications: null,
    invited_users:null,
    description: "description"
  }
};

export const EditClikVariables = {
  variables: {
    "clik_id": null,
    "name": null,
    "profile_pic": null,
    "websites": null,
    "invite_only": null,
    "max_members": null,
    "qualifications": null,
    "description": null
  }
};
export const UrlInfoVariables = {
  variables: {
    link: null
  }
};

export const ExternalFeedVariables = {
  variables: {
    url: ""
  }
};

export const CreateTopicVariables = {
  variables: {
    "name": null,
    "parent_topic_id": null,
    "profile_pic": null,
    "websites": null,
    "aliases": null,
    "description": "description"
  }
};

export const EditTopicVariables = {
  variables:{
    "topic_id": null,
    "parent_topic_id": null,
    "name": null,
    "profile_pic": null,
    "websites": null,
    "aliases": null,
    "description": "description"
  }
};

export const AddExternalFeedVariables = {
  variables: {
    "name": null,
    "profile_pic": null,
    "website": null,
    "rss": null,
    "topic_id": null,
    "description": "description"
  }
};

export const EditExternalFeedVariables = {
  variables: {
    "feed_id": null,
    "name": null,
    "profile_pic": null,
    "website": null,
    "rss": null,
    "topic_id": null,
    "description": "description"
  }
};

export const PostEditVariables = {
  variables: {
    content_id: "",
    title: "",
    summary: "",
    text: "",
    thumbnail_pic: "",
    pictures: [],
    topics: [],
    link: ""
  }
};