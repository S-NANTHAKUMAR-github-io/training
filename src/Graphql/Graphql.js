import React from "react";
import { useQuery} from "@apollo/client";
import { GET_DATA} from "./Constants";


export default function App() {
  const { data, loading, error } = useQuery(GET_DATA );
  //console.log("client:", Client);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <ul>
        {data.users.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
}