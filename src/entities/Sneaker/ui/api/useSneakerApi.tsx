import { $api } from "@/shared/api/api";
import { useQuery } from "react-query";
import { SneakerModel } from "../model/sneaker";

export const useSneakerApi = (title: string, sort: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sneakers", title, sort],
    queryFn: async () =>
      await $api.get<SneakerModel[]>(`/items?title=*${title}&sortBy=${sort}`),
    select: (response) => response.data,
  });
  return { data, isLoading, isError };
};
