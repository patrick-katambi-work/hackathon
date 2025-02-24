import {
    Button,
    Card,
    CardContent,
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem
} from "@dynamic-gen/avengers-ui";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";

export function CarouselImages() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tluOMwuVCGGGaDvMxrQ-FO4RvBb7RhN1Xw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKEYBM-2VgNOJFZZAzRro97m4_eGzFUD19g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtVfa4D_9UavnUBWo2DwTsu3ENCX5pArxKw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_g896cyQ2r0AX8XU0kWbDX2822CQ5nLe6A&s",
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "end",
          loop: false,
        }}
      >
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="rounded-md">
                  <CardContent className="flex w-full h-[50vh] items-center justify-center p-0">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-between gap-4">
        <Button
          size="icon"
          variant={"outline"}
          disabled={!api?.canScrollPrev()}
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft />
        </Button>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} of {count}
        </div>
        <Button
          size="icon"
          variant={"outline"}
          disabled={!api?.canScrollNext()}
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
