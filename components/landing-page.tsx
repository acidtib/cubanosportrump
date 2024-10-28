'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Menu, X, Star } from "lucide-react"
import { useState } from "react"

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center text-2xl font-bold text-blue-700">
            <Star className="mr-2 h-6 w-6 fill-current text-red-600" />
            <span>Smith for America</span>
          </a>
          <nav className="hidden space-x-6 md:block">
            <a href="#" className="text-sm font-medium hover:text-blue-700">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700">
              Vision
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700">
              Issues
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-700">
              Get Involved
            </a>
          </nav>
          <Button className="hidden bg-red-600 text-white hover:bg-red-700 md:inline-flex">
            Donate Now
          </Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="container mx-auto space-y-4 px-4 pb-4 md:hidden">
            <a href="#" className="block text-sm font-medium hover:text-blue-700">
              Home
            </a>
            <a href="#" className="block text-sm font-medium hover:text-blue-700">
              Vision
            </a>
            <a href="#" className="block text-sm font-medium hover:text-blue-700">
              Issues
            </a>
            <a href="#" className="block text-sm font-medium hover:text-blue-700">
              Get Involved
            </a>
            <Button className="w-full bg-red-600 text-white hover:bg-red-700">
              Donate Now
            </Button>
          </nav>
        )}
      </header>
      <main>
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 py-16 text-center md:py-32">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-900 md:text-6xl">
              A Brighter Future for <span className="text-red-600">America</span>
            </h1>
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              Join us in building a stronger, more united nation for all Americans.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Button size="lg" className="w-full bg-red-600 text-white hover:bg-red-700 md:w-auto">
                Join the Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 md:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <hr className="border-gray-200 my-8 md:my-12" />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-900 md:text-4xl">Our Vision for America</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Economic Growth", description: "Policies that create jobs and boost our economy for all Americans." },
                { title: "Healthcare Reform", description: "Ensuring quality, affordable healthcare for every citizen." },
                { title: "Education Excellence", description: "Investing in our future through world-class education." },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
                >
                  <CheckCircle className="mb-4 h-12 w-12 text-red-600" />
                  <h3 className="mb-2 text-xl font-semibold text-blue-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-blue-700 py-16 text-white md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Stand With Us</h2>
            <p className="mb-8 text-xl">Your support can make a difference. Join our campaign today!</p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Volunteer Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 text-white">
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Smith for America</h3>
        <p className="text-sm text-blue-200">Together, we can build a brighter future for our nation.</p>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-300">Home</a></li>
          <li><a href="#" className="hover:text-blue-300">About</a></li>
          <li><a href="#" className="hover:text-blue-300">Issues</a></li>
          <li><a href="#" className="hover:text-blue-300">Get Involved</a></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase">Connect</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-blue-300">Facebook</a></li>
          <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
          <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
          <li><a href="#" className="hover:text-blue-300">YouTube</a></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase">Contact</h4>
        <p className="text-sm text-blue-200">123 Freedom Street<br />Washington, D.C. 20001</p>
        <p className="mt-2 text-sm text-blue-200">info@smithforamerica.com</p>
      </div>
    </div>
    <div className="mt-8 border-t border-blue-800 pt-8 text-center">
      <p className="text-sm text-blue-300">© 2024 Smith for America. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}