import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //   queryClient.removeQueries(["user"]);
      queryClient.removeQueries(); // remove all the queries/stored-data from the react query cache
      navigate("/login", { replace: true });
    },
  });

  return { isLoading, logout };
}
