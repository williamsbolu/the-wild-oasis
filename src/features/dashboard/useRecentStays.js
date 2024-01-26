import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  // get the filter value from the url
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  // Subtract the specified number of days from today. // we converted it to ISO format because of supabase
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (curStay) =>
      curStay.status === "checked-in" || curStay.status === "checked-out"
  );

  return { isLoading, stays, confirmedStays, numDays };
}
