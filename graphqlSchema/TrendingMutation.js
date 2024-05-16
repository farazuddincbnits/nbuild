import { gql, useQuery } from '@apollo/client';
import {
  clikFields,
  topicFields,
  adminpostFields,
  statusFields
} from "./GraphQLFragment";


export const Trending_Cliks_Mutation = gql`
  query NodeList($type:NodeType! $sort_type:SortType $first:Int $after:String $last:Int $before:String) {
  node_list(type:$type sort_type:$sort_type first:$first after:$after last:$last before:$before) {
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    edges {
      node {
        
        id
        ... on User {
          username
          profile_pic
        }
        ... on Topic {
          name
          profile_pic
        }
        ... on Clik {
          name
          profile_pic
        }
        ... on ExternalFeed {
          id
          name
          profile_pic
        }
      }
    }
  }
}
`;



export const Trending_Users_Mutation = gql`
  query GetUserList($type:NodeType! $sort_type:SortType $first:Int $after:String $last:Int $before:String) {
    node_list(type:$type sort_type:$sort_type first:$first after:$after last:$last before:$before) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        node {
          
          id
          ... on User {
            username
            profile_pic
          }
          ... on Topic {
            name
            profile_pic
          }
          ... on Clik {
            name
            profile_pic
          }
          ... on ExternalFeed {
            id
            name
            profile_pic
          }
        }
      }
    }
  }
`;

export const ClikQuery = gql`
  query GetClikProfile($id: ID!) {
    node(id: $id) {
      ...clikFields
    }
  }
  ${clikFields}
`;

export const ClikFeed = gql`
  query Clik($id: ID!, $sort_type: SortType, $first: Int, $after: String) {
    node(id: $id) {
      id
      
      ... on Clik {
        name
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

export const AdminClikFeed = gql`
  query GetClikFeed($id: ID!, $first: Int, $after: String, $sort: SortEnum) {
    clik(id: $id) {
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


export const TRENDING_TOPICS = gql`
  query GetTopicList($type:NodeType! $sort_type:SortType $first:Int $after:String $last:Int $before:String) {
    node_list(type:$type sort_type:$sort_type first:$first after:$after last:$last before:$before) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        node {
          
          id
          ... on User {
            username
            profile_pic
          }
          ... on Topic {
            name
            profile_pic
          }
          ... on Clik {
            name
            profile_pic
          }
          ... on ExternalFeed {
            id
            name
            profile_pic
          }
        }
      }
    }
  }
`;

export const TopicQuery = gql`
  query GetTopicProfile($id: ID!) {
    node(id: $id) {
      ...topicFields
    }
  }
  ${topicFields}
`;



export const ParentTopic = gql`
query Topic($id: ID!) {
  node(id: $id) {
    id
    ... on Topic {
      parent_topic {
        id
        name
        profile_pic
        description
        websites
        num_subtopics
        description
        created
      }
    }
  }
}

`

export const TopicFeed = gql`
  query Topic($id: ID!, $sort_type: SortType, $first: Int, $after: String) {
    node(id: $id) {
      id
      ... on Topic {
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

export const AdminTopicFeed = gql`
  query GetTopicFeed($id: ID!, $first: Int, $after: String, $sort: SortEnum) {
    topic(id: $id) {
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

export const ClikUserApplications = gql`
query ClikApplication($id: ID! $status:ClikApplicationStatus $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on Clik {
      applications(status:$status first:$first after:$after last:$last before:$before) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        edges {
          node {
            id
            status
            clik {
              id
              name
              profile_pic
            }
            approver {
              id
              username
              profile_pic
            }
            applicant {
              id
              username
              profile_pic
            }
            qualification
            created
          }
        }
      }
    }
  }
}
`;

export const EditClikMutation = gql`
  mutation UpdateClik($clik_id:ID!, $name:String, $profile_pic:String, $websites:[String] $invite_only:Boolean $max_members:Int $qualifications:[String] $description:String) {
  clik_update(input: {clik_id:$clik_id name:$name profile_pic:$profile_pic websites:$websites invite_only:$invite_only max_members:$max_members qualifications:$qualifications description:$description}) {
    clik {
      id
      name
      profile_pic
      websites
      invite_only
      num_followers
      num_members
      max_members
      qualifications
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

export const DeleteClikMutation = gql`
  mutation DeleteClik($clik_id: ID!) {
    clik_delete(input: { clik_id: $clik_id }) {
      status {
        ...statusFields
      }
      clik {
        ...clikFields
      }
    }
  }
  ${clikFields}
  ${statusFields}
`;

export const GetChildTopicsMutation = gql`
  query Topic($id: ID!) {
  node(id: $id) {
    id
    ... on Topic {
      subtopics {
        id
        name
        profile_pic
        description
        websites
        num_subtopics
        description
        created
      }
    }
  }
}
`;


export const Trending_ExternalFeeds_Mutation = gql`
  query GetExternalFeedList($type:NodeType! $sort_type:SortType $first:Int $after:String $last:Int $before:String) {
    node_list(type:$type sort_type:$sort_type first:$first after:$after last:$last before:$before) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        node {
          
          id
          ... on User {
            username
            profile_pic
          }
          ... on Topic {
            name
            profile_pic
          }
          ... on Clik {
            name
            profile_pic
          }
          ... on ExternalFeed {
            id
            name
            profile_pic
          }
        }
      }
    }
  }  
`;
