import { SneakerList } from "@/entities/Sneaker/ui/SneakerList/SneakerList";
import { MainCarousel } from "../MainCarousel/MainCarousel";

const MainPage = () => {
  return (
    <section>
      <div className="flex justify-center mt-[45px]">
        <MainCarousel />
      </div>
      <SneakerList />
    </section>
  );
};

export default MainPage;
