"use client";

import { Target, HeartHandshake, Users, Rocket } from "lucide-react";

const reasons = [
    {
        icon: Target,
        title: "Pédagogie pratique",
        description: "Apprendre en faisant, pas seulement en écoutant. Des projets concrets pour maîtriser rapidement."
    },
    {
        icon: HeartHandshake,
        title: "Mentoring personnalisé",
        description: "Un accompagnement humain et motivant avec des experts qui croient en votre potentiel."
    },
    {
        icon: Users,
        title: "Communauté active",
        description: "Avancer ensemble et ne jamais rester seul. Une communauté soudée pour votre réussite."
    },
    {
        icon: Rocket,
        title: "Opportunités business",
        description: "Transformer les compétences en revenus. Accès à des opportunités concrètes de monétisation."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#FFFDF5] border-t-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-black uppercase text-center mb-16 tracking-tighter">
                    Pourquoi choisir Digital Mentor ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white border-2 border-black p-6 rounded-xl hover:translate-y-[-4px] transition-all duration-300"
                            style={{ boxShadow: '4px 4px 0px 0px #000' }}
                        >
                            <div className="bg-neo-yellow w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center mb-4">
                                <reason.icon className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-3">{reason.title}</h3>
                            <p className="text-gray-700 font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
