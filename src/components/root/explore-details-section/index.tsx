"use client"
import { useRef, useState } from "react"
import { useVideoVisibility } from "@/hooks/useVideoVisibility"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Autoplay } from "swiper/modules"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CirclePlusIcon } from "lucide-react"
import "swiper/css"

export const ExploreDetailsSection = () => {
  const [value, setValue] = useState<string>("sizes")
  const videoSizesRef = useRef<HTMLVideoElement | null>(null)
  const videoConectivityRef = useRef<HTMLVideoElement | null>(null)
  const videoMicrophoneRef = useRef<HTMLVideoElement | null>(null)
  const videoCameraRef = useRef<HTMLVideoElement | null>(null)

  const handleValue = (detail: string) => {
    setValue(detail)
  }
  
  useVideoVisibility(videoSizesRef)
  useVideoVisibility(videoConectivityRef)
  useVideoVisibility(videoMicrophoneRef)
  useVideoVisibility(videoCameraRef)

  useGSAP(() => {
    animateWithGsap(".explore-title-slide-negative", {
      opacity: 1,
      y: -20,
      delay: 0
    })
  })

  return (
    <section className="pt-12 md:pt-24 pl-5 ml:px-10 w-full bg-black">
      <div className="mb-12 md:mb-24">
        <h2 className="explore-title-slide-negative text-3xl md:text-5xl font-semibold text-white">
          Explore os detalhes.
        </h2>
      </div>
      <Tabs defaultValue="sizes" className="relative flex-col w-full">
        <TabsList className="md:absolute md: top-0 xl:top-2/4 xl:-translate-y-2/4 h-auto md:h-min flex flex-col items-baseline gap-y-4 z-30">
          <TabsTrigger value="sizes" onClick={() => handleValue("sizes")}>
            <CirclePlusIcon className="size-5" />
            Tamanhos
          </TabsTrigger>
          <TabsTrigger value="colors" onClick={() => handleValue("colors")}>
            <CirclePlusIcon className="size-5" />
            Cores
          </TabsTrigger>
          <TabsTrigger value="conectivity" onClick={() => handleValue("conectivity")}>
            <CirclePlusIcon className="size-5" />
            Conectividade
          </TabsTrigger>
          <TabsTrigger value="microphone" onClick={() => handleValue("microphone")}>
            <CirclePlusIcon className="size-5" />
            Microfones e alto-falantes
          </TabsTrigger>
          <TabsTrigger value="camera" onClick={() => handleValue("camera")}>
            <CirclePlusIcon className="size-5" />
            Câmera
          </TabsTrigger>
        </TabsList>
        <TabsContent className="flex-1" value="sizes">
          <video
            ref={videoSizesRef}
            src="/videos/root/details/details-video-01.mp4"
            autoPlay
            className="object-cover w-full h-[40dvh] md:h-[80dvh]"
            controls={false}
          />
        </TabsContent>
        <TabsContent className="w-full" value="colors">
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Keyboard, Autoplay]}
            className="w-full"
          >
            <SwiperSlide className="w-2/4">
              <img
                src="/images/root/details/details-image-color-01.jpg"
                className="object-cover w-full h-[40dvh] md:h-[80dvh]"
              />
            </SwiperSlide>
            <SwiperSlide className="w-2/4">
              <img
                src="/images/root/details/details-image-color-02.jpg"
                className="object-cover w-full h-[40dvh] md:h-[80dvh]"
              />
            </SwiperSlide>
          </Swiper>
        </TabsContent>
        <TabsContent className="w-full" value="conectivity">
          <video
            ref={videoConectivityRef}
            src="/videos/root/details/details-video-02.mp4"
            autoPlay
            className="object-cover w-full h-[40dvh] md:h-[80dvh]"
            controls={false}
          />
        </TabsContent>
        <TabsContent className="w-full" value="microphone">
          <video
            ref={videoMicrophoneRef}
            src="/videos/root/details/details-video-03.mp4"
            autoPlay
            className="object-cover w-full h-[40dvh] md:h-[80dvh]"
            controls={false}
          />
        </TabsContent>
        <TabsContent className="w-full" value="camera">
          <video
            ref={videoCameraRef}
            src="/videos/root/details/details-video-04.mp4"
            autoPlay
            className="object-cover w-full h-[40dvh] md:h-[80dvh]"
            controls={false}
          />
        </TabsContent>
      </Tabs>
    </section>
  )
}