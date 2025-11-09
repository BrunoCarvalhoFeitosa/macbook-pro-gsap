"use client"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { CartIcon } from "@/components/common/icons/cart"

export const HeroSection = () => {
  return (
    <section className="relative px-5 xl:px-10 py-14 lg:py-10 xl:h-[calc(100dvh-45px)] w-full flex flex-col justify-between bg-black">
      <div className="xl:absolute xl:top-12 xl:left-2/4 xl:-translate-x-2/4 max-w-3xl mx-auto">
        <img
          src="/images/root/hero/hero-image.jpg"
          alt="MacBook Pro"
          className="w-screen h-60 md:h-[70vh] lg:h-[48vh] xl:h-[75vh] object-cover"
        />
      </div>
      <div className="relative xl:h-screen flex flex-col justify-end z-1">
        <h1 className="text-base md:text-2xl font-semibold text-white">
          MacBook Pro
        </h1>
        <p className="text-[20px] md:text-4xl xl:text-5xl font-bold bg-linear-to-r from-[#e4f6f0] from-10% via-[#9dcfca] via-30% to-[#064d83] to-90% bg-clip-text text-transparent">
          Modelo de 14 polegadas.
        </p>
        <p className="text-[20px] md:text-4xl xl:text-5xl font-bold bg-linear-to-r from-[#e4f6f0] from-10% via-[#9dcfca] via-30% to-[#064d83] to-90% bg-clip-text text-transparent">
          Agora com a potência do chip M5.
        </p>
        <div className="mt-4">
          <p className="text-base text-white">
            Confira em breve a disponilibilidade
          </p>
          <p className="text-base text-white">
            A partir de R$ 1.666,58/mês ou R$ 19.999**
          </p>
        </div>
        <div className="mt-3">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="py-4 px-12 md:px-16 flex justify-start items-center space-x-0 dark:bg-black bg-black hover:bg-blue-600 transition delay-[1.7s] duration-300 text-white dark:text-white cursor-pointer"
          >
            <CartIcon width="32" height="32" />
            <span className="text-base md:text-xl">
              Comprar MacBook Pro
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  )
}
