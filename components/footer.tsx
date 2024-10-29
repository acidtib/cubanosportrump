'use client'

import Image from "next/image"
import HarrisWalz_Logo from "../public/HarrisWalz_Logo.svg"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <a href="https://kamalaharris.com/es/" target="_blank" rel="noopener noreferrer">
              <Image src={HarrisWalz_Logo} alt="Harris Walz Logo" width={190} height={109} className="mx-auto" />
            </a>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://kamalaharris.com/es/meet-kamala-harris/" target="_blank" className="hover:text-blue-300">Conoce a Kamala</a></li>
              <li><a href="https://kamalaharris.com/es/meet-governor-tim-walz/" target="_blank" className="hover:text-blue-300">Conoce a Tim</a></li>
              <li><a href="https://kamalaharris.com/es/issues/" target="_blank" className="hover:text-blue-300">Temas</a></li>
              <li><a href="https://kamalaharris.com/es/faqs/" target="_blank" className="hover:text-blue-300">Preguntas Frecuentes</a></li>
              <li><a href="https://go.kamalaharris.com/es/" target="_blank" className="hover:text-blue-300">Voluntario</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Conectar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.instagram.com/kamalaharris/" target="_blank" className="hover:text-blue-300">Instagram</a></li>
              <li><a href="https://www.twitch.tv/kamalaharris" target="_blank" className="hover:text-blue-300">Twitch</a></li>
              <li><a href="https://www.facebook.com/KamalaHarris/" target="_blank" className="hover:text-blue-300">Facebook</a></li>
              <li><a href="https://x.com/kamalaharris" target="_blank" className="hover:text-blue-300">Twitter</a></li>
              <li><a href="https://www.youtube.com/@kamalaharris" target="_blank" className="hover:text-blue-300">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Únete a Nuestra Causa</h4>
            <p className="text-sm text-blue-200">Apoya nuestra campaña presidencial para elegir a Kamala Harris inscribiéndote como <a href="https://go.kamalaharris.com/es/" target="_blank" className="underline">voluntario</a> o <a href="https://secure.actblue.com/donate/web-es" target="_blank" className="underline">haciendo una donación</a> en línea.</p>
            <p className="mt-2 text-sm text-blue-200">Para contribuir por correo, por favor <a href="https://kamalaharris.com/es/donate-by-mail/" target="_blank" className="underline">haz clic aquí</a>.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-8 text-center">
          <p className="text-sm text-blue-300">Este sitio web fue creado por un cubano encabronado. <br /><a href="https://github.com/acidtib/cubanosportrump" className="underline">Ver el código fuente en GitHub</a>.</p>
        </div>
      </div>
    </footer>
  );
}