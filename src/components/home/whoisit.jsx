import React from 'react'
import { SectionHeader } from "../UI";
import { Link } from 'react-router-dom';
import {Trophy,Salad,Dumbbell,Building2 } from "lucide-react";
import { HashLink } from 'react-router-hash-link';

export default function WhoIsIt({DARK_BG,IMAGES}) {
    const audiences = [
      {
        icon: <Dumbbell />,
        title: "Personal Trainers",
        desc: "More clients, less admin. Everything in one place.",
        img: IMAGES.ptMale,
        id: "personaltrainer",
      },
      {
        icon: <Building2 />,
        title: "Gym Owners & Studios",
        desc: "One platform across your whole location and team.",
        img: IMAGES.gym,
        id: "gymowner",
      },
      {
        icon: <Salad />,
        title: "Nutrition Coaches",
        desc: "Personalised plans at scale with real accountability.",
        img: IMAGES.nutritionist,
        id: "nutritionist",
      },
      {
        icon: <Trophy />,
        title: "Large Organisations",
        desc: "Enterprise tools for multi-branch, multi-coach teams.",
        img: IMAGES.largeorg,
        id: "largeorganisation",
      },
    ];
  return (
    <div>
         {/* WHO IT'S FOR */}
              <section className="py-24" style={DARK_BG}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <SectionHeader tag="Who It's For" title={"Built for Every Type of\nFitness Professional"} subtitle="SmartCoach360 adapts to the way you work—from solo trainers to large organisations." light />
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {audiences.map((a, i) => (
                        <HashLink to={`/solutions#${a.id}`} key={i}>
                         <button key={i}  className="group relative rounded-3xl overflow-hidden text-left hover:scale-[1.02] transition-all duration-300 shadow-xl">
                        <div className="relative aspect-[3/4]">
                          <img src={a.img} loading="lazy" alt={a.title} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,15,31,0.92) 0%, rgba(46,26,50,0.3) 60%, transparent 100%)" }} />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <span className="text-2xl mb-2 block">{a.emoji}</span>
                          <h3 className="font-display text-lg text-brand-lilac mb-1">{a.title}</h3>
                          <p className="text-brand-silver text-xs leading-relaxed">{a.desc}</p>
                          <div className="mt-3 flex items-center gap-1 text-brand-lilac-300 text-xs font-semibold group-hover:gap-2 transition-all">
                            Learn more <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                          </div>
                        </div>
                      </button>
                        </HashLink>
                     
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}
