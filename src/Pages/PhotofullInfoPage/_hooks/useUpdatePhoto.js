import { useQuery, useMutation, useQueryClient } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { updatePhoto } from "Data/Provider/PhotoProvider";

import { getPhoto } from "Data/Provider/PhotoProvider";

const useRemovePhoto = ({ onSuccess, onError }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(updatePhoto, {
    onSuccess: (response) => {
      if (onSuccess) {
        onSuccess(response);
      }
      queryClient.setQueryData(
        ["photos", response.data.id],
        (old) => response.data
      );
    },
    onError,
  });
};

export default useRemovePhoto;
