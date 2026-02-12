"use client";

import { ChevronRight } from "lucide-react";

const steps = [
  { id: 1, title: "Browse", description: "Explore our library and find the perfect component for your project." },
  { id: 2, title: "Copy", description: "Click the copy button to copy the component code to your clipboard." },
  { id: 3, title: "Paste", description: "Paste directly into your project and start using it immediately." },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">How It Works?</h2>
          <p className="text-xl text-gray-600">Getting started with DigitalMentor is simple. Just three steps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.id} className="relative bg-white border-2 border-black p-8 rounded-xl neo-shadow z-10">
              <div className="w-12 h-12 bg-neo-yellow border-2 border-black flex items-center justify-center text-xl font-bold mb-6 shadow-[3px_3px_0px_0px_#000]">
                {step.id}
              </div>
              <h3 className="text-3xl font-semibold tracking-tight mb-3">{step.title}</h3>
              <p className="text-lg text-gray-600">{step.description}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 bg-white border-2 border-black rounded-full p-1">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
