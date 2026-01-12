"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Bed, Bath, Square, Star, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Sunset Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      tag: "Featured"
    },
    {
      id: 2,
      title: "Urban Luxury Loft",
      location: "Downtown, NYC",
      price: "$1,850,000",
      beds: 2,
      baths: 2,
      sqft: "1,500",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      tag: "New"
    },
    {
      id: 3,
      title: "Coastal Breeze Mansion",
      location: "Malibu, CA",
      price: "$5,900,000",
      beds: 6,
      baths: 5,
      sqft: "5,800",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      tag: "Luxury"
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Home"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="relative z-10 max-w-4xl px-4 text-center space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
            Find Your <span className="text-blue-500">Dream</span> Home
          </h1>
          <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
            Discover the most exclusive properties in the finest locations. Your journey to a new lifestyle starts here.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 max-w-2xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <Input 
                placeholder="Search by location, property type..." 
                className="bg-white/90 border-none h-12 pl-10 text-zinc-900 rounded-xl focus-visible:ring-blue-500"
              />
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl px-8">
              Search Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-2 border-none">Our Selection</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Featured Properties</h2>
          </div>
          <Link href="/listings" className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <Card key={prop.id} className="group overflow-hidden border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white border-none">
                  {prop.tag}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{prop.title}</h3>
                  <p className="text-blue-600 font-bold">{prop.price}</p>
                </div>
                <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                  <MapPin className="w-4 h-4" />
                  {prop.location}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                      <Bed className="w-4 h-4 text-blue-500" /> {prop.beds}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                      <Bath className="w-4 h-4 text-blue-500" /> {prop.baths}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm">
                      <Square className="w-4 h-4 text-blue-500" /> {prop.sqft}
                    </div>
                  </div>
                  <Link href={`/listings/${prop.id}`}>
                    <Button variant="outline" size="sm" className="rounded-lg">Details</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold italic">Why LuxeEstate?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We provide unparalleled expertise and personalized service to help you find the home that perfectly matches your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Premium Selection", desc: "Access to the most exclusive luxury properties." },
              { icon: Search, title: "Deep Research", desc: "We provide comprehensive market insights for every deal." },
              { icon: MapPin, title: "Best Locations", desc: "Prime real estate in the world's most desirable areas." },
              { icon: ArrowRight, title: "Smooth Process", desc: "From viewing to closing, we handle everything." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-blue-500 transition-colors group">
                <item.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to find your next home?</h2>
            <p className="text-blue-100">Subscribe to our newsletter and get the latest listings delivered to your inbox.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <Input placeholder="Enter your email" className="bg-white/20 border-white/20 text-white placeholder:text-white/60 h-12 min-w-[300px]" />
            <Button className="bg-white text-blue-600 hover:bg-zinc-100 h-12 font-bold px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
