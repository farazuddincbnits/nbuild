import { gql, useQuery } from '@apollo/client';
import { clikFields, userFields } from "./GraphQLFragment";

export const UserFollowMutation = gql`
  mutation FollowUser($user_id: ID!, $follow_type: FollowType) {
    user_follow(input: { user_id: $user_id, follow_type: $follow_type }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const ClikFollowMutation = gql`
  mutation FollowClik($clik_id: ID!, $follow_type: FollowType) {
    clik_follow(input: { clik_id: $clik_id, follow_type: $follow_type }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const UserUnfollowMutation = gql`
  mutation UnfollowUser($user_id: ID!) {
    user_unfollow(input: { user_id: $user_id }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const ClikUnfollowMutation = gql`
  mutation UnfollowClik($clik_id: ID!) {
    clik_unfollow(input: { clik_id: $clik_id }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const FollowMutation = gql`
  mutation Follow($id:ID! $follow_type: FollowType) {
  follow(input: {id:$id follow_type:$follow_type}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const UnFollowMutation = gql`
  mutation Unfollow($id:ID!) {
  unfollow(input: {id:$id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;


export const leaveClikMutation = gql`
mutation LeaveKMember($clik_id:ID!) {
  clik_leave(input: {clik_id:$clik_id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`

export const ClikUnFollowMutation = gql`
mutation LeaveKMember($clik_id:ID!) {
  clik_leave(input: {clik_id:$clik_id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const FeedFollowMutation = gql`
  mutation FollowExternalFeed($feed_id: ID!, $follow_type: FollowType) {
    external_feed_follow(
      input: { feed_id: $feed_id, follow_type: $follow_type }
    ) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const FeedUnFollowMutation = gql`
  mutation UnfollowExternalFeed($feed_id: ID!) {
    external_feed_unfollow(input: { feed_id: $feed_id }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const ClikJoinMutation = gql`
mutation JoinClik($clik_id:ID, $qualification:String $invite_key:String) {
  clik_join(input: {clik_id:$clik_id qualification:$qualification invite_key:$invite_key}) {
    application {
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
    member {
      user {
        id
        username
        profile_pic
      }
      inviter {
        id
        username
        profile_pic
      }
      clik {
        id
        name
        profile_pic
      }
      member_type
      joined
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

export const InviteToClikMutation = gql`
  mutation IviteToClik($clik_id: ID!, $invited_users: [ClikInvitation]) {
    clik_invite(input: {clik_id: $clik_id, invited_users: $invited_users}) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const ClikAcceptedMutation = gql`
  mutation AcceptClikApplication($application_id: ID!, $member_type: ClikMemberType) {
  clik_application_accept(input: {application_id: $application_id, member_type: $member_type}) {
    status {
      success
      status
      custom_status
      user_msg
    }
    application {
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
    clik_member {
      user {
        id
        username
        profile_pic
      }
      clik {
        id
        name
        profile_pic
      }
      member_type
    }
  }
}
`;

export const RejectClikMemberMutation = gql`
  mutation RejectClikMember($clik_id: ID!, $user_id: ID!) {
    clik_member_reject(input: { clik_id: $clik_id, user_id: $user_id }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const PromoteClikMemberMutation = gql`
  mutation PromoteClikMember(
    $clik_id: ID!
    $user_id: ID!
    $member_type: ClikMemberType!
  ) {
    clik_member_promote(
      input: { clik_id: $clik_id, user_id: $user_id, member_type: $member_type }
    ) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const KickClikMemberMutation = gql`
  mutation KickClikMember($clik_id: ID!, $user_id: ID!) {
    clik_member_kick(input: { clik_id: $clik_id, user_id: $user_id }) {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const RejectClikApplicationMutation = gql `
mutation RejectClikApplication($application_id: ID!) {
  clik_application_reject(input: {application_id: $application_id}) {
    status {
      success
      status
      custom_status
      user_msg
    }
    application {
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
}`;

export const ClikGenerateKeyMutation = gql`
  mutation CreateClikInviteKey($clik_id: ID!, $member_type: ClikMemberType) {
    clik_create_invite_key(
      input: { clik_id: $clik_id, member_type: $member_type }
    ) {
      invite_key
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const InviteKeyClikProfileMutation = gql`
  query GetClikInviteKeyInfo($invite_key: String!) {
    clik_invite_key(invite_key: $invite_key) {
      clik {
        ...clikFields
      }
      inviter {
        ...userFields
      }
      member_type
      expired
      created
    }
  }
  ${clikFields}
  ${userFields}
`;


export const InviteToClik = gql`
mutation IviteToClik($clik_id: ID!, $invited_users: [ClikInvitation]) {
  clik_invite(input: {clik_id: $clik_id, invited_users: $invited_users}) {
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`


export const AcceptClik = gql`
mutation AcceptClikApplication($application_id: ID!, $member_type: ClikMemberType) {
  clik_application_accept(input: {application_id: $application_id, member_type: $member_type}) {
    status {
      success
      status
      custom_status
      user_msg
    }
    application {
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
    clik_member {
      user {
        id
        username
        profile_pic
      }
      clik {
        id
        name
        profile_pic
      }
      member_type
    }
  }
}
`
