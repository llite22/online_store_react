import { Input } from "@/shared/ui/input";
import { SneakerCard } from "../SneakerCard/SneakerCard";
import { useSneakerApi } from "../api/useSneakerApi";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { MoonLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export const SneakerList = () => {
  const [sort, setSort] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceValue = useDebounce<string>(searchValue, 300);
  const { data, isLoading, isError } = useSneakerApi(debounceValue, sort);

  const onSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mt-[35px] mb-[35px]">
          Все кроссовки
        </h2>
        <div className="flex items-center gap-4">
          <Select onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="w-[180px] rounded-xl border-gray-400 text-gray-400">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white">
                <SelectItem className="cursor-pointer" value="price">
                  По возрастанию
                </SelectItem>
                <SelectItem className="cursor-pointer" value="-price">
                  По убыванию
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative">
            <img
              className="absolute left-4 top-3"
              src="/search.svg"
              alt="search"
            />
            <Input
              value={searchValue}
              onChange={onSearchValue}
              className="border border-gray-400 text-gray-400 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="col-span-4 flex justify-center items-center h-[50vh]">
            <MoonLoader color={"#36d7b7"} loading={true} size={70} />
          </div>
        ) : isError ? (
          <div className="col-span-4 flex justify-center items-center h-[50vh]">
            Error
          </div>
        ) : (
          data?.map((sneaker) => (
            <SneakerCard
              key={sneaker.id}
              id={sneaker.id}
              title={sneaker.title}
              price={sneaker.price}
              imageUrl={sneaker.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};
