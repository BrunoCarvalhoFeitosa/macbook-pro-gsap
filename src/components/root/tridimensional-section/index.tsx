"use client"
import { cn } from "@/lib/utils"
import { useMacbookStore } from "@/store"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "@/utils/animation"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { StudioLight } from "../../three/studio-light"
import { ModelSwitcher } from "@/components/three/model-switcher/model-switcher"
import { Hint } from "@/components/common/hint"
import { CheckIcon } from "lucide-react"

export const TridimensionalSection = () => {
  const { color, scale, setColor, setScale } = useMacbookStore()
  const isMobile = useMediaQuery({ query: '(max-width: "1024px"' })

  useGSAP(() => {
    animateWithGsap(".tridimensional-title-slide-negative", {
      opacity: 1,
      y: -20,
      delay: 0
    })
  })

  return (
    <section className="px-5 md:px-10 pt-10 pb-20 w-full bg-[#111] overflow-hidden">
      <div className="translate-y-[70px]">
        <h2 className="tridimensional-title-slide-negative text-3xl md:text-5xl font-semibold text-white">
          Design minimalista.
        </h2>
      </div>
      <div className="flex justify-center items-center w-full h-[55dvh] md:h-[85dvh] xl:h-dvh relative top-[130px]">
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <StudioLight />
          <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="relative -top-8 md:-top-12 z-40">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center text-white">
            <h3 className="text-2xl md:text-[28px] font-bold">
              MacBook Pro
            </h3>
            <p>
              Disponível e em estoque
            </p>
          </div>
        </div>
        <div className="relative mt-7 flex justify-center items-center gap-5 z-10">
          <div className="flex justify-center gap-5">
            <div className="p-3 flex items-center gap-2.5 bg-[#444] rounded-4xl">
              <Hint
                label="Prata"
                align="center"
                side="top"
              >
                <button
                  type="button"
                  className="flex justify-center items-center size-6 bg-neutral-300 rounded-full cursor-pointer"
                  onClick={() => setColor("#adb5bd")}
                >
                  {color === "#adb5bd" && (
                    <CheckIcon className="size-5 text-black" />
                  )}
                </button>
              </Hint>
              <Hint
                label="Preto espacial"
                align="center"
                side="top"
              >
                <button
                  type="button"
                  className="flex justify-center items-center size-6 bg-neutral-900 rounded-full cursor-pointer"
                  onClick={() => setColor("#2e2c2e")}
                >
                  {color === "#2e2c2e" && (
                    <CheckIcon className="size-5 text-white" />
                  )}
                </button>
              </Hint>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="p-3 flex items-center gap-2 bg-[#444] rounded-4xl">
              <Hint
                label="14 polegadas"
                align="center"
                side="top"
              >
                <button
                  className={cn(
                    "flex justify-center items-center size-6 text-xs font-bold bg-white rounded-full cursor-pointer",
                    scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white"
                  )}
                  onClick={() => setScale(0.06)}
                >
                  14&apos;
                </button>
              </Hint>
              <Hint
                label="16 polegadas"
                align="center"
                side="top"
              >
                <button
                  className={cn(
                    "flex justify-center items-center size-6 text-xs font-bold rounded-full cursor-pointer",
                    scale === 0.085 ? "bg-white text-black" : "bg-transparent text-white"
                  )}
                  onClick={() => setScale(0.085)}
                >
                  16&apos;
                </button>
              </Hint>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}