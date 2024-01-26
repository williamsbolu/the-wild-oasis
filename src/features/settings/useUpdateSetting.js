import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const {
    mutate: updateSetting,
    isLoading: isUpdating,
    error,
  } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");

      // refetch all d cabins data
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, error, updateSetting };
}

// we can also use the onSuccess handler right where the mutation happens... example like we can use it on the mutation function direct (createCabin) "mutation(parameters, { onSuccess: ()=>  }) example in the createCabinForm component
