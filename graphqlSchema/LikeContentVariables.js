export const LikeContentVariables = {
  variables: {
    content_id: "",
    type: ""
  }
};

export const CreateCommentVariables = {
  variables: {
    text: "",
    parent_content_id: "",
    clik: null
  }
};

export const EditCommentVariables = {
  variables: {
    text: "",
    content_id: ""
  }
};

export const ContentReportVariables = {
  variables: {
    content_id: "",
    reports: [
      {
        type: "",
        off_topic_topics: [],
        off_topic_cliks: []
      }
    ]
  }
};

export const DeleteTopicVariables = {
  variables: {
    topic_id: ""
  }
};

export const DeleteExternalFeedVariables = {
  variables: {
    feed_id: ""
  }
};
