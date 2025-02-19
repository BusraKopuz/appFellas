import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFlightList = () => {
    const {data, error, isLoading} = useSWR('/api/flights', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default useFlightList;