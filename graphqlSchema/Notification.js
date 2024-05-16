import { gql, useQuery } from '@apollo/client';
import { __PageInfoField, notificationFields } from "./GraphQLFragment";

export const GetAccountNotificationsMutation = gql`
  query AccountNotifications($id: ID!, $first: Int, $after: String) {
  node(id: $id) {
    id
    ... on Account {
      num_unread_notifications
      notifications(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            __typename
            notifier {
              id
              username
              profile_pic
            }
            created
            ... on CommentNotification {
              their_comment {
                id
                text
                path
                author {
                  id
                  username
                  profile_pic
                }
              }
              my_content {
                id
                ... on Comment {
                  text
                }
                ... on Post {
                  title
                }
              }
            }
            ... on ClikApplicationNotification {
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
            ... on ClikApplicationAcceptedNotification {
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
            ... on ClikInviteNotification {
              clik {
                id
                name
                profile_pic
              }
            }
            ... on ClikInviteAcceptedNotification {
              clik {
                id
                name
                profile_pic
              }
            }
            ... on ContentSharedNotification {
              content {
                id
                ... on Comment {
                  text
                  path
                }
                ... on Post {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GetNumUnreadNotificationsMutation = gql`
  query AccountUnreadNotifications($id: ID!) {
  node(id: $id) {
    id
    ... on Account {
      num_unread_notifications
      
    }
  }
}
`;

export const MarkNotificationsAsReadMutation = gql`
 mutation MarkNotificationsAsRead {
  account_mark_notifications_as_read(input: {}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const DeleteAccountNotificationMutation = gql`
  mutation DeleteAccountNotification($notification_id: ID) {
    account_notification_delete(input: {notification_id: $notification_id}) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;
