"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import { Logo } from "@/components/common/logo"

export const ShowcaseSection = () => {
  const isTablet = useMediaQuery({ query: ("max-width: 1024px") })

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true
        }
      })

      timeline
        .to(".mask img", {
          transform: "scale(1.1)"
        })
        .to(".content", {
          opacity: 1,
          y: 0,
          ease: "power1.in"
        })
    }
  }, [isTablet])

  return (
    <section id="showcase-section">
      <div className="media">
        <video
          src="/videos/root/showcase/showcase-video.mp4"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
        />
        <div className="mask">
          <img
            src="/svg/mask.svg"
            alt="Máscara hipset M4"
          />
        </div>
      </div>
      <div className="content">
        <div className="px-5 md:px-10 flex flex-col">
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            Três chips.
          </h3>
          <h3 className="text-2xl md:text-5xl font-semibold text-white">
            Possibilidades infinitas.
          </h3>
        </div>
        <div className="pt-12 w-full flex flex-col-reverse xl:flex-row xl:items-center overflow-hidden">
          <div className="pr-5 xl:pr-0 flex-1">
            <img
              src="/images/root/showcase/showcase-image-01.jpg"
              alt="Chipset M5"
            />
          </div>
          <div className="px-5 md:px-10 xl:px-0 xl:pr-5 xl:w-[600px]">
            <div className="mb-4 size-20 flex justify-center items-center bg-linear-to-r from-neutral-400 from-10% to-neutral-700 rounded-xl">
              <div className="flex justify-center items-center -translate-y-[3px]">
                <Logo width="30" height="30" opacity="opacity-100" />
              </div>
              <p className="text-2xl font-bold text-white">
                M5
              </p>
            </div>
            <p className="mb-4 text-base text-white">
              Com um design elegante e ergonômico, o M5 combina desempenho e 
              estilo em um único dispositivo. Sua tela de alta resolução 
              proporciona cores vibrantes e detalhes nítidos, tornando-o ideal 
              para apresentações, edição de fotos e vídeos, além de maratonas 
              de séries. A bateria de longa duração garante produtividade e 
              entretenimento durante todo o dia, sem a necessidade de recargas 
              constantes.
            </p>
            <p className="mb-4 text-base text-white">
              Além disso, o M5 integra-se perfeitamente ao ecossistema digital, 
              permitindo sincronização rápida com outros dispositivos e acesso 
              contínuo a ferramentas baseadas em nuvem. Seus recursos avançados 
              de segurança e privacidade asseguram que dados e informações pessoais 
              permaneçam protegidos, enquanto a IA inteligente se adapta aos hábitos 
              do usuário, otimizando o desempenho e personalizando a experiência de uso.
            </p>
          </div>
        </div>
        <div className="pt-24 w-full flex flex-col xl:flex-row items-end xl:items-center overflow-hidden">
          <div className="px-5 md:px-10 xl:px-0 xl:pl-5 xl:w-[600px]">
            <div className="mb-4 size-20 flex flex-col gap-y-1 justify-center items-center bg-linear-to-r from-blue-300 from-10% to-blue-800 rounded-xl">
              <div className="flex items-center">
                <div className="flex justify-center items-center -translate-y-[3px]">
                  <Logo width="30" height="30" opacity="opacity-100" />
                </div>
                <p className="text-2xl font-bold text-white">
                  M4
                </p>
              </div>
              <p className="text-base leading-0 text-white">
                PRO
              </p>
            </div>
            <p className="mb-4 text-base text-white">
              O M4 Pro entrega ainda mais potência para cientistas, engenheiros, 
              desenvolvedores de software e profissionais de criação que trabalham 
              em projetos complexos. Com sua nova arquitetura otimizada e eficiência 
              energética aprimorada, o chip oferece desempenho excepcional em tarefas 
              que exigem alta capacidade de processamento, como simulações científicas, 
              renderização 3D, aprendizado de máquina e compilação de grandes volumes de 
              código. 
            </p>
            <p className="mb-4 text-base text-white">
              Além disso, o M4 Pro redefine o equilíbrio entre performance e mobilidade, 
              permitindo que os usuários executem fluxos de trabalho intensivos em 
              qualquer lugar, sem comprometer a velocidade ou a autonomia da bateria. 
              Essa combinação de potência, inteligência e eficiência consolida o M4 Pro 
              como uma ferramenta essencial para quem busca elevar o nível de suas 
              criações e inovações.
            </p>
          </div>
          <div className="pl-5 xl:pl-0 flex-1">
            <img
              src="/images/root/showcase/showcase-image-02.jpg"
              alt="Chipset M4 Pro"
            />
          </div>
        </div>
        <div className="pt-24 w-full flex flex-col-reverse xl:flex-row items-start xl:items-center overflow-hidden">
          <div className="pr-5 xl:pr-0 flex-1">
            <img
              src="/images/root/showcase/showcase-image-03.jpg"
              alt="Chipset M4 Max"
            />
          </div>
          <div className="px-5 md:px-10 xl:px-0 xl:pr-5 xl:w-[600px]">
            <div className="mb-4 size-20 flex flex-col gap-y-1 justify-center items-center bg-linear-to-r from-purple-400 from-10% to-purple-800 rounded-xl">
              <div className="flex items-center">
                <div className="flex justify-center items-center -translate-y-[3px]">
                  <Logo width="30" height="30" opacity="opacity-100" />
                </div>
                <p className="text-2xl font-bold text-white">
                  M4
                </p>
              </div>
              <p className="text-base leading-0 text-white">
                MAX
              </p>
            </div>
            <p className="mb-4 text-base text-white">
              Nosso chip mais avançado em um notebook profissional. O M4 Max 
              é perfeito para artistas de efeitos visuais 3D, desenvolvedores 
              de IA e compositores de trilhas sonoras. Com uma GPU de última 
              geração e largura de banda de memória ainda maior, ele oferece 
              desempenho impressionante em renderizações complexas, treinamento 
              de modelos de aprendizado profundo e mixagens de áudio em alta resolução.
            </p>
            <p className="mb-4 text-base text-white">
              Com o M4 Max, cada projeto ganha vida com mais velocidade, 
              fluidez e precisão, permitindo que os profissionais explorem 
              sua criatividade sem limitações — seja em um estúdio, no set 
              de filmagem ou em qualquer lugar onde a inspiração surgir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
