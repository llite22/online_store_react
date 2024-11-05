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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";

export const SneakerList = () => {
  const [sort, setSort] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounceValue = useDebounce<string>(searchValue, 300);
  const { data, isLoading, isError } = useSneakerApi(
    debounceValue,
    sort,
    currentPage
  );
  const totalPages = (data && data.meta.total_pages) || 1;
  const pageRange = 2;

  const onSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearchValue(event.target.value.toLowerCase());
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getVisiblePages = () => {
    const startPage = Math.max(currentPage, 1);
    const endPage = Math.min(currentPage + pageRange - 1, totalPages);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
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
          data &&
          data.items.map((sneaker) => (
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
      {totalPages > 1 && (
        <Pagination className="flex items-center justify-center mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={currentPage === 1 ? undefined : handlePrevious}
                className={
                  currentPage === 1
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>

            {getVisiblePages().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                  className={`rounded-xl px-4 py-2 cursor-pointer border border-black ${
                    page === currentPage
                      ? "bg-orange-500 text-white hover:bg-orange-700 hover:text-white"
                      : "hover:bg-orange-700 hover:text-white"
                  }`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage + pageRange - 1 < totalPages && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={currentPage >= totalPages ? undefined : handleNext}
                className={
                  currentPage >= totalPages
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
