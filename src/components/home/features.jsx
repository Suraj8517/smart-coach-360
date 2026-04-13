import React from 'react'
import { IMAGES } from '../../images';
import {ClipboardList,Salad,MessageSquare,Bolt,CreditCard,BarChart,Users,Smartphone,ShieldCheck,Dumbbell,Building2 } from "lucide-react";

const features =[
  { num:'001', icon:<ClipboardList />, img: IMAGES.coaching , title:'Program Management', desc:'Build your master library once. Assign fully customised plans to individual clients in seconds. Clients get workouts on the app ,  no PDFs, no confusion.', tags:['Master Programs','Video Library','Auto Notifications','Custom Exercises'] },
  { num:'002', icon:<Salad />,img: IMAGES.nutri , title:'Nutrition & Activity', desc:'Create personalised meal plans, set macro targets, track daily compliance. Includes a dedicated female health and hormonal cycle tracker.', tags:['Meal Tracking','Macro Goals','Compliance Monitor','Female Health'] },
  { num:'003', icon:<Bolt />,img: IMAGES.workflow , title:'Business Automation', desc:'Lead allocation, client onboarding, payment flows, and communication sequences , completely automated and running in the background.', tags:['Lead Allocation','Auto Onboarding','Payment Flows','Message Sequences'] },
  { num:'004', icon:<MessageSquare />,img: IMAGES.engage , title:'Client Engagement', desc:'Automated check-ins, in-app messaging, video calls, group challenges, and digital high-fives. Keep every client engaged between sessions.', tags:['In-App Messaging','Video Calls','Group Challenges','Auto Check-ins'] },
  { num:'005', icon:<CreditCard />,img: IMAGES.payments , title:'Payments & Revenue', desc:'No more chasing. Accept online payments, set up recurring session packs, configure discounts, and handle partial payments, all built in.', tags:['Online Payments','Session Packs','Discount Codes','Instalments'] },
  { num:'006', icon:<BarChart />,img: IMAGES.dashboards , title:'Dashboards & Reports', desc:'Real-time view of client compliance, progress, and business health. Custom surveys, pre-assessment forms, performance dashboards.', tags:['Live Reports','Business Insights','Custom Surveys','Health Intake'] },
  { num:'007', icon:<Users />,img: IMAGES.teamcrm , title:'Team & Organisation Management', desc:'Whether you are a solo coach or managing a multi-branch fitness organisation, scale effortlessly. Control teams, assign roles, and oversee operations from one central dashboard.', tags:['Team & Branch Management','Role-Based Access','Coach Allocation Limits','Bulk Upload Tools'] },
  { num:'008', icon:<Smartphone />,img: IMAGES.app , title:'Mobile App iOS & Android', desc:'Run your entire coaching business from your pocket. Coaches and clients get a seamless mobile experience with real-time updates and integrated health tracking.', tags:['iOS & Android Apps','Client Self-Service','Push Notifications','Health Data Sync'] },
  { num:'009', icon:<ShieldCheck />,img: IMAGES.security , title:'Security & Compliance', desc:'Enterprise-grade security built into every plan. Protect sensitive client data with advanced authentication, secure payments, and compliance tools.', tags:['SSO Support','Access Control','PCI-DSS Payments','GDPR Tools'] },
]
import {  SectionHeader } from "../UI";

export default function Features() {
  return (
    <section className="py-24 bg-brand-lilac">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader tag="Platform Features" title="Everything You Need to Coach, Grow & Automate" subtitle="SmartCoach360 is built specifically for fitness coaching designed around how coaches run sessions, track progress, and manage client communication day to day." />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="card group overflow-hidden">
                    <div className="relative h-44 overflow-hidden bg-white">
                      <img src={f.img} alt={f.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(46,26,50,0.75) 0%, rgba(71,41,76,0.1) 60%, transparent 100%)" }} />
                      <div className="absolute bottom-4 left-4"><span className="text-2xl " style={{color:'var(--bossanova-mid)'}}>{f.icon}</span></div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-brand-black mb-2">{f.title}</h3>
                      <p className="text-brand-fedora text-sm leading-relaxed">{f.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mt-6">
              {f.tags.map((t) => (
                <span key={t} className=" text-[9px] md:text-[8px] tracking-[0.1em] uppercase px-3 py-1 border transition-colors duration-200 rounded-xl" style={{ color: 'var(--silver-xlight)', borderColor: 'var(--silver-xlight)', background: 'var(--bossanova-mid)' }}>
                  {t}
                </span>
              ))}
            </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}
