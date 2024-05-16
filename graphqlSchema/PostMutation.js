import { gql, useQuery } from '@apollo/client';
import {
  __PageInfoField,
  postFields,
  adminpostFields,
  commentFields,
  clikFields,
  userFields,
  topicFields,
  statusFields
} from "./GraphQLFragment";

export const PostCreateMutation = gql`
  mutation CreatePost(
    $title: String!
    $summary: String!
    $users:[ID]
    $banner_picture: String
    $topics: [ID]
    $cliks: [ID]
    $link: String
  ) {
    post_create(
      input: {
        title: $title
        summary: $summary
        users:$users 
        banner_picture: $banner_picture
        topics: $topics
        cliks: $cliks
        link: $link
      }
    ) {
      post {
      ...postFields
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
      cliks(first:3) {
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
      topics(first:3) {
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
      users(first:3) {
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
      external_feeds(first:3) {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
  ${postFields}
`;

export const PostShareMutation = gql`
mutation SharePost($post_id:ID! $cliks:[ID] $topics:[ID] $users:[ID]) {
  post_share(input: {post_id:$post_id cliks:$cliks topics:$topics users:$users}) {
    post {
      id
      title
      summary
      link
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
      cliks(first:3) {
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
      topics(first:3) {
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
      users(first:3) {
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
      external_feeds(first:3) {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;



export const UserFeedMutation = gql`
  query UserFeed($id: ID!, $sort_type: SortType, $first: Int, $after: String) {
    node(id: $id) {
      id
      ... on User {
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

export const AdminUserFeedMutation = gql`
  query UserFeed($id: ID!, $first: Int, $after: String, $sort: SortEnum) {
    user(id: $id) {
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
export const PostQuery = gql`
  query Post($id: ID!, $cliks_first: Int, $cliks_after: String, $users_first: Int, $users_after: String, $topics_first: Int, $topics_after: String, $feeds_first: Int, $feeds_after: String) {
  node(id: $id) {
    id
    ... on Post {
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
      cliks(first: $cliks_first, after: $cliks_after) {
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
      topics(first: $topics_first, after: $topics_after) {
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
      users(first: $users_first, after: $users_after) {
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
      external_feeds(first: $feeds_first, after: $feeds_after) {
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
 
`;

export const AdminPostQuery = gql`
  query GetPost($id: ID!, $first: Int, $after: String, $clik_id: [ID]) {
    post(id: $id) {
      ...adminpostFields
      comments(first: $first, after: $after, clik_ids: $clik_id) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            ...commentFields
            comments(first: $first, clik_ids: $clik_id) {
              pageInfo {
                endCursor
                hasNextPage
              }
              edges {
                node {
                  ...commentFields
                  comments(first: $first, clik_ids: $clik_id) {
                    pageInfo {
                      endCursor
                      hasNextPage
                    }
                    edges {
                      node {
                        ...commentFields
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${commentFields}
  ${adminpostFields}
`;

export const CommentQuery = gql`
  query GetComments($id: ID!, $first: Int, $after: String, $clik_id: ID) {
    comments(id: $id, first: $first, after: $after, clik_id: $clik_id) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...commentFields
          comments(first: $first, clik_id: $clik_id) {
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                ...commentFields
                comments(first: $first, clik_id: $clik_id) {
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                  edges {
                    node {
                      ...commentFields
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${commentFields}
`;

export const SwiperCommentQuery = gql`
  query GetComment($id: ID!, $first: Int, $after: String, $clik_id: ID) {
    comments(id: $id, first: $first, after: $after, clik_id: $clik_id) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...commentFields
          comments(first: $first, clik_id: $clik_id) {
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                ...commentFields
                comments(first: $first, clik_id: $clik_id) {
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                  edges {
                    node {
                      ...commentFields
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ${commentFields}
`;

export const CreateClikMutation = gql`
  mutation CreateClik($name:String, $profile_pic:String, $websites:[String] $invite_only:Boolean $max_members:Int $qualifications:[String] $description:String) {
  clik_create(input: {name:$name profile_pic:$profile_pic websites:$websites invite_only:$invite_only max_members:$max_members qualifications:$qualifications description:$description}) {
    clik {
      ...clikFields
    }
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
  ${clikFields}
`;

export const ClikMembersMutation = gql`
  query ClikMembers($id: ID!, $first: Int, $after: String, $last: Int, $before: String) {
  node(id: $id) {
    id
    ... on Clik {
      members(first: $first, after: $after, last: $last, before: $before) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        edges {
          node {
            user {
              id
              username
              profile_pic
            }
            member_type
          }
        }
      }
    }
  }
}
`;

export const UrlInfoMutation = gql`
  mutation UnfurlPost($link: String!) {
	post_unfurl(input: { link: $link }) {
		post {
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
		status {
			success
			status
			custom_status
			user_msg
		}
	}
}
`;

export const CreateTopicMutation = gql`
  mutation CreateTopic($name:String, $parent_topic_id:ID, $profile_pic:String, $websites:[String] $aliases:[String] $description:String) {
  topic_create(input: {name:$name parent_topic_id:$parent_topic_id profile_pic:$profile_pic websites:$websites aliases:$aliases description:$description}) {
    topic {
      ...topicFields
    }
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
  ${topicFields}
`;

export const EditTopicMutation = gql`
  mutation UpdateTopic($topic_id:ID! $parent_topic_id:ID $name:String, $profile_pic:String, $websites:[String] $aliases:[String] $description:String) {
  topic_update(input: {topic_id:$topic_id parent_topic_id:$parent_topic_id name:$name profile_pic:$profile_pic websites:$websites aliases:$aliases description:$description}) {
    topic {
      id
      name
      profile_pic
      websites
      num_followers
      num_subtopics
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

export const PostEditMutation = gql`mutation UpdatePost($post_id:ID! $title:String $summary:String $link:String,  $banner_picture: String) {
  post_update(input: {post_id:$post_id title:$title summary:$summary link:$link banner_picture: $banner_picture}) {
    post {
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
      cliks(first:3) {
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
      topics(first:3) {
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
      users(first:3) {
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
      external_feeds(first:3) {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}
`;

export const GetCommentMutation = gql`
query NestedComments($id: ID! $clik_ids:[ID] $user_ids:[ID] $depth:Int $sort_type:SortType) {
  node(id: $id) {
    id
    ... on Content {
      nested_comments(clik_ids:$clik_ids user_ids:$user_ids depth:$depth sort_type:$sort_type)
    }
  }
}
`


export const getCommentPost = gql`
query Comment($id: ID!, $depth: Int, $sort_type: SortType) {
	node(id: $id) {
		id
		... on Comment {
			discussion {
				id
			}
			path
			post {
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
				nested_comments(depth: $depth, sort_type: $sort_type)
				created
			}
		}
	}
}
`

export const CommentShareMutation = gql`
mutation ShareComment($comment_id:ID! $users:[ID]) {
  comment_share(input: {comment_id:$comment_id users:$users}) {
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
    status {
      success
      status
      custom_status
      user_msg
    }
  }
}`