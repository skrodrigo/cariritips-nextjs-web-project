'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navegacao() {
  return (
    <nav className="w-full border-b border-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center gap-8">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-10 h-10 md:w-12 md:h-12"
                quality={100}
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium text-gray-700">
                Grupos
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-700">
                Sobre
              </Link>
            </div>
          </div>
          <div className="md:flex hidden">
            <Link href="https://wa.me/5588992564950">
              <Button className="bg-green text-white">Contate-nos</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-transparent" size="icon">
                  <Menu className="h-7 w-7 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/grupos"
                    className="text-sm font-medium text-gray-700"
                  >
                    Grupos
                  </Link>
                  <Link
                    href="/sobre"
                    className="text-sm font-medium text-gray-700"
                  >
                    Sobre
                  </Link>
                  <Link href="https://wa.me/5588992564950">
                    <Button className="bg-green text-white w-full">
                      Contate-nos
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
