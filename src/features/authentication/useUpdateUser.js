import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User account successfully updated");

      // refetch all d user data
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      // same solution as before // update the 'user' cache data
      // queryClient.setQueryData(["user", user]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
