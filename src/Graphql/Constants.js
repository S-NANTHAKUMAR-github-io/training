import {gql} from '@apollo/client'



// export const Client = new ApolloClient({
//     uri: "https://51e6-103-113-190-39.in.ngrok.io/api/rest/local",
//     cache: new InMemoryCache()
//   });


export const GET_DATA = gql`
query MyQuery {
  users {
    username
    gender
    age
    id
    Mobile_Number
  }
}
`;
