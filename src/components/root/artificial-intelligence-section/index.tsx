"use client"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"

export const ArtificialIntelligenceSection = () => {
  useGSAP(() => {
    animateWithGsap(".ai-title-slide-negative", {
      opacity: 1,
      y: -3,
      delay: -5
    })

    animateWithGsap(".ai-card-slide-negative", {
      opacity: 1,
      y: -3,
      delay: -2
    })
  })

  return (
    <section className="px-5 md:px-16 py-10 lg:py-24 w-full bg-black">
      <div className="mx-auto md:max-w-xl lg:max-w-2xl text-center">
        <h3 className="ai-title-slide-negative text-base md:text-xl font-semibold text-white">
          Inteligência Artificial.
        </h3>
        <h4 className="ai-title-slide-negative text-2xl md:text-5xl font-semibold text-white">
          Feito e perfeito para IA.
        </h4>
        <p className="ai-title-slide-negative my-8 text-base text-white">
          O chip da Apple e todos os principais subsistemas responsáveis 
          por ele foram projetados para IA, criando uma plataforma que une 
          hardware, software e ecossistema de maneira abrangente. Assim, você 
          consegue executar tarefas pesadas de IA no aparelho sem consumir muita energia. Sempre sabendo que a segurança e a privacidade vêm de fábrica, não são opcionais.
        </p>
      </div>
      <div className="mt-5 mx-auto xl:max-w-[1240px] flex flex-col lg:flex-row gap-14 lg:gap-5">
        <div className="ai-card-slide-negative flex-1 bg-[#1d1d1f] rounded-tl-4xl rounded-tr-4xl">
          <div className="p-7 md:p-12">
            <p className="text-base text-white">
              <strong className="text-muted-foreground">Apps de IA no Mac. Nascidos para brilhar.</strong> O Mac foi otimizado para rodar 
              os apps de IA mais avançados do mundo: aplicativos de geração de imagens, 
              como DiffusionBee, de LLM, como Msty Studio e LM Studio, e de aprimoramento 
              de vídeo, como Topaz Video.
            </p>
          </div>
          <div className="flex justify-start">
            <img
              src="/images/root/artificial-intelligence/ai-image-01.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ai-card-slide-negative flex-1 bg-[#1d1d1f] rounded-tl-4xl rounded-tr-4xl">
          <div className="p-7 md:p-12">
            <p className="text-base text-white">
              <strong className="text-muted-foreground">Ferramentas de IA nos apps. O Mac faz acontecer.</strong> Modifique vozes com plugins de IA como o MicDrop para Logic Pro. E faça retoques complexos nas imagens em segundos com o Preenchimento Generativo no Adobe Photoshop.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src="/images/root/artificial-intelligence/ai-image-02.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}