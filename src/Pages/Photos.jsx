import React, { useDeferredValue, useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

import { getPhotosList, createPhoto } from "../Data/Provider/PhotoProvider";

export default function Photos() {
  const queryClient = useQueryClient();

  const [values, setValues] = useState({
    title: "",
    url: "",
  });

  const photosState = useQuery("photos", getPhotosList, {
    enabled: true,
  });

 

  const onHandleChange = (e) =>
    setValues((prevV) => ({ ...prevV, [e.target.name]: e.target.value }));

  const createMutate = useMutation(createPhoto, {
    onSuccess: async (response) => {
      setValues({ title: "", url: "" });

      queryClient.setQueryData("photos", (old) => ({
        ...old,
        data: [...old.data, response.data],
      }));
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (photosState.isLoading) return <h1>Loading....</h1>;

  return (
    <div className="container flex-align-center">
      {photosState.data.data.map((photo) => (
        <p>
          <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
        </p>
      ))}

      <div className="photo--form">
        <textarea
          rows="10"
          type="text"
          name="title"
          onChange={onHandleChange}
        />
        <input type="text" name="url" onChange={onHandleChange} />
        <button onClick={() => createMutate.mutate(values)}>Create</button>
      </div>
    </div>
  );
}
