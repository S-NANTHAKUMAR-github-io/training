

import React from "react";
import { useQuery, gql , InMemoryCache, ApolloClient} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
  });

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY, client);
  console.log("client:", client);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

// import React from "react";
// import axios from "axios";
// import { useQuery } from "react-query";

// const endpoint = "https://api.spacex.land/graphql/";
// const FILMS_QUERY = `
//   {
//     launchesPast(limit: 10) {
//       id
//       mission_name
//     }
//   }
// `;

// export default function App() {
//   const { data, isLoading, error } = useQuery("launches", () => {
//     return fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query: FILMS_QUERY })
//     })
//       .then((response) => {
//         if (response.status >= 400) {
//           throw new Error("Error fetching data");
//         } else {
//           return response.json();
//         }
//       })
//       .then((data) => data.data);
//   });

//   if (isLoading) return "Loading...";
//   if (error) return <pre>{error.message}</pre>;

//   return (
//     <div>
//       <h1>SpaceX Launches</h1>
//       <ul>
//         {data.launchesPast.map((launch) => (
//           <li key={launch.id}>{launch.mission_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }