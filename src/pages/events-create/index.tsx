import {
    Button,
    Card,
    CardContent,
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    DatePicker,
    Input,
    Label,
    MultiSelect,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@dynamic-gen/avengers-ui";
import clsx from "clsx";
import {
    Car,
    Check,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Mic,
    MoveLeft,
    MoveRight,
    Music,
    Plus,
    Star
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BackButton } from "../../components/ui/back-button.tsx";
import { MutedParagraph } from "../../components/ui/muted-paragraph.tsx";
import { Paragraph } from "../../components/ui/paragraph.tsx";
import { Title } from "../../components/ui/title.tsx";
import ROUTE_NAMES from "../../config/router/route-names.ts";

type StepType = 1 | 2 | 3 | 4;

/**
 * step 1/4
 * location (country, region, district)
 * specify date (as well as start time and end time) ya sherehe: from this date we can get all providers schedules that are free that day(s)
 * specify aina ya sherehe
 * specify budget ya sherehe
 * select all features as needed eg, DJ, Dancers, ... (at this point values returned will be depending on location info provided)
 *
 * step 2/4
 * pick available venues based on data entered in step 1
 *
 * step 3/4
 * specify title
 * specify description of event
 * specify host info
 *
 * step 4/4
 * select payment method, (changisha or pay now)
 */
export function EventCreate() {
  const [currentStep, setCurrentStep] = useState<StepType>(1);
  const onChangeStep = useCallback(
    (step: StepType) => setCurrentStep(step),
    []
  );

  return (
    <div className={"flex flex-col gap-4 p-4 min-h-screen pb-16"}>
      <BackButton route={ROUTE_NAMES.LANDING} label="Home" />
      <Title level={"h2"}>Create an Event ({currentStep}/4)</Title>

      {currentStep === 1 && <StepOne onChangeStep={onChangeStep} />}
      {currentStep === 2 && <StepTwo onChangeStep={onChangeStep} />}
      {currentStep === 3 && <StepThree onChangeStep={onChangeStep} />}
      {currentStep === 4 && <StepFour onChangeStep={onChangeStep} />}
    </div>
  );
}

function StepOne(props: { onChangeStep: (step: StepType) => void }) {
  const selectedEvent = "wedding";
  const eventFeaturesList = [
    {
      value: "dj",
      label: "DJ",
      icon: Music,
      amount: 2000000,
      priceRanges: [500000, 1000000, 2000000, 3000000, 4000000],
    },
    {
      value: "transport",
      label: "Transport",
      icon: Car,
      amount: 3000000,
      priceRanges: [700000, 1000000, 2000000, 3000000, 4000000],
    },
    {
      value: "mc",
      label: "MC",
      icon: Mic,
      amount: 1000000,
      priceRanges: [1000000, 2000000, 3000000, 4000000],
    },
  ];
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const totalSelected = useMemo(
    () =>
      selectedFeatures
        .map((feature) => eventFeaturesList.find((dt) => dt.value === feature))
        .reduce((acc, itr) => acc + (itr?.amount ?? 0), 0),
    [selectedFeatures]
  );

  const countries = [{ label: "Tanzania", value: "TZ" }];
  const regions = [{ label: "Dar es Salaam", value: "dsm" }];
  const districts = [{ label: "Kinondoni", value: "kinondoni" }];

  return (
    <div className="flex flex-col gap-6">
      <Paragraph>
        Please fill in all required fields so that we can get the best venues
        for your day
      </Paragraph>

      <hr />

      <div className="flex flex-col gap-2">
        <Label>Country</Label>
        <Select defaultValue="TZ" disabled>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select ..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              {countries?.map((dt) => (
                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Region</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Regions</SelectLabel>
              {regions?.map((dt) => (
                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>District</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Districts</SelectLabel>
              {districts?.map((dt) => (
                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Date of event</Label>
        <DatePicker />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Event type</Label>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Wedding", value: "wedding" },
            { label: "Graduation", value: "graduation" },
            { label: "Other", value: "other" },
          ].map((dt) => (
            <div
              key={dt.value}
              className="flex flex-col gap-2 border text-center p-4 bg-accent rounded-md"
            >
              {dt.label}
              <div className="size-6 grid place-content-center border border-primary rounded-full bg-background mx-auto">
                {selectedEvent === dt.value && <Check size={14} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Budget</Label>
        <Input type="tel" placeholder="eg, 20,000,000" />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Event Features</Label>

        <div className="flex flex-wrap gap-2">
          {selectedFeatures?.map((feature) => {
            const target = eventFeaturesList?.find(
              (dt) => dt.value === feature
            );
            return (
              <div
                key={feature}
                className="text-sm bg-primary/20 font-semibold px-4 py-2 w-fit rounded-full"
              >
                {target?.label}
              </div>
            );
          })}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant={"secondary"}>
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"bottom"}
            className="h-[80vh] overflow-y-auto flex flex-col gap-4"
          >
            <SheetHeader>
              <SheetTitle className="text-start">Event Features</SheetTitle>
              <SheetDescription className="text-start">
                Please select all features that you want to be available for the
                big day
              </SheetDescription>
            </SheetHeader>

            <MultiSelect
              options={eventFeaturesList}
              onValueChange={setSelectedFeatures}
              defaultValue={selectedFeatures}
              placeholder="Select features"
              variant="secondary"
              animation={0}
              maxCount={undefined}
            />

            {selectedFeatures?.length ? (
              <div className="">
                <Paragraph className="">Breakdown</Paragraph>
                <MutedParagraph>
                  All prices shown are in Tanzanian Shillings (TZS)
                </MutedParagraph>

                <div className="flex flex-col mt-2">
                  {selectedFeatures.map((feature) => {
                    const target = eventFeaturesList?.find(
                      (dt) => dt.value === feature
                    );
                    return (
                      <div
                        key={feature}
                        className="border-b p-2 flex gap-2 justify-between"
                      >
                        <Paragraph>{target?.label}</Paragraph>
                        <Popover>
                          <PopoverTrigger>
                            <Paragraph className="text-sm text-muted-foreground">
                              {target?.amount?.toLocaleString()}
                            </Paragraph>
                          </PopoverTrigger>
                          <PopoverContent className="flex flex-col gap-4">
                            <Paragraph>
                              Available costs for{" "}
                              <strong>{target?.label}</strong>
                            </Paragraph>

                            <hr />

                            <div className="flex flex-wrap gap-2">
                              {target?.priceRanges?.map((price) => (
                                <div
                                  className={clsx(
                                    "border px-4 py-1 rounded-full text-sm w-fit",
                                    price === target?.amount
                                      ? "bg-primary/15 text-primary"
                                      : "bg-secondary"
                                  )}
                                >
                                  {price?.toLocaleString()}
                                </div>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    );
                  })}
                  <div className="bg-accent border-b p-2 flex gap-2 justify-between">
                    <Paragraph>Total</Paragraph>
                    <Paragraph className="text-sm font-bold">
                      {totalSelected?.toLocaleString()}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ) : (
              <MutedParagraph>Nothing selected!</MutedParagraph>
            )}
          </SheetContent>
        </Sheet>
      </div>

      <Button onClick={() => props?.onChangeStep(2)}>
        <Paragraph>Proceed</Paragraph>
        <MoveRight />
      </Button>
    </div>
  );
}

function StepTwo(props: { onChangeStep: (step: StepType) => void }) {
  const [selectedVenue, setSelectedVenue] = useState<string>();
  const venues = [
    {
      id: "See Breeze Hall",
      name: "See Breeze Hall",
      location: "Mwai Kibaki Road, Dar es Salaam (Event Venue)",
      rating: 4,
      mainImage:
        "https://lh3.googleusercontent.com/p/AF1QipP0LLFqQ42dfgpVqb-IHIOFKdALXbUG9etiezxl=s1360-w1360-h1020",
        images: [
            "https://lh3.googleusercontent.com/p/AF1QipP0LLFqQ42dfgpVqb-IHIOFKdALXbUG9etiezxl=s1360-w1360-h1020",
            "https://lh5.googleusercontent.com/p/AF1QipOjxTccKfG3PQyLYi-fboPoOef8ku68DrrF0eoR=w141-h118-n-k-no-nu",
            "https://lh5.googleusercontent.com/p/AF1QipPaxxm_3QDDG8avwPcTsTP1YwT38KPMF1ppHukh=w141-h101-n-k-no-nu",
            "https://lh5.googleusercontent.com/p/AF1QipPJOhRlFIEhwL_1RMqUDkpGNgn8OueuoDGfqQTd=w141-h101-n-k-no-nu"
        ]
    },
    {
      id: "Jaks Hall",
      name: "Jaks Hall",
      location:
        "Plot # 1053, Block L, Mbezi Beach Dar es salaam  (Event Venue)",
      rating: 4,
      mainImage:
        "https://lh5.googleusercontent.com/p/AF1QipPEOTxRtmlFNAKjLKxJozAtpQrSYlHuVv_h-jKU=w520-h350-n-k-no",
        images: [
            "https://lh3.googleusercontent.com/p/AF1QipP0LLFqQ42dfgpVqb-IHIOFKdALXbUG9etiezxl=s1360-w1360-h1020",
            "https://lh5.googleusercontent.com/p/AF1QipORWAqr5qS47qV4dNtRE4Z7oDnkQENbuTyDdOf6=w141-h118-n-k-no-nu",
            "https://lh5.googleusercontent.com/p/AF1QipOeT-2Hu7e9cO3a5KIevwtSrGyOkj5CDjB0tWhH=w141-h141-n-k-no-nu"
        ]
    },
  ];

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="flex flex-col gap-6">
      <Paragraph>Pick your desired venue</Paragraph>

      {venues?.map((venue) => {
        return (
          <Sheet>
            <SheetTrigger asChild>
              <div
                onClick={() => setSelectedVenue(venue?.id)}
                key={venue?.id}
                className="rounded-md flex gap-2 cursor-pointer"
              >
                <div className="size-28 aspect-square bg-accent border rounded-md">
                  <img
                    src={venue?.mainImage}
                    alt=""
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Paragraph>{venue?.name}</Paragraph>
                  <div className="text-muted-foreground space-x-1 flex items-start text-sm">
                    <MapPin size={16} className="mt-0.5" />
                    <p>{venue?.location}</p>
                  </div>
                  <div className="text-muted-foreground space-x-1 flex items-start text-sm">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        size={16}
                        fill={index > venue?.rating - 1 ? "white" : "#FFCC00"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SheetTrigger>
            <SheetContent
              side={"bottom"}
              className="h-[80vh] overflow-y-auto flex flex-col gap-4 pb-20"
            >
              <SheetHeader>
                <SheetTitle className="text-start">{venue?.name}</SheetTitle>
                <SheetDescription className="text-start space-y-2">
                    <div className="text-muted-foreground space-x-1 flex items-start text-sm">
                        <MapPin size={16} className="mt-0.5" />
                        <p>{venue?.location}</p>
                    </div>

                    <div className="text-muted-foreground space-x-1 flex items-start text-sm">
                        {Array.from({ length: 5 }, (_, index) => (
                        <Star
                            size={16}
                            fill={index > venue?.rating - 1 ? "white" : "#FFCC00"}
                        />
                        ))}
                    </div>
                </SheetDescription>
              </SheetHeader>

                <Carousel 
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        align: "end",
                        loop: false,
                      }}
                >
                    <CarouselContent>
                        {venue?.images?.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="rounded-md">
                                <CardContent className="flex w-full h-[50vh] items-center justify-center p-0">
                                    <img src={image} alt="" className="h-full w-full object-cover rounded-md" />
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="flex items-center justify-between gap-4">
                    <Button size="icon" variant={"outline"} disabled={!api?.canScrollPrev()} onClick={() => api?.scrollPrev()}>
                        <ChevronLeft />
                    </Button>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                        {current} of {count}
                    </div>
                    <Button size="icon" variant={"outline"} disabled={!api?.canScrollNext()} onClick={() => api?.scrollNext()}>
                        <ChevronRight />
                    </Button>
                </div>

                <Button className="col-span-2">
                    <Paragraph>I want this Venue</Paragraph>
                    <Check />
                </Button>
            </SheetContent>
          </Sheet>
        );
      })}

      <div className="grid grid-cols-3 gap-4">
        <Button variant={"secondary"} onClick={() => props?.onChangeStep(1)}>
          <MoveLeft />
          <Paragraph>Back</Paragraph>
        </Button>
        <Button
          disabled={!selectedVenue}
          onClick={() => props?.onChangeStep(3)}
          className="col-span-2"
        >
          <Paragraph>Proceed</Paragraph>
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}

function StepThree(props: { onChangeStep: (step: StepType) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <Button variant={"secondary"} onClick={() => props?.onChangeStep(2)}>
          <MoveLeft />
          <Paragraph>Back</Paragraph>
        </Button>
        <Button onClick={() => props?.onChangeStep(4)} className="col-span-2">
          <Paragraph>Proceed</Paragraph>
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}

function StepFour(props: { onChangeStep: (step: StepType) => void }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <Button variant={"secondary"} onClick={() => props?.onChangeStep(3)}>
          <MoveLeft />
          <Paragraph>Back</Paragraph>
        </Button>
        <Button onClick={() => {}} className="col-span-2">
          <Paragraph>Complete</Paragraph>
          <MoveRight />
        </Button>
      </div>
    </div>
  );
}
