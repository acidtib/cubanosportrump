'use client'

import { Button } from "@/components/ui/button"
import { Menu, X} from "lucide-react"
import { useState } from "react"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="https://cubanosportrump.com" className="flex items-center text-2xl font-bold text-blue-700">
          Harris Walz
        </a>
        <nav className="hidden space-x-6 md:block">
          <a href="https://kamalaharris.com/es/" target="_blank" className="text-sm font-medium hover:text-blue-700">
            Visión
          </a>
          <a href="https://kamalaharris.com/es/issues/" target="_blank" className="text-sm font-medium hover:text-blue-700">
            Problemas
          </a>
          <a href="https://kamalaharris.com/es/agenda/" target="_blank" className="text-sm font-medium hover:text-blue-700">
            Agenda
          </a>
          <a href="https://iwillvote.com/?lang=es" target="_blank" className="text-sm font-medium hover:text-blue-700">
            Vamos a Votar
          </a>
        </nav>
        <a href="https://secure.actblue.com/donate/web-es" target="_blank">
          <Button className="hidden bg-red-600 text-white hover:bg-red-700 md:inline-flex">
            Contribuye
          </Button>
        </a>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="container mx-auto space-y-4 px-4 pb-4 md:hidden">
          <a href="https://kamalaharris.com/es/" target="_blank" className="block text-sm font-medium hover:text-blue-700">
            Visión
          </a>
          <a href="https://kamalaharris.com/es/issues/" target="_blank" className="block text-sm font-medium hover:text-blue-700">
            Problemas
          </a>
          <a href="https://kamalaharris.com/es/agenda/" target="_blank" className="block text-sm font-medium hover:text-blue-700">
            Agenda
          </a>
          <a href="https://iwillvote.com/?lang=es" target="_blank" className="block text-sm font-medium hover:text-blue-700">
            Vamos a Votar
          </a>
          <a href="https://secure.actblue.com/donate/web-es" target="_blank">
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
              Contribuye
            </Button>
          </a>
        </nav>
      )}
    </header>
  )
}