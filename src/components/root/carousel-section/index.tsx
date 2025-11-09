"use client"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Keyboard, Autoplay } from "swiper/modules"
import { useVideoVisibility } from "@/hooks/useVideoVisibility"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import "swiper/css"
import { m } from "motion/react"

export const CarouselSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useVideoVisibility(videoRef)

  useGSAP(() => {
    animateWithGsap(".carousel-title-slide-negative", {
      opacity: 1,
      y: -15,
      delay: 0.5,
    })
  })

  return (
    <section className="pl-10 pt-24 pb-10 w-full bg-[#0a0a0a]">
      <div className="carousel-title-slide-negative mb-5">
        <h2 className="text-2xl md:text-5xl font-semibold text-white">
          Comece pelos destaques.
        </h2>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          keyboard={{ enabled: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Keyboard, Autoplay]}
          coverflowEffect={{ rotate: 25, stretch: 0, depth: 50, modifier: 1 }}
      >
        <SwiperSlide className="sm:pr-20 md:pr-0 w-2/4 bg-[#111] rounded-tl-2xl rounded-bl-2xl">
          <div className="p-8 lg:p-16 pr-0! flex flex-col">
            <div className="mb-5">
              <h3 className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Uma plataforma poderosa para IA.
              </h3>
              <p className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Genial de dentro para fora.
              </p>
            </div>
            <div>
              <video
                ref={videoRef}
                src="/videos/root/carousel/carousel-video.mp4"
                autoPlay
                className="object-cover w-full h-[300px] md:h-[550px] rounded-tl-4xl rounded-bl-4xl overflow-hidden"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:pr-20 md:pr-0 w-2/4 bg-[#111] rounded-tl-2xl rounded-bl-2xl">
          <div className="p-8 lg:p-16 pr-0! flex flex-col">
            <div className="mb-5">
              <h3 className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Uma plataforma poderosa para IA.
              </h3>
              <p className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Genial de dentro para fora.
              </p>
            </div>
            <div>
              <img
                src="/images/root/carousel/carousel-image-02.jpg"
                className="object-cover w-full h-[300px] md:h-[550px] rounded-tl-4xl rounded-bl-4xl overflow-hidden"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:pr-20 md:pr-0 w-2/4 bg-[#111] rounded-tl-2xl rounded-bl-2xl">
          <div className="p-8 lg:p-16 pr-0! flex flex-col">
            <div className="mb-5">
              <h3 className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                A maior duração de bateria em um MacBook.
              </h3>
              <p className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Até 24 horas. Para acompanhar sua pilha.
              </p>
            </div>
            <div>
              <img
                src="/images/root/carousel/carousel-image-03.jpg"
                className="object-cover w-full h-[300px] md:h-[550px] rounded-tl-4xl rounded-bl-4xl overflow-hidden"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:pr-20 md:pr-0 w-2/4 bg-[#111] rounded-tl-2xl rounded-bl-2xl">
          <div className="p-8 lg:p-16 pr-0! flex flex-col">
            <div className="mb-5">
              <h3 className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                macOS Tahoe. Design liquid glass impressionante.
              </h3>
              <p className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Ferramentas de produtividade intuitivas e um spotlight reinventado.
              </p>
            </div>
            <div>
              <img
                src="/images/root/carousel/carousel-image-04.jpg"
                className="object-cover w-full h-[300px] md:h-[550px] rounded-tl-4xl rounded-bl-4xl overflow-hidden"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sm:pr-20 md:pr-0 w-2/4 bg-[#111] rounded-tl-2xl rounded-bl-2xl">
          <div className="p-8 lg:p-16 pr-0! flex flex-col">
            <div className="mb-5">
              <h3 className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Atividades ao Vivo e app Telefone.
              </h3>
              <p className="carousel-title-slide-negative text-sm md:text-2xl font-semibold text-white">
                Faça contatos sem tocar no seu telefone.
              </p>
            </div>
            <div>
              <img
                src="/images/root/carousel/carousel-image-05.jpg"
                className="object-cover w-full h-[300px] md:h-[550px] rounded-tl-4xl rounded-bl-4xl overflow-hidden"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  )
}