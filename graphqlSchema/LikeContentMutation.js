import { gql, useQuery } from '@apollo/client';
// import {
//   __PageInfoField,
//   commentFields,
//   statusFields
// } from "../GraphQLFragment";

export const LikeContentMutation = gql`
  mutation LikeContent($content_id: ID!, $like_type: LikeType!) {
    content_like(input: {content_id: $content_id, like_type: $like_type})  {
      status {
        success
        status
        custom_status
        user_msg
      }
    }
  }
`;

export const CreateCommentMutation = gql`
mutation CreateComment($parent_id:ID! $text:String! $locked: Boolean $private: Boolean $cliks:[ID] $users:[ID]) {
  comment_create(input: {parent_id:$parent_id text:$text locked:$locked private:$private  cliks:$cliks users:$users}) {
    comment {
      id
			path
      text
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
      created
    }
    discussion {
      id
      locked
      private
      cliks {
        id
        name
        profile_pic
      }
      users {
        id
        username
        profile_pic
      }
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

export const EditCommentMutation = gql`
  mutation UpdateComment($comment_id:ID! $text:String $locked: Boolean $private: Boolean $cliks:[ID] $users:[ID]) {
  comment_update(input: {comment_id:$comment_id text:$text locked:$locked private:$private  cliks:$cliks users:$users}) {
    comment {
      id
      text
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
      created
    }
    discussion {
      id
      locked
      private
      cliks {
        id
        name
        profile_pic
      }
      users {
        id
        username
        profile_pic
      }
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
