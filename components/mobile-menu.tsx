'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 64; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-end pr-4 pt-8 space-y-8 text-2xl">
              <a href="#challenge" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#challenge');
              }} className="hover:text-[#1E90FF]">Challenge</a>
              <a href="#solution" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#solution');
              }} className="hover:text-[#1E90FF]">Solution</a>
              <a href="#team" onClick={(e) => {
                e.preventDefault();
                scrollToSection('#team');
              }} className="hover:text-[#1E90FF]">Team</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

