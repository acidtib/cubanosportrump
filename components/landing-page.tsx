'use client'

import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import { Header } from "./header"
import { Footer } from "./footer"

export function LandingPageComponent() {

  const impactfulMessages = [
    {
      title: "¡Por la libertad que luchamos! ¡No a Trump!",
      content: "Un paso atrás para nuestra libertad, un salto hacia la división. Juntos, forjemos un camino hacia la justicia y la igualdad."
    },
    {
      title: "¡Libertad sí, Trump no!",
      content: "Por un futuro mejor para nuestra nación, donde todos sean escuchados y respetados."
    },
    {
      title: "¡No a la intolerancia!",
      content: "¡Sí a la inclusión y la diversidad! Un futuro donde cada voz cuente, sin divisiones ni muros."
    },
    {
      title: "¡Unidos por la esperanza!",
      content: "Construyamos un mañana lleno de oportunidades para todos, donde la solidaridad sea nuestra guía."
    },
    {
      title: "¡Por la soberanía que defendemos!",
      content: "Levantemos nuestras voces contra la opresión y trabajemos por un país que abrace su diversidad."
    }
  ];

  const [message, setMessage] = useState({ title: '', content: '' });

  useEffect(() => {
    const randomMessage = impactfulMessages[Math.floor(Math.random() * impactfulMessages.length)];
    setMessage(randomMessage);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">

      <Header />

      <main>
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16 text-center md:py-32">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-900 md:text-6xl">
              {message.title}
            </h1>
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              {message.content}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <a href="https://iwillvote.com/?lang=es" target="_blank">
                <Button size="lg" className="w-full bg-red-600 text-white hover:bg-red-700 md:w-auto">
                  Únete al Movimiento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://kamalaharris.com/es/" target="_blank">
                <Button size="lg" variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 md:w-auto">
                  Aprende Más
                </Button>
              </a>
            </div>
          </div>
        </section>

        <hr className="border-gray-200 my-8 md:my-12" />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-900 md:text-4xl">Nuestra Visión para América</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Crecimiento Económico Inclusivo",
                  description: "Empoderando comunidades a través de la creación de empleos, el apoyo a pequeñas empresas y el acceso equitativo a oportunidades económicas."
                },
                {
                  title: "Atención Médica Accesible para Todos",
                  description: "Implementando reformas integrales de salud para garantizar atención médica de calidad y asequible para cada estadounidense, priorizando la salud mental y el bienestar."
                },
                {
                  title: "La Educación como Pilar Fundamental",
                  description: "Invirtiendo en educación de calidad desde la primera infancia hasta la educación superior, asegurando que cada niño tenga acceso a los recursos que necesita para tener éxito."
                },
                {
                  title: "Justicia Ambiental",
                  description: "Promoviendo prácticas sostenibles que protejan nuestro planeta mientras garantizamos que las comunidades marginadas tengan voz en las políticas ambientales."
                },
                {
                  title: "Seguridad y Justicia Comunitaria",
                  description: "Reformando el sistema de justicia para asegurar la equidad, eliminar el sesgo racial e invertir en programas comunitarios que fomenten la seguridad y el apoyo."
                },
                {
                  title: "Empoderamiento para Todos",
                  description: "Creando caminos para que las personas prosperen a través del apoyo a la salud mental, la recuperación de adicciones y servicios sociales que aborden las causas raíz de la desigualdad."
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
                >
                  <h3 className="mb-2 text-xl font-semibold text-blue-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="bg-blue-700 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Únete al Movimiento</h2>
            <p className="mb-2 text-xl">
              Juntos, podemos crear un futuro que refleje nuestros valores y aspiraciones.
            </p>
            <p className="mb-8 text-xl">
              Tu voz importa—¡vamos a amplificarla!
            </p>
            <a href="https://go.kamalaharris.com/es/" target="_blank" rel="noopener noreferrer" className="block">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                Involúcrate Hoy
              </Button>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}