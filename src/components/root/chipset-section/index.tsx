"use client"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"

export const ChipsetSection = () => {
  useGSAP(() => {
    animateWithGsap(".chipset-slide-negative", {
      opacity: 1,
      y: -5,
      delay: 0
    })
  })

  return (
    <section className="px-5 md:px-10 pt-24 pb-10 w-full bg-[#070707]">
      <div className="mx-auto md:max-w-xl lg:max-w-2xl">
        <div className="chipset-slide-negative text-center">
          <h3 className="text-xl font-semibold text-white">
            Desempenho
          </h3>
          <h4 className="text-2xl md:text-5xl font-semibold text-white">
            Muito mais rápido.
          </h4>
        </div>
        <div className="my-8 flex flex-col items-center gap-6">
          <p className="chipset-slide-negative text-base text-center text-white">
            O chip M5 se une ao M4 Pro e ao M4 Max. Cada chip oferece um desempenho 
            fenomenal de CPU, em uma ou várias threads, e memória unificada mais rápida. 
            <strong className="text-muted-foreground"> Uma velocidade que você nunca pensou que era possível.</strong> E, com os poderosos 
            Neural Accelerators no chip M5, você passeia por tarefas de IA com uma rapidez alucinante.
          </p>
        </div>
      </div>
    </section>
  )
}