import { $api } from "@/shared/api/api";
import { useQuery } from "react-query";
import { SneakerResponce } from "../model/sneaker";

export const useSneakerApi = (title: string, sort: string, page: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sneakers", title, sort, page],
    queryFn: async () =>
      await $api.get<SneakerResponce>(
        `/items?title=*${title}&sortBy=${sort}&page=${page || 1}&limit=4`
      ),
    select: (response) => response.data,
  });
  return { data, isLoading, isError };
};
