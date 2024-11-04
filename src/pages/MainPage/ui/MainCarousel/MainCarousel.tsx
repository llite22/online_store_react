import { Card, CardContent } from "@/shared/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import CarouselLogo from "@/shared/assets/carousel.svg?react";

export const MainCarousel = () => {
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <CarouselLogo />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
