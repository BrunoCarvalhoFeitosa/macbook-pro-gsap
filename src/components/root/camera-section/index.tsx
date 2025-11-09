"use client"
import { useRef } from "react"
import { useVideoVisibility } from "@/hooks/useVideoVisibility"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const CameraSection = () => {
  const videoCameraRef = useRef<HTMLVideoElement | null>(null)

  useVideoVisibility(videoCameraRef)

  useGSAP(() => {
    animateWithGsap(".camera-text-slide-negative", {
      opacity: 1,
      y: -20,
      delay: 0
    })
  })

  return (
    <section className="px-5 md:px-10 pt-10 pb-10 md:pb-20 w-full bg-black">
      <div className="mx-auto max-w-xl md:max-w-2xl">
        <div className="mb-7 text-center">
          <h3 className="camera-text-slide-negative text-base md:text-xl font-semibold text-white">
            Câmera.
          </h3>
          <h4 className="camera-text-slide-negative text-2xl md:text-5xl font-semibold text-white">
            Focada no que importa.
          </h4>
        </div>
        <div className="text-center">
          <p className="camera-text-slide-negative text-base text-white">
            A câmera 12MP Center Stage deixa sua imagem nítida em qualquer iluminação. Junto com os microfones e alto-falantes avançados, você vai virar o foco das atenções.
          </p>
        </div>
      </div>
      <div className="mt-24 mx-auto max-w-xl md:max-w-4xl">
        <Tabs defaultValue="account" className="flex flex-col items-center">
          <TabsList className="camera-text-slide-negative gap-x-0">
            <TabsTrigger value="account" className="px-5 bg-transparent border-b border-b-zinc-700 rounded-none">
              Palco central
            </TabsTrigger>
            <TabsTrigger value="password" className="px-5 bg-transparent border-b border-b-zinc-700 rounded-none">
              Visualização da mesa
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="m-0 camera-text-slide-negative">
            <div className="py-10 mx-auto md:w-2/4">
              <p className="text-base text-center text-white">
                O Palco Central mantém você no centro da tela durante chamadas de vídeo, mesmo que você se movimente ou outras pessoas entrem no enquadramento.
              </p>
            </div>
            <div className="rounded-tl-4xl rounded-bl-4xl overflow-hidden">
              <video
                ref={videoCameraRef}
                src="/videos/root/camera/camera-video.mp4"
                autoPlay
                className="object-cover w-full"
                controls={false}
              />
            </div>
          </TabsContent>
          <TabsContent value="password" className="camera-text-slide-negative">
            <div className="py-10 mx-auto md:w-2/4">
              <p className="text-base text-center text-white">
                Mostre seu espaço de trabalho para suas chamadas de vídeo ganharem uma nova dimensão e relevância.
              </p>
            </div>
            <div className="rounded-tl-4xl rounded-bl-4xl overflow-hidden">
              <img
                src="/images/root/camera/camera-image.jpg"
                alt="Visualização de mesa em chamadas de vídeo"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}