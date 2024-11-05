import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";

export const PaginationList = ({
  pageRange,
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  pageRange: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) => {
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
  );
};
