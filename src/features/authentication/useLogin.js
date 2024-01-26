import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user); // manually set the user data to the react query cache
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email and password are incorrect");
    },
  });

  return { login, isLoading };
}

// "not dat important 😒" we manually set the user data to the react query cache so that when loggging in the ['user'] data won't be fetch again
// thereby preventing the loading spinner from being shown except when d page is revisited after a while
