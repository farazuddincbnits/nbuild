import { gql, useQuery } from '@apollo/client';
import {
  clikFields,
  userFields,
  postFields,
  topicFields,
  externalFeedFields
} from "./GraphQLFragment";

export const SearchTopicMutation = gql`
query Search($prefix: String!) {
  search {
    topics(prefix:$prefix) {
      id
      name
      profile_pic
      description
      websites
      num_subtopics
      num_followers
      description
      created
    }
  }
}
`;

export const SearchUserMutation = gql`
query Search($prefix: String!) {
  search {
    users(prefix: $prefix) {
      id
      username
      full_name
      profile_pic
      description
      websites
      num_followers
      created
    }
  }
}
`;

export const SearchClikMutation = gql`
query Search($prefix: String!) {
  search {
    cliks(prefix:$prefix) {
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
  }
}
`;

export const SearchFeedMutation = gql`
query Search($prefix: String!) {
  search {
    feeds(prefix:$prefix) {
      id
      name
      profile_pic
      website
      rss
      num_followers
      description
      created
    }
  }
}
`;

export const SearchEveryThingMutation = gql`
  query Search($terms: [String] $first:Int $after:String) {
  search {
    everything(input: {terms: $terms}) {
      posts(first:$first after:$after) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
        edges {
          node {
            ...postFields
          }
        }
      }
    }
  }
}

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

export const DefaultTopicListMutation = gql`
  query GetTopicList($first: Int, $after: String) {
    topic_list(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...topicFields
        }
      }
    }
  }
  ${topicFields}
`;

export const DefaultClikListMutation = gql`
  query GetClikList($first: Int, $after: String) {
    clik_list(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...clikFields
        }
      }
    }
  }
  ${clikFields}
`;

export const DefaultUserListMutation = gql`
  query GetUserList($first: Int, $after: String) {
    user_list(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...userFields
        }
      }
    }
  }
  ${userFields}
`;

export const DefaultExternalFeedListMutation = gql`
  query GetExternalFeedList($first: Int, $after: String) {
    external_feed_list(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...externalFeedFields
        }
      }
    }
  }
  ${externalFeedFields}
`;
