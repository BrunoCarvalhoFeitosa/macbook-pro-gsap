"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Logo } from "../logo"
import { SearchIcon } from "../icons/search"
import { CartIcon } from "../icons/cart"
import { ArrowRightIcon } from "lucide-react"

export const Header = () => {
  const baseUrl = "https://www.apple.com/br"

  return (
    <header className="sticky top-0 py-1.5 px-4 flex items-center justify-center bg-black z-50">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <Link href="/" className="flex justify-center items-center lg:mr-3">
              <Logo width="20" height="20" />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Loja
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/store`}>
                          Compras os lançamentos
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_mac`}>
                          Mac
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_ipad`}>
                          iPad
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_iphone`}>
                          iPhone
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_watch`}>
                          Apple Watch
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/airpods/acessories`}>
                          Air Pods
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_accessories`}>
                          Acessórios
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Links rápidos
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/retail`}>
                          Encontre uma loja
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/order/list`}>
                          Status do pedido
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar nas lojas especiais
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/educationrouting`}>
                          Educação
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/retail/business`}>
                          Negócios
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Mac
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar Mac
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/mac`}>
                          Explorar todos os modelos de Mac
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/macbook-air`}>
                          MacBook Air
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/macbook-pro`}>
                          MacBook Pro
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/imac`}>
                          iMac
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/mac-mini`}>
                          Mac mini
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/mac-studio`}>
                          Mac Studio
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/mac-pro`}>
                          Mac Pro
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar Mac
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_mac`}>
                          Comprar Mac
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/mac/accessories`}>
                          Acessórios para Mac
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para o Mac
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/mac?cid=gn-ols-mac-psp-prodfly">
                          Suporte para Mac
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/support/products/mac`}>
                          Produtos AppleCare
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/os/macos`}>
                          macOS Tahoe
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-intelligence`}>
                          Apple Intelligence
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apps`}>
                          Apps da Apple
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/icloud`}>
                          iCloud+
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/education`}>
                          Educação
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              iPad
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar iPad
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad`}>
                          Explorar todos os modelos de iPad
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad-air`}>
                          iPad Air
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad-pro`}>
                          iPad Pro
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad-11`}>
                          iPad
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad-mini`}>
                          iPad Mini
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-pencil`}>
                          Apple Pencil
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/ipad-keyboards`}>
                          Teclados
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar iPad
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/buy_ipad`}>
                          Comprar iPad
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/goto/ipad/accessories`}>
                          Acessórios para iPad
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para o iPad
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/ipad?cid=gn-ols-ipad-psp-prodfly">
                          Suporte para iPad
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/os/ipados`}>
                          iPadOS 26
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-intelligence`}>
                          Apple Intelligence
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apps`}>
                          Apps da Apple
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/icloud`}>
                          iCloud+
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/education`}>
                          Educação
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>
              iPhone
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar iPhone
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/iphone`}>
                          Explorar todos os modelos de iPhone
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/iphone-17-pro`}>
                          iPad 17 Pro
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/iphone-air`}>
                          iPhone Air
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/iphone-17`}>
                          iPhone 17
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/buy-iphone/iphone-16`}>
                          iPhone 16
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/iphone-16e`}>
                          iPhone 16e
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar iPhone
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/buy-iphone`}>
                          Comprar iPhone
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/iphone/accessories`}>
                          Acessórios para iPhone
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para o iPhone
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/iphone?cid=gn-ols-iphone-psp-prodfly">
                          Suporte para iPhone
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/os/ios`}>
                          iOS 26
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-intelligence`}>
                          Apple Intelligence
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apps`}>
                          Apps da Apple
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/icloud`}>
                          iCloud+
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/siri`}>
                          Siri
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>
              Watch
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar Apple Watch
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/watch`}>
                          Explorar todos os modelos de Apple Watch
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-watch-series-11`}>
                          Apple Watch Series 11
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-watch-se-3`}>
                          Apple Watch SE 3
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-watch-ultra-3`}>
                          Apple Watch Ultra 3
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-watch-nike`}>
                          Apple Watch Nike
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar Apple Watch
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/buy-watch`}>
                          Comprar Apple Watch
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/watch/accessories`}>
                          Acessórios para Apple Watch
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para o Apple Watch
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/watch?cid=gn-ols-watch-psp-prodfly">
                          Suporte para Apple Watch
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/os/watchos`}>
                          watchOS 26
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apps`}>
                          Apps da Apple
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-fitness-plus/`}>
                          Apple Fitness+
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>
              AirPods
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar AirPods
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/airpods`}>
                          Explorar todos os modelos de AirPods
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/airpods-4`}>
                          AirPods 4
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/airpods-pro`}>
                          AirPods Pro 3
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/airpods-max`}>
                          AirPods Max
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar AirPods
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/accessories/all/headphones-speakers?f=apple-overear-sport&fh=47d1%2B3214%2B45aa%2B45ab&page=1`}>
                          Comprar AirPods
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/airpods/accessories`}>
                          Acessórios para AirPods
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/browse/finance/installment`}>
                          Financiamento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para os AirPods
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/airpods?cid=gn-ols-airpods-psp-prodfly">
                          Suporte para AirPods
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/airpods-pro/hearing-health`}>
                          Saúde auditiva
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-music`}>
                          Apple Music
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-fitness-plus`}>
                          Apple Fitness+
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>
              TV e Casa
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar TV e Casa
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/tv-home`}>
                          Explorar TV e Casa
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-tv-4k`}>
                          Apple TV 4K
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar TV e Casa
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/buy-tv/apple-tv-4k`}>
                          Comprar Apple TV 4K
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/product/mw5g3bz/a/siri-remote`}>
                          Comprar Siri Remote
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/smart-home/accessories`}>
                          Acessórios para TV e Casa
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Mais para TV e Casa
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/tv">
                          Suporte para Apple TV
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/support/products/appletv`}>
                          Produtos AppleCare
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-tv-app`}>
                          App Apple TV
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-tv-plus`}>
                          Apple TV+
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/apple-music`}>
                          Apple Music
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/airplay`}>
                          AirPlay
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden lg:flex">
            <NavigationMenuTrigger>
              Entretenimento
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar Entretenimento
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/services`}>
                          Explorar Entretenimento
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-one`}>
                          Apple One
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-tv-plus`}>
                          Apple TV+
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-music`}>
                          Apple Music
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-arcade`}>
                          Apple Arcade
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/apple-fitness-plus`}>
                          Apple Fitness+
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/app-store`}>
                          Apple Store
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Suporte
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/tv?cid=gn-ols-tvplus-psp-prodfly">
                          Suporte para Apple TV+
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href="https://support.apple.com/pt-br/music?cid=gn-ols-music-psp-prodfly">
                          Suporte para Apple Music
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden lg:flex">
            <NavigationMenuTrigger>
              Acessórios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Comprar acessórios
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/accessories/all`}>
                          Ver todos os acessórios
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/mac/accessories`}>
                          Mac
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/ipad/accessories`}>
                          iPad
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/iphone/accessories`}>
                          iPhone
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/watch/accessories`}>
                          Apple Watch
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/airpods/accessories`}>
                          AirPods
                        </Link>
                      </li>
                      <li className="text-base lg:text-2xl font-bold text-white">
                        <Link href={`${baseUrl}/shop/smart-home/accessories`}>
                          TV e Casa
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="box-border">
                    <h2 className="text-sm text-[#737377]">
                      Explorar acessórios
                    </h2>
                  </div>
                  <div className="mt-3">
                    <ul className="flex flex-col gap-y-3">
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/accessories/all/made-by-apple`}>
                          Criados pela Apple
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/shop/accessories/all/beats-featured`}>
                          Beats
                        </Link>
                      </li>
                      <li className="text-sm font-normal text-white">
                        <Link href={`${baseUrl}/airtag`}>
                          AirTag
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <SearchIcon width="25" height="25" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="w-full flex flex-col">
                  <div className="w-full">
                    <form className="flex items-center -translate-x-2">
                      <label htmlFor="search" className="cursor-pointer">
                        <SearchIcon width="30" height="30" />
                      </label>
                      <input
                        type="text"
                        id="search"
                        placeholder="Buscar em apple.com"
                        autoFocus
                        className="pr-5 w-full flex-1 outline-none border-none bg-transparent placeholder:text-sm placeholder:font-thin font-light placeholder:text-white text-[#737377]"
                      />
                    </form>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-sm text-[#737377]">
                      Links rápidos
                    </h3>
                    <ul className="mt-3 flex flex-col gap-y-2">
                      <li className="w-fit">
                        <Link
                          href={`${baseUrl}/retail`}
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Encontre uma loja
                          </p>
                        </Link>
                      </li>
                      <li className="w-fit">
                        <Link
                          href={`${baseUrl}/store`}
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Comprar online na Apple Store
                          </p>
                        </Link>
                      </li>
                      <li className="w-fit">
                        <Link
                          href={`${baseUrl}/shop/accessories/all`}
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                          Acessórios
                          </p>
                        </Link>
                      </li>
                      <li className="w-fit">
                        <Link
                          href={`${baseUrl}/airpods`}
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            AirPods
                          </p>
                        </Link>
                      </li>
                      <li className="w-fit">
                        <Link
                          href={`${baseUrl}/apple-intelligence`}
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Apple Intelligence
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-0">
              <CartIcon width="25" height="25" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="py-5 px-3 lg:px-0 max-w-5xl mx-auto flex flex-col lg:flex-row lg:justify-start gap-18 lg:gap-24">
                <div className="w-full flex flex-col">
                  <div className="w-full">
                    <p className="text-3xl font-semibold">
                      Sua sacola está vazia.
                    </p>
                    <p className="text-sm">
                      <Link href="https://secure8.store.apple.com/br/shop/signIn?ssi=4AAABmmFwdwUBIFnW8WRRzJ5e9q2YgJ743qBv3Hy-E-MXGYoZgij2_w19AAAALmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9ici9tYWNib29rLXByby9zcGVjcy98fHwAAgE8jLTbXHhRhh0jFVu0O2aTjuJG7DW23WwQQDGoZizNtg" className="font-normal text-[#2997ff] underline">Inicie sessão</Link> para ver se tem intens salvos.
                    </p>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-sm text-[#737377]">
                      Meu perfil
                    </h3>
                    <ul className="mt-3 flex flex-col gap-y-2">
                      <li>
                        <Link
                          href="https://secure8.store.apple.com/br/shop/signIn/orders?ssi=4AAABmmFwgg0BIJgQYqeeHWgIBu33rey2Kd8B1vJiaiueqZ6kuxc2W3Q-AAAANWh0dHBzOi8vc2VjdXJlOC5zdG9yZS5hcHBsZS5jb20vYnIvc2hvcC9vcmRlci9saXN0fHx8AAIBmSrHJTUf_NZJS0lNhDIPKb9183vFWFNFtM3tsn6r_oo"
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Pedidos
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://secure8.store.apple.com/br/shop/signIn?ssi=4AAABmmFxNrkBIOyyhid7JcqPq8k-6mSf5FvbsTAzz4zBSaHZKQRA9ntPAAAAKmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9ici9zaG9wL3lvdXJzYXZlc3x8fAACAc3YdSLVwszhGyYBnoSuMllGsX_KHvPPKzdlkZDDECZs"
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Itens salvos
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://secure8.store.apple.com/br/shop/signIn/account?ssi=4AAABmmFyF2ABIFBou-L7MzonhFQYOLRrwv1IgPnjd7OshAsFkFRHSh3SAAAAN2h0dHBzOi8vc2VjdXJlOC5zdG9yZS5hcHBsZS5jb20vYnIvc2hvcC9hY2NvdW50L2hvbWV8fHwAAgFwlZtJTD145HGGOb-YRbn5jqDc6M2D63TmZpToziGcrw"
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                          Conta
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://secure8.store.apple.com/br/shop/signIn?ssi=4AAABmmFwdwUBIFnW8WRRzJ5e9q2YgJ743qBv3Hy-E-MXGYoZgij2_w19AAAALmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9ici9tYWNib29rLXByby9zcGVjcy98fHwAAgE8jLTbXHhRhh0jFVu0O2aTjuJG7DW23WwQQDGoZizNtg"
                          className="flex items-center gap-x-1"
                        >
                          <ArrowRightIcon className="size-3 text-[#737377]" />
                          <p className="text-sm">
                            Entrar
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
