import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { deletePhoto, updatePhoto } from "Data/Provider/PhotoProvider";

import { getPhoto } from "Data/Provider/PhotoProvider";

const useRemovePhoto = () => {
  const navigate = useNavigate();
  return useMutation(deletePhoto, {
    onSuccess: () => {
      navigate("/photos", { replace: true });
    },
    onError: () => console.log("error remove"),
  });
};

export default useRemovePhoto;
