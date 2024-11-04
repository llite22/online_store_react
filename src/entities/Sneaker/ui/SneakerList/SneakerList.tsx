import { Input } from "@/shared/ui/input";
import { SneakerCard } from "../SneakerCard/SneakerCard";

export const SneakerList = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mt-[35px] mb-[35px]">
          Все кроссовки
        </h2>
        <div className="relative">
          <img
            className="absolute left-4 top-3"
            src="/search.svg"
            alt="search"
          />
          <Input
            className="border border-gray-400 text-gray-400 rounded-xl py-2 pl-11 pr-4 outline-none focus:border-gray-400"
            placeholder="Поиск..."
            type="text"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(9)].map((_, index) => (
          <SneakerCard key={index} />
        ))}
      </div>
    </div>
  );
};
