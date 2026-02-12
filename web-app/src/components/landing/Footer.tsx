"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Dribbble, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const socialIcons = [Twitter, Github, Dribbble, Instagram, Youtube];

  if (!mounted) {
    return <footer className="bg-white border-t-2 border-black pt-16 pb-8 min-h-[300px]" />;
  }

  return (
    <footer className="bg-white border-t-2 border-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/digitalmentor.png" 
                  alt="DigitalMentor Logo" 
                  width={40}
                  height={40}
                  className="w-full h-full object-contain" 
                />
              </div>
              <span 
                className="text-2xl font-bold tracking-tight text-black"
                style={{ textShadow: '2px 2px 0px #FFDE00' }}
              >
                DigitalMentor
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6 font-medium">
              Components and templates designed to help you stand out.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-black border-2 border-black rounded flex items-center justify-center transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  style={{ boxShadow: '3px 3px 0px 0px #FFDE00' }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-between w-full md:w-auto gap-8 sm:gap-16 md:gap-24 lg:gap-32">
            <div className="min-w-max">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-tighter">Quick Links</h4>
              <ul className="space-y-3 text-lg text-gray-600 font-medium">
                <li><Link href="/" className="hover:text-black hover:underline">Accueil</Link></li>
                <li><Link href="/blog" className="hover:text-black hover:underline">Blog</Link></li>
                <li><Link href="/entreprises" className="hover:text-black hover:underline">Entreprises & IA</Link></li>
                <li><Link href="#" className="hover:text-black hover:underline">Formations</Link></li>
              </ul>
            </div>

            <div className="min-w-max">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-tighter">Support</h4>
              <ul className="space-y-3 text-lg text-gray-600 font-medium">
                <li><a href="#" className="hover:text-black hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Discord Community</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Contact Us</a></li>
              </ul>
            </div>

            <div className="min-w-max">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-tighter">Legal</h4>
              <ul className="space-y-3 text-lg text-gray-600 font-medium">
                <li><a href="#" className="hover:text-black hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black hover:underline">License</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium">© 2026 DigitalMentor. Tous droits réservés.</p>
          <p className="text-gray-500 font-medium">Propulsé par <a href="#" className="text-black font-bold underline">DigitalMentor Team</a></p>
        </div>
      </div>
    </footer>
  );
}
