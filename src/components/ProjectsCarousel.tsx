import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export const ProjectsCarousel = () => {
    const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

    return (
        <div>
            <h1 className="">Projects</h1>
            <Carousel
                plugins={[plugin.current]}
                className="w-full sm:w-2/3 m-auto"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={() => plugin.current.play()}
            >
                <CarouselContent className="">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem className="" key={index}>
                            <Link href={`/projects/${index}`}>
                                <Card>
                                    <CardHeader>Project title {index}</CardHeader>
                                    <CardContent>
                                        Here are the biggest enterprise technology acquisitions of
                                        2021 so far, in reverse chronological order.
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <div className="flex justify-center mt-5">
                    <CarouselPrevious />
                    <CarouselNext />
                </div> */}
            </Carousel>
        </div>
    );
};
