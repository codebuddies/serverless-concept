import { gql } from 'apollo-boost';


export const EXCHANGE_RATES = gql`
  {
    resources {
      title
      description
    }
  }
`;
