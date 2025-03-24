import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./Button"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  plugins?: any[]
  options?: any
  children: React.ReactNode
}

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, plugins = [], options = {}, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)

    const scrollPrev = React.useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollPrev()
      setTimeout(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
      }, 100)
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
      setTimeout(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
      }, 100)
    }, [emblaApi])

    React.useEffect(() => {
      if (!emblaApi) return
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    return (
      <div className="relative">
        <div className="overflow-hidden" {...props}>
          <div className="flex" ref={emblaRef}>
            {React.Children.map(children, (child, index) => (
              <div className="relative min-w-full" key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-full items-center justify-center p-4", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselItem }
