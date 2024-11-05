import { $api } from "@/shared/api/api";
import { SneakerResponce } from "../model/sneaker";
import { useQuery } from "@tanstack/react-query";

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
