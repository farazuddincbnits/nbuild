import { gql, useQuery } from '@apollo/client';

export const ChangeAccessKeyMutation = gql`
  mutation ChangeAccessKey {
    account_change_access_key(input: {}) {
      status {
        success
        status
        custom_status
        user_msg
      }
      access_key
    }
  }
`;
