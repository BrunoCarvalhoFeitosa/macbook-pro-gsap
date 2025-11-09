"use client"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"

export const BatterySection = () => {
  useGSAP(() => {
    animateWithGsap(".battery-title-slide-negative", {
      opacity: 1,
      y: -20,
      delay: 0
    })

    animateWithGsap(".battery-image-slide-negative", {
      opacity: 1,
      y: 10,
      delay: 0
    })
  })

  return (
    <section className="px-5 md:px-10 py-10 w-full bg-black">
      <div className="mx-auto max-w-xl md:max-w-2xl text-center">
        <h3 className="battery-title-slide-negative text-2xl md:text-5xl font-semibold text-white">
          Bateria para o dia todo.
        </h3>
        <h4 className="battery-title-slide-negative text-2xl md:text-5xl font-semibold text-white">
          Nenhum fio segura você.
        </h4>
      </div>
      <div className="battery-image-slide-negative my-14 mx-auto md:max-w-xl lg:max-w-2xl flex justify-center">
        <img
          src="/images/root/battery/battery-image.jpg"
          alt="Imagem do MacBook Pro acompanhada de um carregador thunderbold"
        />
      </div>
      <div className="mx-auto md:max-w-xl lg:max-w-2xl">
        <div className="mb-16">
          <p className="battery-title-slide-negative text-base text-center text-white">
            <strong className="text-muted-foreground">O MacBook Pro tem a maior duração de bateria em um Mac</strong> — até 24 horas — e recarga rápida de até 50% em 30 minutos. Todos os modelos mantêm o alto rendimento ligados na tomada ou não. Passe mais tempo pensando em grandes soluções do que na bateria.
          </p>
        </div>
        <div className="flex gap-5 md:gap-12">
          <div className="battery-title-slide-negative py-5 flex-1 border-t border-white">
            <p className="text-base md:text-xl text-white">
              Até
            </p>
            <p className="text-2xl md:text-4xl font-semibold text-white">
              24h
            </p>
            <p className="text-base md:text-xl text-white">
              de bateria
            </p>
          </div>
          <div className="battery-title-slide-negative py-5 md:flex-1 border-t border-white">
            <p className="text-base md:text-xl text-white">
              Até
            </p>
            <p className="text-2xl md:text-4xl font-semibold text-white">
              14h a mais
            </p>
            <p className="text-base md:text-xl text-white">
              que o MacBook Pro com Intel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}