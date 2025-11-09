"use client"
import Link from "next/link"
import { Logo } from "../logo"
import { ChevronRightIcon } from "lucide-react"

export const Footer = () => {
  const baseUrl = "https://www.apple.com/br"

  return (
    <footer className="px-5 md:px-10 pt-24 pb-10 bg-[#070707]">
      <div className="flex items-center gap-x-1">
        <Link href="/">
          <Logo width="20" height="20" />
        </Link>
        <ChevronRightIcon className="size-4 text-white" />
        <Link href={`${baseUrl}/mac`} className="text-sm text-white">
          Mac
        </Link>
        <ChevronRightIcon className="size-4 text-white" />
        <span className="text-sm text-white">
          MacBook Pro
        </span>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-14 md:gap-28">
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
                <Link href={`${baseUrl}/shop/buy-mac`}>
                  Comprar Mac
                </Link>
              </li>
              <li className="text-sm font-normal text-white">
                <Link href={`${baseUrl}/shop/mac/accessories`}>
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
                <Link href={`${baseUrl}/support/products/mac/`}>
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
    </footer>
  )
}
