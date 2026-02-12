"use client";

import { Zap, Twitter, Github, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-neo-yellow">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-2xl font-bold tracking-tight">RetroUI</span>
            </div>
            <p className="text-lg text-gray-600 mb-6">Components and templates designed to help you stand out.</p>
            <div className="flex gap-3">
              {[Twitter, Github, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border-2 border-black rounded flex items-center justify-center hover:bg-neo-yellow transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-lg text-gray-600">
              {["UI Blocks", "Templates", "Roadmap", "Affiliate"].map(l => <li key={l}><a href="#" className="hover:text-black hover:underline">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-lg text-gray-600">
              {["Documentation", "Help Center", "Discord Community", "Contact Us"].map(l => <li key={l}><a href="#" className="hover:text-black hover:underline">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-lg text-gray-600">
              {["Terms of Service", "Privacy Policy", "License"].map(l => <li key={l}><a href="#" className="hover:text-black hover:underline">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium">© 2024 RetroUI. Made with <span className="text-red-500">♥</span> for designers.</p>
          <p className="text-gray-500 font-medium">A project by <a href="#" className="text-black font-bold underline">@retro_labs</a></p>
        </div>
      </div>
    </footer>
  );
}
