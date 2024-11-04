import { $api } from "@/shared/api/api";
import { useQuery } from "react-query";
import { SneakerModel } from "../model/sneaker";

export const useSneakerApi = (title: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sneakers", title],
    queryFn: () => $api.get<SneakerModel[]>(`/items?title=*${title}`),
    select: (response) => response.data,
  });
  return { data, isLoading, isError };
};
