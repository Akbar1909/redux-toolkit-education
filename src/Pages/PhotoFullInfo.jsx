import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

import { getPhoto } from "../Data/Provider/PhotoProvider";

export default function PhotoFullInfo() {
  const { albumId } = useParams();

  const photoState = useQuery(
    ["photos", albumId],
    async () => await getPhoto(albumId)  
  );

  if (photoState.isLoading) return <h1>Getting photo...</h1>;

  return (
    <div>
      {/* {
        photoState.isFetching && <h2>Checking the db...</h2>
      } */}
      <img src={photoState.data.data.url} alt="" />
      <p>{photoState.data.data.title}</p>
    </div>
  );
}
