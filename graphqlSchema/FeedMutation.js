import { gql, useQuery } from '@apollo/client';
import {
  postFields,
  externalFeedFields,
  statusFields,
  adminpostFields
} from "./GraphQLFragment";

export const HomeFeedMutation = gql`
  query HomeFeed($first: Int, $after: String, $last: Int, $before: String, $sort_type:SortType , $type: NodeType!) {
    node_list (first: $first, after: $after, last: $last,before: $before, sort_type:$sort_type , type: $type){      
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...postFields
          }
        }
      }
    }
  
  ${postFields}
`;

export const AdminHomeFeedMutation = gql`
  query HomeFeedAdmin($first: Int, $after: String, $sort: SortEnum) {
    home_feed {
      posts(first: $first, after: $after, sort: $sort) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...adminpostFields
          }
        }
      }
    }
  }
  ${adminpostFields}
`;

export const ContentReportMutation = gql`
  mutation CreateReport($user_id:ID $clik_id:ID $feed_id:ID $topic_id:ID $content_id:ID $report_type:ReportType $action_type:ReportActionType $message:String) {
    report_create(input: {user_id:$user_id clik_id:$clik_id content_id:$content_id topic_id:$topic_id feed_id:$feed_id report_type:$report_type action_type:$action_type  message:$message}) {
      report {
        id
        report_type
        action_type
        reporter {
          id
          username
          profile_pic
        }
        user {
          id
          username
          profile_pic
        }
        topic {
          id
          name
          profile_pic
        }
        content {
          id
          created
          author {
            id
            username
            profile_pic
          }
          ... on Post {
            summary
            link
          }
          ... on Comment {
            text
          }
        }
        clik {
          id
          name
          profile_pic
        }
        feed {
          id
          name
          profile_pic
        }
        reported_by_admin
        message
        banned_until
        created
        
      }
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const ExternalFeedProfileQuery = gql`
  query GetExternalFeeds($id: ID!) {
    node(id: $id) {
      ...externalFeedFields
    }
  }
  ${externalFeedFields}
`;

export const ExternalFeedMutation = gql`
query ExternalFeedPOsts($id: ID!, $sort_type: SortType, $first: Int, $after: String) {
  node(id: $id) {
     id
  ... on ExternalFeed {
    posts(sort_type: $sort_type, first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          title
          summary
          link
          author {
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
      }
    }
  }
}
}

`;

export const AdminExternalFeedMutation = gql`
  query GetExternalFeed(
    $id: ID!
    $first: Int
    $after: String
    $sort: SortEnum
  ) {
    external_feed(id: $id) {
      posts(first: $first, after: $after, sort: $sort) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...adminpostFields
          }
        }
      }
    }
  }
  ${adminpostFields}
`;

export const ExternalFeedTestMutation = gql`
  mutation TextExternalFeed($url: String) {
    external_feed_test(input: { url: $url }) {
      status {
        ...statusFields
      }
      external_feed {
        ...externalFeedFields
      }
    }
  }
  ${statusFields}
  ${externalFeedFields}
`;

export const AddExternalFeedMutation = gql`
  mutation CreateExternalFeed($name:String, $profile_pic:String, $website:String $rss:String $topic_id:ID $description:String) {
  external_feed_create(input: {name:$name profile_pic:$profile_pic website:$website rss:$rss topic_id:$topic_id description:$description}) {
    external_feed {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}

`;

export const EditExternalFeedMutation = gql`
  mutation UpdateExternalFeed($feed_id:ID! $name:String, $profile_pic:String, $website:String $rss:String $topic_id:ID $description:String) {
  external_feed_update(input: {feed_id:$feed_id name:$name profile_pic:$profile_pic website:$website rss:$rss topic_id:$topic_id description:$description}) {
    external_feed {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}

`;

export const DeleteExternalFeedMutation = gql`
  mutation DeleteExternalFeed($feed_id: ID!) {
    external_feed_delete(input: { feed_id: $feed_id }) {
      status {
        ${statusFields}
      }
      external_feed {
        ${externalFeedFields}
      }
    }
  }
`;

export const DeleteTopicMutation = gql`
  mutation DeleteTopic($topic_id: ID!) {
    topic_delete(input: { topic_id: $topic_id }) {
      status {
        ...statusFields
      }
    }
  }
  ${statusFields}
`;

export const DeleteContentMutation = gql`
mutation DeleteNode($id: ID!) {
  node_delete(input: {id: $id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
    node {
      id
      ... on Account {
        num_unread_notifications
        subscription
        created
        user {
          full_name
          username
          profile_pic
          description
          created
        }
      }
      ... on User {
        username
        full_name
        profile_pic
        description
        websites
        num_followers
        created
      }
      ... on Topic {
        name
        profile_pic
        description
        websites
        num_subtopics
        description
        created
      }
      ... on Clik {
        name
        profile_pic
        description
        websites
        num_followers
        invite_only
        max_members
        qualifications
        description
        created
      }
      ... on ExternalFeed {
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
    }
  }
}
`;