import { $api } from "@/shared/api/api";
import { useQuery } from "@tanstack/react-query";
import { SneakerResponce } from "../model/types/sneaker";

export const useSneakerApi = (title: string, sort: string, page: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["sneakers", title, sort, page],
    queryFn: async () =>
      await $api.get<SneakerResponce>(
        `/items?title=*${title}&sortBy=${sort}&page=${page || 1}&limit=4`
      ),
    select: (response) => response.data,
  });
  return { data, isPending, isError };
};
