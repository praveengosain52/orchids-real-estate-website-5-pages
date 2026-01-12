"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, Calendar, ChevronLeft, Share2, Heart, CheckCircle2 } from "lucide-react";

export default function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Mock data for the specific property
  const property = {
    id: id,
    title: "Modern Sunset Villa",
    location: "Beverly Hills, CA 90210",
    price: "$2,500,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    lotSize: "0.5 Acres",
    yearBuilt: 2022,
    type: "Single Family Home",
    description: "Experience luxury living at its finest in this stunning modern villa located in the heart of Beverly Hills. This architectural masterpiece features floor-to-ceiling windows, an open-concept floor plan, and premium finishes throughout. The gourmet kitchen is equipped with top-of-the-line appliances and a large island, perfect for entertaining.",
    amenities: ["Swimming Pool", "Gourmet Kitchen", "Smart Home System", "Home Theater", "Wine Cellar", "3-Car Garage", "Landscaped Garden", "Security System"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1600607687940-47a0f925901e?auto=format&fit=crop&q=80&w=600"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href="/listings" className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" />
        Back to Listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative col-span-2 md:col-span-1 h-full">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4">
              <div className="relative h-full">
                <Image
                  src={property.images[1]}
                  alt={property.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative h-full">
                <Image
                  src={property.images[2]}
                  alt={property.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Badge className="bg-blue-600 text-white border-none">{property.type}</Badge>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">{property.title}</h1>
              <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-zinc-100 dark:border-zinc-800">
            <div className="space-y-1">
              <p className="text-sm text-zinc-500">Bedrooms</p>
              <div className="flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-zinc-50">
                <Bed className="w-5 h-5 text-blue-500" /> {property.beds}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-zinc-500">Bathrooms</p>
              <div className="flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-zinc-50">
                <Bath className="w-5 h-5 text-blue-500" /> {property.baths}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-zinc-500">Square Feet</p>
              <div className="flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-zinc-50">
                <Square className="w-5 h-5 text-blue-500" /> {property.sqft}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-zinc-500">Built In</p>
              <div className="flex items-center gap-2 font-bold text-lg text-zinc-900 dark:text-zinc-50">
                <Calendar className="w-5 h-5 text-blue-500" /> {property.yearBuilt}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Description</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="sticky top-24 border-zinc-200 dark:border-zinc-800 p-6 space-y-6">
            <div className="space-y-1">
              <p className="text-sm text-zinc-500">Asking Price</p>
              <p className="text-3xl font-bold text-blue-600">{property.price}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">Contact Agent</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                    alt="Agent"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 dark:text-zinc-50">John Anderson</p>
                  <p className="text-sm text-zinc-500">Senior Real Estate Consultant</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold rounded-xl">
                Schedule a Tour
              </Button>
              <Button variant="outline" className="w-full h-12 font-bold rounded-xl">
                Send Message
              </Button>
            </div>
            
            <p className="text-xs text-center text-zinc-400">
              Response time: Usually within 2 hours
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
