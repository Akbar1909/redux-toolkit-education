import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { Link } from "react-router-dom";
import TestDemo from "../Components/Molecules/TestDemo";

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
        <p key={photo.id}>
          <Link to={`/photos/${photo.id}`}>{photo.title}</Link>
        </p>
      ))}

      <div className="photo--form">
        <textarea rows="10" cols="40" type="text" name="title" onChange={onHandleChange} />
        <input type="text" name="url" onChange={onHandleChange} />
        <button
          onClick={() => {
            if (values.title === "") return;
            createMutate.mutate(values);
          }}>
          Create
        </button>
      </div>
      <TestDemo />
    </div>
  );
}
