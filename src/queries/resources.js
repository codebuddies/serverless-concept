import { gql } from 'apollo-boost';


export const RESOURCES = gql`
  {
    resources {
      title
      description
    }
  }
`;
