"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Properties Sold", value: "2,500+" },
    { label: "Happy Clients", value: "1,800+" },
    { label: "Experience", value: "15 Years" },
    { label: "Awards Won", value: "45" }
  ];

  const team = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Senior Partner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
          alt="Modern Office"
          fill
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 max-w-4xl px-4 text-center space-y-6">
          <Badge className="bg-blue-600 text-white border-none px-4 py-1">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Redefining Luxury <br /> <span className="text-blue-500">Real Estate</span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            We are more than just agents; we are your partners in finding the perfect backdrop for your life's best moments.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dcea464dd?auto=format&fit=crop&q=80&w=800"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 italic">Our Story</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              Founded in 2008, LuxeEstate began with a simple vision: to transform the high-end real estate market through transparency, expertise, and personalized service.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              Over the past 15 years, we have grown from a small boutique agency into one of the most respected names in luxury real estate, managing a portfolio of the most exclusive properties in the country.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Our Core Values</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              The principles that guide every interaction and transaction we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Attention to every detail, from floor plans to contracts." },
              { icon: Users, title: "Integrity", desc: "Honest advice and transparent communication at every step." },
              { icon: ShieldCheck, title: "Trust", desc: "Building long-term relationships based on mutual respect." },
              { icon: Award, title: "Excellence", desc: "Striving for the best possible outcome for our clients." },
            ].map((value, i) => (
              <Card key={i} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-8 shadow-sm hover:shadow-md transition-shadow">
                <value.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{value.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Meet the Team</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Our experts are dedicated to making your real estate dreams a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group space-y-4">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{member.name}</h3>
                <p className="text-sm text-zinc-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
