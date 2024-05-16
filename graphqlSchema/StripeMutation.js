import { gql, useQuery } from '@apollo/client';

export const GetPaymentInfoOuery = gql`
query Account_payment_info($id: ID!) {
  node(id: $id) {
    id
    ... on Account {
      payment_info {
        __typename
        ... on CreditCard {
          last4
          brand
          exp_month
          exp_year
          email
        }
        ... on NoPaymentInfo {
          status {
            success
            status
            custom_status
            user_msg
          }
        }
      }
    }
  }
}
`;


export const IsAccountHaveOuery = gql`
query Account_payout_info($id: ID!) {
  node(id: $id) {
    id
    ... on Account {
      payout_info {
        has_stripe_account
      }
    }
  }
}
`;

export const AccountSetting = gql`
query account_settings($id: ID!) {
  node(id: $id) {
    id
    ... on Account {
      settings {
        email
        email_notification_monthly_earnings
        email_notification_weclikd_updates
        email_notification_clik_invitations
      }
    }
  }
}
`;


