import { gql, useQuery } from '@apollo/client';
import {
  userFields,
  topicFields,
  clikFields,
  externalFeedFields
} from "./GraphQLFragment";

export const AccountCreateMutation = gql`
  mutation CreateAccount(
    $full_name: String
    $email: String
    $username: String
    $clik_invite_key: String
    $inviter_username: String
  ) {
    account_create(
      input: {
        full_name: $full_name
        email: $email
        username: $username
        clik_invite_key: $clik_invite_key
        inviter_username: $inviter_username
      }
    ) {
      status {
        success
        status
        custom_status
        user_msg
      }
      account {
        id
        created
          user {
            ...userFields
          }
        }
      }
    }
  ${userFields}
`;

export const UserQueryMutation = gql`
  query User($id: ID!) {
  node(id: $id) {
    id
    ... on User {
     ...userFields
      profile_pic
      created
      inviter {
        id
        username
        profile_pic
      }
    }
  }
}
  ${userFields}
`;

export const UserLoginMutation = gql`
query Account($id: ID!) {
  node(id: $id) {
    id
    ... on Account {
      num_unread_notifications
      subscription
      banned_until
      created
      user {
        full_name
        username
        profile_pic
        description
        created
      }
    }
  }
}

`;

export const UserEditMutation = gql`
mutation UserUpdate($username:String $full_name:String $websites:[String] $profile_pic:String $description:String) {
  user_update(input: {username:$username full_name:$full_name websites:$websites profile_pic:$profile_pic description:$description}) {
    user {
      id
      username
      full_name
      websites
      num_followers
      profile_pic
      description
      created
      
    }
    status {
      status
      success
      custom_status
      user_msg
    }
  }
}
`;

export const ChangeSubscriptionMutation = gql`
mutation UpdateSubscription($subscription: SubscriptionType $payment_id: String $pricing: PricingIntervalType) {
  account_update_subscription(input: {subscription: $subscription payment_id: $payment_id pricing: $pricing}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const ChangeAccountSettingsMutation = gql`
mutation UpdateAccountSettings($email: String, $email_notification_monthly_earnings: Boolean, $email_notification_weclikd_updates: Boolean, $email_notification_clik_invitations: Boolean) {
  account_update_settings(input: {email: $email, email_notification_monthly_earnings: $email_notification_monthly_earnings, email_notification_weclikd_updates: $email_notification_weclikd_updates, email_notification_clik_invitations: $email_notification_clik_invitations}) {
    status {
      success
      status
      custom_status
      user_msg
    }
    settings {
      email
      email_notification_monthly_earnings
      email_notification_weclikd_updates
      email_notification_clik_invitations
    }
  }
}
`;

export const ChangePaymentInfoMutation = gql`
mutation UpdatePaymentInfo($payment_id:String) {
  account_update_payment_info(input: {payment_id:$payment_id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const CheckUsernameMutation = gql`
  mutation CheckUsername($username: String!) {
    username_check(input: { username: $username }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;


export const UserFollowingMutation = gql`
query UserFollowing($id: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on User {
      users_following(first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            follow_type
            user {
              id
              username
              profile_pic
            }
          }
        }
      }
    }
  }
}
`;

export const TopicFollowingMutation = gql`
query TopicsFollowing($id: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on User {
      topics_following(first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            follow_type
            topic {
              id
              name
              profile_pic
            }
          }
        }
      }
    }
  }
}
`;

export const ClikFollowingMutation = gql`
query CliksFollowing($id: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on User {
      cliks_following(first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
           follow_type
            member_type
            clik {
              id
              name
              profile_pic
            }
          }
        }
      }
    }
  }
}
`;

export const ExternalFeedFollowingMutation = gql`
query ExternalFeedsFollowing($id: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on User {
      external_feeds_following(first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            follow_type
            external_feed {
              id
              name
              profile_pic
            }
          }
        }
      }
    }
  }
}
`;


export const CommentMutation = gql`
 query Comment($id: ID!, $first: Int, $after: String) {
  node(id: $id) {
    id
    ... on Comment {
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
  }
}
`;

