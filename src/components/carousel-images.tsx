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
    "https://lh3.googleusercontent.com/p/AF1QipP0LLFqQ42dfgpVqb-IHIOFKdALXbUG9etiezxl=s1360-w1360-h1020",
    "https://lh5.googleusercontent.com/p/AF1QipOjxTccKfG3PQyLYi-fboPoOef8ku68DrrF0eoR=w141-h118-n-k-no-nu",
    "https://lh5.googleusercontent.com/p/AF1QipPaxxm_3QDDG8avwPcTsTP1YwT38KPMF1ppHukh=w141-h101-n-k-no-nu",
    "https://lh5.googleusercontent.com/p/AF1QipPJOhRlFIEhwL_1RMqUDkpGNgn8OueuoDGfqQTd=w141-h101-n-k-no-nu",
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
