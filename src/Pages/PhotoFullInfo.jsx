import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

import { getPhoto } from "../Data/Provider/PhotoProvider";

import { deletePhoto, updatePhoto } from "../Data/Provider/PhotoProvider";

export default function PhotoFullInfo() {
  const [isUpdating, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const queryClient = useQueryClient();

  const { albumId } = useParams();
  const navigate = useNavigate();

  const photoState = useQuery(["photos", albumId], async () => await getPhoto(albumId));
  console.log(photoState);
  const removePhoto = useMutation(deletePhoto, {
    onSuccess: () => {
      navigate("/photos", { replace: true });
    },
    onError: () => console.log("error remove"),
  });

  const updateMutation = useMutation(updatePhoto, {
    onSuccess: () => {
      setUpdate(false);

      queryClient.setQueryData(["photos", photoState.data.data.id], (old) => ({
        ...old,
        title,
        url,
      }));
    },
    onError: () => console.log("error update"),
  });

  if (photoState.isLoading) return <h1>Getting photo...</h1>;

  return (
    <div>
      {/* {
        photoState.isFetching && <h2>Checking the db...</h2>
      } */}
      <img src={photoState.data.data.url} alt="" />
      <p>{photoState.data.data.title}</p>
      <button onClick={() => navigate(-1)}>../Back </button>
      <button onClick={() => removePhoto.mutate(photoState.data.data.id)}>Delete photo</button>
      <div>
        <button
          onClick={() => {
            setUpdate((p) => !p);
          }}>
          {isUpdating ? "Cancel" : "Update"}
        </button>
      </div>

      {isUpdating && (
        <div>
          <div>
            <h3>title</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <h3>url</h3>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
          <button
            onClick={() => {
              const obj = { ...photoState.data.data, title, url };
              updateMutation.mutate(obj);
            }}>
            Update Changes
          </button>
        </div>
      )}
    </div>
  );
}
