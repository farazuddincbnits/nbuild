import { gql, useQuery } from '@apollo/client';

export const __PageInfoField = gql`
  fragment __PageInfoField on CommentConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
`;

export const userFields = gql`
  fragment userFields on User {
    full_name
    username
    profile_pic
    description
    created
  }
`;


export const contentFields = gql`
  fragment contentFields on Content {
    id
    ...on Post {
      title
    }
    ...on Comment {
      text
    }
  }
`;
export const clikFields = gql`
  fragment clikFields on Clik {
    id
    name
      profile_pic
      description
      websites
      num_members
      num_followers
      invite_only
      max_members
      qualifications
      description
      created
  }
`;

export const postFields = gql`
fragment postFields on Post {
  id
  title
  summary
  link
  banner_picture
  author {
    id
    username
    profile_pic
  }
  sharer {
    id
    username
    profile_pic
  }
  num_likes {
    num_red_likes
    num_silver_likes
    num_gold_likes
    num_diamond_likes
  }
  num_comments
  num_reports
  cliks(first: 3) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        name
        profile_pic
      }
    }
  }
  topics(first: 3) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        name
        profile_pic
      }
    }
  }
  users(first: 3) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        username
        profile_pic
      }
    }
  }
  external_feeds(first: 3) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        name
        profile_pic
      }
    }
  }
  created
}
`;

export const adminpostFields = gql`
  fragment adminpostFields on Post {
    id
    author {
      ...userFields
    }
    reasons_shared {
      users {
        id
        username
        profile_pic
      }
      cliks {
        id
        name
        icon_pic
      }
    }
    admin_stats {
      sharer {
        ...userFields
      }
      likes {
        red
        silver
        gold
        diamond
      }
      num_likes
      num_reports
      num_comments
    }
    text
    likes_score
    comments_score
    reports_score
    title
    summary
    created
    thumbnail_pic
    pictures
    topics
    cliks
    link
    user_like_type
    external_feed {
      icon_url
      id
    }
  }
  ${userFields}
`;

export const commentFields = gql`
  fragment commentFields on Comment  {
      id
      text
      num_likes {
        num_red_likes
        num_silver_likes
        num_gold_likes
        num_diamond_likes
      }
      num_comments
      author {
        id
        username
        profile_pic
      }
      comments(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            text
            num_likes {
              num_red_likes
              num_silver_likes
              num_gold_likes
              num_diamond_likes
            }
            num_comments
            author {
              id
              username
              profile_pic
            }
            created
          }
        }
      }
      created
    }
`;

export const topicFields = gql`
  fragment topicFields on Topic {
    id
      name
      profile_pic
      websites
      num_followers
      num_subtopics
      description
      created
  }
`;

export const statusFields = gql`
  fragment statusFields on WeclikdStatus {
    success
    status
    custom_status
    user_msg
    debug_error_msg
  }
`;

export const externalFeedFields = gql`
  fragment externalFeedFields on ExternalFeed  {
       id
      name
      profile_pic
      topic {
        id
        profile_pic
        name
      }
      website
      rss
      num_followers
      description
      created
    }
`;

export const commentNotificationFields = gql`
  fragment commentNotificationFields on CommentNotification {
    my_content {
      __typename
      ... on Comment {
        text
      }
      ... on Post {
        title
      }
    }
    their_comment {
      id
      text
      author {
        id
        username
        profile_pic
      }
    }
  }
`;

export const ClikApplicationNotificationFields = gql`
  fragment ClikApplicationNotificationFields on ClikApplicationNotification {
    clik_application {
      id
      status
      clik {
        id
        name
        profile_pic
      }
      qualification
      created
    }
  }
  `;


export const ClikApplicationAcceptedNotificationFields = gql`
  fragment ClikApplicationAcceptedNotificationFields on ClikApplicationAcceptedNotification {
    clik_application {
      id
      status
      clik {
        id
        name
        profile_pic
      }
      qualification
      created
    }
  }
`;

export const ContentSharedNotificationFields =
  gql`
  fragment ContentSharedNotificationFields on ContentSharedNotification {
    content {
      ...contentFields
    }
  }
  ${contentFields}
  `;

export const clikInviteRequestNotificationFields = gql`
  fragment clikInviteRequestNotificationFields on ClikInviteRequestNotification {
    clik {
      ...clikFields
    }
    inviter {
      ...userFields
    }
  }
  ${clikFields}
  ${userFields}
`;

export const clikInviteAcceptedNotificationFields = gql`
  fragment clikInviteAcceptedNotificationFields on ClikInviteAcceptedNotification {
    clik {
      ...clikFields
    }
    invitee {
      ...userFields
    }
  }
  ${clikFields}
  ${userFields}
`;

export const clikJoinRequestNotificationFields = gql`
  fragment clikJoinRequestNotificationFields on ClikJoinRequestNotification {
    clik {
      ...clikFields
    }
    invitee {
      ...userFields
    }
  }
  ${clikFields}
  ${userFields}
`;

export const clikJoinAcceptedNotificationFields = gql`
  fragment clikJoinAcceptedNotificationFields on ClikJoinAcceptedNotification {
    clik {
      ...clikFields
    }
    inviter {
      ...userFields
    }
  }
  ${clikFields}
  ${userFields}
`;

export const userInviteAcceptedNotificationFields = gql`
  fragment userInviteAcceptedNotificationFields on UserInviteAcceptedNotification {
    invitee {
      ...userFields
    }
  }
  ${userFields}
`;


export const notificationFields = gql`
  fragment notificationFields on Notification {        
      ... on CommentNotification {
        ...commentNotificationFields
      }
      ...on ClikApplicationNotification{
        ...ClikApplicationNotificationFields
      }
      ...on ContentSharedNotification{
        ...ContentSharedNotificationFields
      }
  }
  ${commentNotificationFields}
  ${ClikApplicationNotificationFields}
  ${ContentSharedNotificationFields}
`;